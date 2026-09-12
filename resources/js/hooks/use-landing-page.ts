import { useCallback, useEffect, useState } from 'react';
import { FLASH_WINDOW_MS } from '@/data/landing';

const FLASH_START_KEY = 'fb_flash_start';
const WA_BUBBLE_DISMISSED_KEY = 'fb_wa_bubble_v2';
const CHECKOUT_CLICKED_KEY = 'fb_checkout_clicked_at';
const RETURN_POPUP_SHOWN_KEY = 'fb_return_popup_shown';

function flashRemainingMs(): number {
    if (typeof window === 'undefined') {
        return FLASH_WINDOW_MS;
    }

    let start = Number(localStorage.getItem(FLASH_START_KEY) || 0);

    if (!start) {
        start = Date.now();

        try {
            localStorage.setItem(FLASH_START_KEY, String(start));
        } catch {
            /* storage disabled */
        }
    }

    return Math.max(0, start + FLASH_WINDOW_MS - Date.now());
}

function formatCountdown(ms: number): string {
    const t = Math.floor(ms / 1000);
    const h = String(Math.floor(t / 3600)).padStart(2, '0');
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
    const s = String(t % 60).padStart(2, '0');

    return `${h}:${m}:${s}`;
}

/** Per-visitor flash sale countdown persisted in localStorage. */
export function useFlashSale(): { countdown: string; active: boolean } {
    const [countdown, setCountdown] = useState('12:00:00');
    const [active, setActive] = useState(true);

    useEffect(() => {
        const tick = (): void => {
            const left = flashRemainingMs();
            setCountdown(formatCountdown(left));
            setActive(left > 0);
        };
        tick();
        const id = window.setInterval(tick, 1000);

        return () => window.clearInterval(id);
    }, []);

    return { countdown, active };
}

/** True once the page has scrolled past the given offset. */
export function useScrolled(offset = 12): boolean {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = (): void => setScrolled(window.scrollY > offset);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

    return scrolled;
}

/** Height of the urgency banner, used to offset the sticky navbar and comparison header. */
export function useElementHeight(id: string, deps: unknown[]): number {
    const [height, setHeight] = useState(38);

    useEffect(() => {
        const measure = (): void => {
            const el = document.getElementById(id);
            setHeight(el ? Math.round(el.getBoundingClientRect().height) : 0);
        };
        measure();
        window.addEventListener('resize', measure);

        return () => window.removeEventListener('resize', measure);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, ...deps]);

    return height;
}

/** Proactive WhatsApp bubble: opens after 7s or 25% scroll, once per session. */
export function useWhatsappBubble(): { open: boolean; dismiss: () => void } {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let dismissed = false;

        try {
            dismissed = sessionStorage.getItem(WA_BUBBLE_DISMISSED_KEY) === '1';
        } catch {
            /* storage disabled */
        }

        if (dismissed) {
            return;
        }

        const show = (): void => setOpen(true);
        const timer = window.setTimeout(show, 7000);
        const onScroll = (): void => {
            const pct =
                (window.scrollY + window.innerHeight) /
                Math.max(document.documentElement.scrollHeight, 1);

            if (pct > 0.25) {
                show();
                window.removeEventListener('scroll', onScroll);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const dismiss = useCallback((): void => {
        setOpen(false);

        try {
            sessionStorage.setItem(WA_BUBBLE_DISMISSED_KEY, '1');
        } catch {
            /* storage disabled */
        }
    }, []);

    return { open, dismiss };
}

/** Exit-checkout survey: shown when the visitor returns to the tab within 24h of a checkout click. */
export function useReturnPopup(): {
    open: boolean;
    close: () => void;
    markCheckoutClicked: () => void;
} {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onVisible = (): void => {
            if (document.visibilityState !== 'visible') {
                return;
            }

            try {
                const clickedAt = Number(
                    localStorage.getItem(CHECKOUT_CLICKED_KEY) || 0,
                );
                const shown = localStorage.getItem(RETURN_POPUP_SHOWN_KEY);

                if (clickedAt && !shown && Date.now() - clickedAt < 86400000) {
                    setOpen(true);
                    localStorage.setItem(RETURN_POPUP_SHOWN_KEY, '1');
                }
            } catch {
                /* storage disabled */
            }
        };
        document.addEventListener('visibilitychange', onVisible);

        return () =>
            document.removeEventListener('visibilitychange', onVisible);
    }, []);

    const close = useCallback((): void => setOpen(false), []);
    const markCheckoutClicked = useCallback((): void => {
        try {
            localStorage.setItem(CHECKOUT_CLICKED_KEY, String(Date.now()));
            localStorage.removeItem(RETURN_POPUP_SHOWN_KEY);
        } catch {
            /* storage disabled */
        }
    }, []);

    return { open, close, markCheckoutClicked };
}

/** Index-based lightbox with wrap-around navigation. */
export function useLightbox(count: number) {
    const [index, setIndex] = useState<number | null>(null);
    const close = useCallback((): void => setIndex(null), []);
    const prev = useCallback(
        (): void => setIndex((i) => ((i ?? 0) - 1 + count) % count),
        [count],
    );
    const next = useCallback(
        (): void => setIndex((i) => ((i ?? 0) + 1) % count),
        [count],
    );

    return { index, open: setIndex, close, prev, next };
}

/** Escape / arrow keys for whichever overlay is currently open (first match wins). */
export function useOverlayKeys(
    overlays: {
        active: boolean;
        close: () => void;
        prev?: () => void;
        next?: () => void;
    }[],
): void {
    useEffect(() => {
        const onKey = (e: KeyboardEvent): void => {
            const overlay = overlays.find((o) => o.active);

            if (!overlay) {
                return;
            }

            if (e.key === 'Escape') {
                overlay.close();
            } else if (e.key === 'ArrowLeft') {
                overlay.prev?.();
            } else if (e.key === 'ArrowRight') {
                overlay.next?.();
            }
        };
        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, [overlays]);
}
