import type { PropsWithChildren } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { BTN_OUTLINE, BTN_PRIMARY, SECTION_BADGE } from './styles';

export function SectionBadge({ children }: PropsWithChildren) {
    return <div className={SECTION_BADGE}>{children}</div>;
}

/** "★★★★★ 4.9/5 Google Review • 45.000+ Alumni Sukses • 🛡 Garansi 100%" */
export function TrustLine() {
    return (
        <div className="[margin-top:12px] [display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:center] [gap:8px_12px]">
            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [color:#6b7280]">
                ★★★★★
                <span className="[margin-left:4px]">4.9/5 Google Review</span>
            </span>
            <span className="[font-size:12px] [color:#6b7280]">•</span>
            <span className="[font-size:12px] [font-weight:600] [color:#6b7280]">
                45.000+ Alumni Sukses
            </span>
            <span className="[font-size:12px] [color:#6b7280]">•</span>
            <span className="[font-size:12px] [font-weight:600] [color:#6b7280]">
                🛡 Garansi 100%
            </span>
        </div>
    );
}

/** Mid-page CTA pair: join (scroll to pricing) + proof (scroll to testimonials). */
export function CtaPair({
    section,
    joinLabel = 'Gabung Sekarang',
    proofLabel = 'Lihat Bukti Alumni',
}: {
    section: string;
    joinLabel?: string;
    proofLabel?: string;
}) {
    return (
        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
            <TrackedCTA
                zone="midpage"
                action="scroll"
                label={`${section} - ${joinLabel}`}
                href="#pricing"
                className={BTN_PRIMARY}
            >
                {joinLabel} →
            </TrackedCTA>
            <TrackedCTA
                zone="midpage"
                action="scroll"
                label={`${section} - ${proofLabel}`}
                href="#testimonials"
                className={BTN_OUTLINE}
            >
                {proofLabel} →
            </TrackedCTA>
        </div>
    );
}

export function GoogleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 48 48">
            <path
                fill="#FFC107"
                d="M43.6 20.5H42V20.4H24v7.2h11.3C33.7 32 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
            ></path>
            <path
                fill="#FF3D00"
                d="M6.3 14.7l5.8 4.3C13.9 15.4 18.6 12 24 12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.9 6.1 29.2 4 24 4 16.4 4 9.8 8.5 6.3 14.7z"
            ></path>
            <path
                fill="#4CAF50"
                d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.2C29.2 35.2 26.7 36 24 36c-5.3 0-9.6-3.4-11.3-8l-6 4.6C9.6 39.5 16.2 44 24 44z"
            ></path>
            <path
                fill="#1976D2"
                d="M43.6 20.5H42V20.4H24v7.2h11.3c-1 3-3.1 5.5-5.9 7.1l6.2 5.2C39.4 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
            ></path>
        </svg>
    );
}

/** Divider shown between "atau" alternatives inside pricing cards. */
export function OrDivider() {
    return (
        <div className="[margin:12px_0] [display:flex] [align-items:center] [gap:12px]">
            <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
            <span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">
                atau
            </span>
            <div className="[height:1px] [flex:1] [background:#e5e7eb]"></div>
        </div>
    );
}
