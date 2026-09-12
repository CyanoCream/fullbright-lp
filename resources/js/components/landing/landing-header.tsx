import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { css, navStyle } from './styles';

export const URGENCY_BANNER_ID = 'urgency-banner';

export function UrgencyBanner({ countdown }: { countdown: string }) {
    return (
        <TrackedCTA
            zone="sticky"
            action="scroll"
            label="Banner - Flash Sale Countdown"
            id={URGENCY_BANNER_ID}
            href="#pricing"
            className="[position:sticky] [top:0] [z-index:51] [display:flex] [flex-wrap:nowrap] [align-items:center] [justify-content:center] [gap:8px] [overflow:hidden] [padding:8px_12px] [text-align:center] [white-space:nowrap] [background:#C10707] [text-decoration:none] max-[500px]:[padding:10px_12px]"
        >
            <span
                id="banner-full"
                className="[font-size:13px] [line-height:1.4] [font-weight:800] [letter-spacing:0.02em] [color:#fff] [text-transform:uppercase] max-[500px]:[display:none]"
            >
                🔥 FLASH SALE SEPTEMBER · DISKON 60%
            </span>
            <span
                id="banner-short"
                className="[display:none] [font-size:11px] [line-height:1.4] [font-weight:800] [letter-spacing:0.01em] [color:#fff] [text-transform:uppercase] max-[500px]:[display:inline] max-[500px]:[font-size:12.5px]"
            >
                🔥 FLASH SALE SEPTEMBER · 60%
            </span>
            <span className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:5px] [border-radius:9999px] [padding:3px_10px] [line-height:1.2] [color:#C10707] [background:#fff]">
                <span
                    id="banner-timer-label"
                    className="[font-size:11px] [font-weight:800] [letter-spacing:0.04em] [text-transform:uppercase] max-[500px]:[display:none]"
                >
                    ⏱ Berakhir
                </span>
                <span className="[font-size:13px] [font-weight:900] [letter-spacing:0.04em] [font-variant-numeric:tabular-nums] max-[500px]:[font-size:14px]">
                    {countdown}
                </span>
            </span>
        </TrackedCTA>
    );
}

export function Navbar({
    scrolled,
    bannerHeight,
}: {
    scrolled: boolean;
    bannerHeight: number;
}) {
    return (
        <header style={css(navStyle(scrolled, bannerHeight))}>
            <div className="[margin:0_auto] [display:flex] [height:64px] [max-width:1152px] [align-items:center] [justify-content:space-between] [padding:0_24px]">
                <a
                    href="#"
                    className="[display:flex] [align-items:center] [text-decoration:none]"
                >
                    <img
                        src="https://toefl.fullbrightindonesia.org/logo/Logo-Fullbright.webp"
                        alt="Full Bright Indonesia"
                        className="[height:auto] [width:160px] [object-fit:contain]"
                    />
                </a>
                <TrackedCTA
                    zone="nav"
                    action="scroll"
                    label="Navbar - Amankan Seat"
                    href="#pricing"
                    className="[display:flex] [flex-direction:column] [justify-content:center] [gap:1px] [border-radius:9999px] [padding:7px_16px] [box-shadow:0_6px_16px_rgba(215,8,8,0.35)] [background:#D70808] [text-decoration:none]"
                >
                    <span className="[font-size:13px] [line-height:1.2] [font-weight:800] [white-space:nowrap] [color:#fff]">
                        🎓 Amankan Seat
                    </span>
                    <span className="[display:flex] [align-items:center] [gap:5px]">
                        <span className="[font-size:11px] [white-space:nowrap] [color:rgba(255,255,255,0.55)] [text-decoration:line-through]">
                            Rp250rb
                        </span>
                        <span className="[font-size:14px] [font-weight:900] [white-space:nowrap] [color:#fff]">
                            Rp99rb
                        </span>
                        <span className="[border-radius:9999px] [padding:2px_7px] [font-size:10px] [font-weight:900] [white-space:nowrap] [color:#151515] [background:#F59E0B]">
                            -60%
                        </span>
                    </span>
                </TrackedCTA>
            </div>
        </header>
    );
}
