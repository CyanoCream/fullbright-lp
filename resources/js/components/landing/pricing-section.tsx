import type { ReactNode } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import {
    BUNDLING_GUARANTEES,
    LEGAL_DOCUMENTS,
    SELF_STUDY_EXCLUDED,
    SELF_STUDY_PACKAGE,
    TUTOR_PACKAGES,
} from '@/data/landing';
import type {
    PackageFeature,
    PricingMode,
    PricingPackage,
} from '@/data/landing';
import { useLanding } from './landing-context';
import { OrDivider, SectionBadge } from './shared';
import {
    CHECKOUT_BTN,
    css,
    SECTION_TITLE,
    toggleBtnStyle,
    WHATSAPP_OUTLINE_BTN,
} from './styles';

const FEATURE_ICON: Record<
    PackageFeature['kind'],
    { icon: string; className: string }
> = {
    included: { icon: '✓', className: '[color:#16a34a]' },
    global: { icon: '🌐', className: '[color:#3b82f6]' },
    bonus: { icon: '', className: '[color:#D70808]' },
    excluded: { icon: '✕', className: '[color:#d1d5db]' },
};

const CHIP =
    '[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [padding:4px_10px] [border-radius:9999px]';
const PROOF_PILL =
    '[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600]';

export function PricingSection({
    mode,
    onModeChange,
}: {
    mode: PricingMode;
    onModeChange: (mode: PricingMode) => void;
}) {
    return (
        <section
            id="pricing"
            className="[padding:80px_24px_48px] [background:#fff]"
        >
            <div className="[margin:0_auto] [max-width:1152px]">
                <div className="[margin-bottom:32px] [text-align:center]">
                    <SectionBadge>
                        ⏳ Mulai dari Sekarang, Bukan Nanti
                    </SectionBadge>
                    <h2 className={`[margin:0_0_20px] ${SECTION_TITLE}`}>
                        Persiapkan Sekarang,{' '}
                        <span className="[color:rgb(215,_8,_8)]">
                            Jangan Ditunda
                        </span>
                    </h2>
                    <p className="[margin:0] [margin-right:auto] [margin-left:auto] [max-width:512px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                        <b>
                            Semakin cepat kamu mulai, semakin besar peluang kamu
                            diterima beasiswa
                        </b>{' '}
                        karena skor 500+ tercapai sebelum deadline submission.
                    </p>
                </div>

                <ModeToggle mode={mode} onChange={onModeChange} />

                {mode === 'self' ? <SelfStudyPricing /> : <TutorPricing />}
            </div>
        </section>
    );
}

function ModeToggle({
    mode,
    onChange,
}: {
    mode: PricingMode;
    onChange: (mode: PricingMode) => void;
}) {
    const self = mode === 'self';

    return (
        <div className="[margin-bottom:44px] [text-align:center]">
            <p
                className={`[margin:0_0_6px] [font-size:13px] [font-weight:800] [letter-spacing:0.08em] [text-transform:uppercase] ${self ? '[color:#D70808]' : '[color:#3D4349]'}`}
            >
                👇 Pilih Cara Belajarmu
            </p>

            <div className="[display:inline-flex] [gap:4px] [border-radius:9999px] [padding:5px] [box-shadow:0_2px_12px_rgba(215,8,8,0.08)] [background:#fff] [border:1px_solid_#ffb3b3]">
                <button
                    onClick={() => onChange('self')}
                    style={css(toggleBtnStyle(self))}
                >
                    Belajar Sendiri
                </button>
                <button
                    onClick={() => onChange('tutor')}
                    style={css(toggleBtnStyle(!self))}
                >
                    Dibimbing Tutor
                    <span
                        className={`[position:absolute] [top:-9px] [right:-6px] [display:flex] [height:34px] [width:34px] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:11px] [font-weight:900] [color:#fff] [box-shadow:0_2px_8px_rgba(249,115,22,0.4)] [border:2px_solid_#fff] ${self ? '[background:#F97316]' : '[background-color:#F9A316]'}`}
                    >
                        -80%
                    </span>
                </button>
            </div>
        </div>
    );
}

function SelfStudyPricing() {
    return (
        <>
            <div className="[margin:0_auto_40px] [max-width:520px]">
                <PackageCard
                    pkg={SELF_STUDY_PACKAGE}
                    className="[position:relative] [overflow:hidden] [box-shadow:0_8px_32px_rgba(245,183,0,0.15)] [background:linear-gradient(165deg,#ffffff_0%,#fffbf0_100%)] [border:2px_solid_#F5B700]"
                    ribbon={
                        <Ribbon className="[color:#FFFFFF] [background:#F5B700]">
                            🔥 POPULAR
                        </Ribbon>
                    }
                    chip={
                        <span
                            className={`${CHIP} [color:#D70808] [background:#FFF0F0]`}
                        >
                            📚 Mandiri
                        </span>
                    }
                    afterFeatures={
                        <>
                            <p className="[margin:12px_0_8px] [font-size:12px] [font-weight:700] [letter-spacing:0.06em] [color:#9ca3af] [text-transform:uppercase]">
                                Belum termasuk:
                            </p>
                            <ul className="[margin:0_0_20px] [display:flex] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                                {SELF_STUDY_EXCLUDED.map((item) => (
                                    <li
                                        key={item}
                                        className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#9ca3af]"
                                    >
                                        <span className="[margin-top:1px] [flex-shrink:0] [color:#d1d5db]">
                                            ✕
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </>
                    }
                    footer={
                        <p className="[margin:14px_0_0] [text-align:center] [font-size:13px] [line-height:1.5] [color:#9ca3af]">
                            Mau intip materinya dulu?{' '}
                            <TrackedCTA
                                zone="pricing"
                                action="link"
                                label="Pricing - Coba gratis 1 modul di LMS"
                                href="https://class.fullbrightindonesia.com/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[font-weight:800] [color:#6b7280] [text-underline-offset:3px] [text-decoration:underline]"
                            >
                                Coba gratis 1 modul di LMS
                            </TrackedCTA>
                        </p>
                    }
                />
            </div>

            <div className="[margin:0_auto_32px] [max-width:520px]">
                <p className="[margin:0_0_16px] [text-align:center] [font-size:13px] [font-weight:800] [letter-spacing:0.06em] [color:#9a9a9a] [text-transform:uppercase]">
                    Kata Mereka yang Belajar Mandiri
                </p>
                <div className="[display:grid] [grid-template-columns:1fr] [gap:12px]">
                    <div className="[border-radius:16px] [padding:22px] [background:#F9F9F9] [border:1px_solid_#ececec]">
                        <p className="[margin:0_0_8px] [font-size:16px] [letter-spacing:0.08em] [color:#FBBF24]">
                            ★★★★★
                        </p>
                        <p className="[margin:0_0_18px] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                            "Trm kasih Full Bright Indonesia yg sudah memberikan
                            kesempatan belajar Bhs Inggris, belajar di sini bisa
                            menjadi alternatif bagi individu yg ingin belajar
                            sambil bekerja, LMS bisa diakses kapan pun"
                        </p>
                        <div className="[display:flex] [align-items:center] [gap:14px]">
                            <img
                                src="/assets/nina.png"
                                alt="Nina Hernawati"
                                className="[height:60px] [width:60px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [box-shadow:0_3px_12px_rgba(0,0,0,0.12)] [border:2px_solid_#fff]"
                            />
                            <div>
                                <p className="[margin:0_0_2px] [font-family:Nunito,sans-serif] [font-size:17px] [font-weight:900] [color:#151515]">
                                    Nina Hernawati
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function TutorPricing() {
    const [starter, bundling, intermediate] = TUTOR_PACKAGES;
    const ratingChip = (tone: string) => (
        <span className={`${CHIP} ${tone}`}>
            ★★★★★<span className="[margin-left:4px]">5.0</span>
        </span>
    );
    const plainCard =
        '[border:2px_solid_#e5e7eb] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)]';

    return (
        <>
            <div className="[margin-bottom:56px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] [gap:24px]">
                <PackageCard
                    pkg={starter}
                    className={plainCard}
                    chip={ratingChip('[background:#F0FDF4] [color:#16a34a]')}
                    footer={<ProofPills />}
                />
                <PackageCard
                    pkg={bundling}
                    className="[position:relative] [overflow:hidden] [box-shadow:0_16px_56px_rgba(22,163,74,0.2),0_0_0_1px_rgba(22,163,74,0.08)] [background:linear-gradient(165deg,#ffffff_0%,#f0fdf4_100%)] [border:2px_solid_#16a34a]"
                    highlight
                    ribbon={
                        <Ribbon className="[color:#fff] [background:#16a34a]">
                            ⭐ PALING HEMAT
                        </Ribbon>
                    }
                    chip={ratingChip('[background:#FFF0F0] [color:#D70808]')}
                    afterFeatures={<BundlingGuarantees />}
                    afterCheckout={
                        <p className="[margin:6px_0_0] [text-align:center] [font-size:12px] [font-weight:600] [color:#D70808]">
                            * Centang opsi Bundle saat checkout
                        </p>
                    }
                    footer={<ProofPills />}
                />
                <PackageCard
                    pkg={intermediate}
                    className={plainCard}
                    chip={ratingChip('[background:#F0FDF4] [color:#16a34a]')}
                    footer={<ProofPills />}
                />
            </div>

            <div className="[margin:0_auto_32px] [max-width:672px] [border-radius:16px] [padding:24px] [background:#F3F3F3] [border:1px_solid_#e5e7eb]">
                <p className="[margin:0_0_12px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                    Legalitas Resmi
                </p>
                <div className="[display:flex] [flex-direction:column] [gap:6px]">
                    {LEGAL_DOCUMENTS.map((doc) => (
                        <span
                            key={doc}
                            className="[font-size:12px] [font-weight:600] [color:#151515]"
                        >
                            ✓ {doc}
                        </span>
                    ))}
                </div>
                <TrackedCTA
                    zone="pricing"
                    action="link"
                    label="Pricing - Info Detail Legalitas"
                    href="https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/K9998700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="[margin-top:12px] [display:inline-block] [font-size:12px] [font-weight:600] [color:#D70808] [text-decoration:none]"
                >
                    Info Detail Legalitas →
                </TrackedCTA>
            </div>
        </>
    );
}

function Ribbon({
    className,
    children,
}: {
    className: string;
    children: ReactNode;
}) {
    return (
        <div
            className={`[position:absolute] [top:0] [right:0] [border-bottom-left-radius:16px] [padding:8px_16px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] ${className}`}
        >
            {children}
        </div>
    );
}

function ProofPills() {
    return (
        <div className="[margin-top:14px] [display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:center] [gap:6px]">
            <span
                className={`${PROOF_PILL} [color:#B45309] [background:#FEF3C7]`}
            >
                ★ 4.9/5
            </span>
            <span
                className={`${PROOF_PILL} [color:#15803d] [background:#F0FDF4]`}
            >
                45.000+
            </span>
            <span
                className={`${PROOF_PILL} [color:#1d4ed8] [background:#EFF6FF]`}
            >
                🛡 Garansi 100%
            </span>
        </div>
    );
}

function BundlingGuarantees() {
    return (
        <div className="[margin-bottom:20px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] [gap:12px]">
            {BUNDLING_GUARANTEES.map((item) => (
                <div
                    key={item.title}
                    className="[border-radius:16px] [padding:16px] [background:#F3F3F3]"
                >
                    <div className="[margin-bottom:8px] [display:flex] [align-items:center] [gap:10px]">
                        <div className="[display:flex] [height:32px] [width:32px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:10px] [background:#FEF3C7]">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="#F59E0B"
                                stroke="#F59E0B"
                            >
                                <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"></path>
                            </svg>
                        </div>
                        <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.3] [font-weight:900] [color:#151515]">
                            {item.title}
                        </p>
                    </div>
                    <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

type PackageCardProps = {
    pkg: PricingPackage;
    /** Border / background treatment of the card. */
    className: string;
    /** Green accent (score + checkout) used by the best-value bundle. */
    highlight?: boolean;
    ribbon?: ReactNode;
    chip: ReactNode;
    afterFeatures?: ReactNode;
    afterCheckout?: ReactNode;
    footer?: ReactNode;
};

function PackageCard({
    pkg,
    className,
    highlight = false,
    ribbon,
    chip,
    afterFeatures,
    afterCheckout,
    footer,
}: PackageCardProps) {
    const { whatsappLink, checkoutUrls, markCheckoutClicked } = useLanding();

    return (
        <div
            className={`[display:flex] [flex-direction:column] [border-radius:24px] [padding:28px] ${className}`}
        >
            {ribbon}
            <div
                className={`[margin-bottom:4px] [display:flex] [align-items:flex-start] [justify-content:space-between] ${ribbon ? '[margin-top:20px]' : ''}`}
            >
                <div>
                    <p
                        className={`[margin:0_0_4px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [text-transform:uppercase] ${highlight ? '[color:#D70808]' : '[color:#9ca3af]'}`}
                    >
                        {pkg.eyebrow}
                    </p>
                    <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:24px] [font-weight:900] [color:#151515]">
                        {pkg.name}
                    </h3>
                    {pkg.subtitle && (
                        <p className="[margin:2px_0_0] [font-size:12px] [font-weight:600] [color:#D70808]">
                            {pkg.subtitle}
                        </p>
                    )}
                </div>
                {chip}
            </div>
            <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
                Target Skor:{' '}
                <span
                    className={`[font-size:20px] [font-weight:900] ${highlight ? '[color:#D70808]' : '[color:#16a34a]'}`}
                >
                    {pkg.targetScore}
                </span>{' '}
                ·{' '}
                <span className="[font-weight:900] [color:#151515]">
                    {pkg.duration}
                </span>
                {pkg.minimumScore && ` · ${pkg.minimumScore}`}
            </p>
            <div className="[margin-bottom:20px] [border-radius:16px] [padding:16px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                <div className="[margin-bottom:4px] [display:flex] [align-items:center] [gap:8px]">
                    <span className="[font-size:14px] [font-weight:600] [color:#9ca3af] [text-decoration:line-through]">
                        {pkg.normalPrice}
                    </span>
                    <span className="[border-radius:9999px] [padding:2px_8px] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                        {pkg.discountBadge}
                    </span>
                </div>
                <p
                    className={`[font-family:Nunito,sans-serif] [font-size:30px] [font-weight:900] [color:#D70808] ${pkg.savingsNote ? '[margin:0_0_4px]' : '[margin:0]'}`}
                >
                    {pkg.price}
                </p>
                {pkg.savingsNote && (
                    <p className="[margin:0] [font-size:12px] [font-weight:600] [color:#D70808]">
                        {pkg.savingsNote}
                    </p>
                )}
            </div>
            <ul className="[margin:0_0_8px] [display:flex] [flex:1] [flex-direction:column] [gap:8px] [padding:0] [list-style:none]">
                {pkg.features.map((feature) => (
                    <li
                        key={feature.label}
                        className={`[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] ${feature.bold ? '[font-weight:800]' : '[font-weight:500]'}`}
                    >
                        <span
                            className={`[margin-top:1px] [flex-shrink:0] ${FEATURE_ICON[feature.kind].className}`}
                        >
                            {FEATURE_ICON[feature.kind].icon}
                        </span>
                        {feature.label}
                    </li>
                ))}
            </ul>
            {afterFeatures}
            <div className="[display:flex] [flex-direction:column] [gap:6px]">
                <TrackedCTA
                    zone="pricing"
                    action="external_checkout"
                    label={`Pricing ${pkg.trackingName} - ${pkg.ctaLabel}`}
                    href={checkoutUrls[pkg.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={markCheckoutClicked}
                    className={`${CHECKOUT_BTN} ${highlight ? '[box-shadow:0_6px_24px_rgba(22,163,74,0.4)] [background:#16a34a]' : '[box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [background:#D70808]'}`}
                >
                    {pkg.ctaLabel} →
                </TrackedCTA>
                <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [text-align:center] [font-size:12px] [color:#9ca3af]">
                    🔒 Pembayaran aman &amp; terenkripsi
                </p>
            </div>
            {afterCheckout}
            <OrDivider />
            <TrackedCTA
                zone="pricing"
                action="whatsapp"
                label={`Pricing ${pkg.trackingName} - Tanya via WhatsApp`}
                href={whatsappLink(pkg.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={WHATSAPP_OUTLINE_BTN}
            >
                <img
                    src="/assets/admin-avatar.jpg"
                    alt="Admin Full Bright"
                    className="[height:26px] [width:26px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366]"
                />
                💬 Tanya via WhatsApp
            </TrackedCTA>
            {footer}
        </div>
    );
}
