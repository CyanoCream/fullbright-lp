import { useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { RETURN_POPUP_OPTIONS } from '@/data/landing';
import { useLanding } from './landing-context';
import { css, LIGHTBOX_OVERLAY, rpOptStyle } from './styles';

const LIGHTBOX_BUTTON =
    '[position:absolute] [background:none] [border:none] [color:rgba(255,255,255,0.7)] [cursor:pointer]';

/** Fullscreen image viewer with previous / next controls. */
export function Lightbox({
    label,
    imageStyle,
    caption,
    position,
    onClose,
    onPrev,
    onNext,
}: {
    label: string;
    imageStyle: string;
    caption?: string;
    position: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    return (
        <div className={LIGHTBOX_OVERLAY} onClick={onClose}>
            <button
                onClick={onClose}
                className={`${LIGHTBOX_BUTTON} [top:16px] [right:16px] [font-size:28px]`}
            >
                ✕
            </button>
            <button
                onClick={onPrev}
                className={`${LIGHTBOX_BUTTON} [left:16px] [padding:8px] [font-size:36px]`}
            >
                ‹
            </button>
            <div
                className="[display:flex] [flex-direction:column] [align-items:center] [gap:16px] [padding:0_64px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    role="img"
                    aria-label={label}
                    style={css(imageStyle)}
                ></div>
                {caption && (
                    <p className="[margin:0] [font-size:14px] [color:rgba(255,255,255,0.6)]">
                        {caption}
                    </p>
                )}
                <p className="[margin:0] [font-size:12px] [color:rgba(255,255,255,0.4)]">
                    {position}
                </p>
            </div>
            <button
                onClick={onNext}
                className={`${LIGHTBOX_BUTTON} [right:16px] [padding:8px] [font-size:36px]`}
            >
                ›
            </button>
        </div>
    );
}

/** Bottom sheet asking why the visitor has not finished checkout yet. */
export function ReturnPopup({ onClose }: { onClose: () => void }) {
    const { whatsappLink } = useLanding();
    const [selected, setSelected] = useState<number | null>(null);
    const choice = selected === null ? null : RETURN_POPUP_OPTIONS[selected];

    return (
        <div
            className="[position:fixed] [inset:0] [z-index:100] [display:flex] [animation:fbFadeInUp_0.2s_ease] [align-items:flex-end] [justify-content:center] [background:rgba(21,21,21,0.45)]"
            onClick={onClose}
        >
            <div
                className="[position:relative] [max-height:60vh] [width:100%] [max-width:480px] [animation:fbSheetUp_0.25s_ease] [overflow-y:auto] [border-radius:24px_24px_0_0] [padding:22px_22px_28px] [box-shadow:0_-12px_40px_rgba(0,0,0,0.18)] [background:#fff]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Tutup"
                    className="[position:absolute] [top:16px] [right:16px] [display:flex] [height:30px] [width:30px] [cursor:pointer] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:16px] [color:#6b7280] [background:#F3F4F6] [border:none]"
                >
                    ✕
                </button>
                <p className="[margin:0_0_6px] [font-size:11px] [font-weight:700] [letter-spacing:0.06em] [color:#6b6b6b] [text-transform:uppercase]">
                    Sebelum Kamu Pergi
                </p>
                <h3 className="[margin:0_0_18px] [padding-right:30px] [font-family:Nunito,sans-serif] [font-size:clamp(22px,5vw,26px)] [line-height:1.25] [font-weight:800] [color:#151515]">
                    Apa yang{' '}
                    <span className="[color:#D70808]">
                        Masih Bikin Kamu Ragu Daftar?
                    </span>
                </h3>

                {choice ? (
                    <>
                        <TrackedCTA
                            zone="floating"
                            action="whatsapp"
                            label="Return Popup - Konsultasi via WhatsApp"
                            href={whatsappLink(choice.whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[margin-bottom:14px] [box-sizing:border-box] [display:flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [border-radius:12px] [padding:13px_16px] [font-size:14px] [font-weight:700] [color:#fff] [background:#16a34a] [text-decoration:none]"
                        >
                            💬 Konsultasi via WhatsApp →
                        </TrackedCTA>
                        <p className="[margin:0_0_2px] [font-size:13px] [font-weight:700] [color:#151515]">
                            {choice.subtext}
                        </p>
                        <p className="[margin:0_0_12px] [font-size:12px] [font-weight:500] [color:#6b7280]">
                            Tim kami siap bantu jawab langsung lewat WhatsApp.
                        </p>
                        <div className="[box-sizing:border-box] [display:flex] [min-height:54px] [width:100%] [align-items:center] [gap:10px] [border-radius:12px] [padding:12px_14px] [background:rgba(215,8,8,0.05)] [border:1px_solid_#D70808]">
                            <span className="[display:flex] [height:18px] [width:18px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:10px] [font-weight:800] [color:#fff] [background:#D70808]">
                                ✓
                            </span>
                            <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                {choice.label}
                            </span>
                        </div>
                    </>
                ) : (
                    <div className="[display:flex] [flex-direction:column] [gap:8px]">
                        {RETURN_POPUP_OPTIONS.map((option, i) => (
                            <button
                                key={option.label}
                                onClick={() => setSelected(i)}
                                style={css(rpOptStyle())}
                            >
                                <span className="[flex:1] [text-align:left] [font-size:14px] [font-weight:500] [color:#151515]">
                                    {option.label}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

const WHATSAPP_GREETING =
    'Halo Admin Full Bright Indonesia. Saya lihat iklan. Submission beasiswa luar negeri saya butuh skor TOEFL, saya minat daftar kelas.';

/** Floating WhatsApp button with the proactive "Ms. Fini" chat bubble. */
export function WhatsappFloat({
    bubbleOpen,
    onDismissBubble,
}: {
    bubbleOpen: boolean;
    onDismissBubble: () => void;
}) {
    const { whatsappLink } = useLanding();
    const href = whatsappLink(WHATSAPP_GREETING);

    return (
        <div className="[position:fixed] [right:20px] [bottom:20px] [z-index:52] [display:flex] [flex-direction:column] [align-items:flex-end] [gap:10px]">
            {bubbleOpen && (
                <div className="[position:relative] [max-width:270px] [border-radius:18px_18px_6px_18px] [padding:14px_16px_14px_14px] [box-shadow:0_10px_34px_rgba(0,0,0,0.18)] [background:#fff] [border:1px_solid_#e5e7eb] max-[559px]:[max-width:208px] max-[559px]:[border-radius:14px_14px_5px_14px] max-[559px]:[padding:10px_12px_10px_11px]">
                    <button
                        onClick={onDismissBubble}
                        aria-label="Tutup"
                        className="[position:absolute] [top:-9px] [right:-9px] [display:flex] [height:24px] [width:24px] [cursor:pointer] [align-items:center] [justify-content:center] [border-radius:9999px] [padding:0] [font-size:12px] [line-height:1] [font-weight:900] [color:#fff] [background:#151515] [border:2px_solid_#fff]"
                    >
                        ✕
                    </button>
                    <TrackedCTA
                        zone="floating"
                        action="whatsapp"
                        label="Floating - WhatsApp Bubble"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="[display:flex] [align-items:flex-start] [gap:11px] [text-decoration:none]"
                    >
                        <img
                            src="/assets/admin-avatar.jpg"
                            alt="Admin Full Bright"
                            className="[height:38px] [width:38px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366] max-[559px]:[height:28px] max-[559px]:[width:28px]"
                        />
                        <span className="[display:block]">
                            <span className="[margin-bottom:3px] [display:block] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#151515] max-[559px]:[margin-bottom:2px] max-[559px]:[font-size:10px]">
                                Ms. Fini - Admin Full Bright
                            </span>
                            <span className="[display:block] [font-size:13px] [line-height:1.5] [font-weight:600] [color:#3d3d3d]">
                                Masih bingung atau ragu? Tanya langsung ke saya
                                di WA ☕
                            </span>
                            <span className="[margin-top:8px] [display:inline-block] [font-size:12px] [font-weight:900] [color:#16a34a]">
                                Balas sekarang →
                            </span>
                        </span>
                    </TrackedCTA>
                </div>
            )}
            <TrackedCTA
                zone="floating"
                action="whatsapp"
                label="Floating - WhatsApp Button"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp"
                className="[position:relative] [display:flex] [height:58px] [width:58px] [align-items:center] [justify-content:center] [overflow:visible] [border-radius:9999px] [box-shadow:0_6px_22px_rgba(37,211,102,0.5)] [background:#25D366]"
            >
                <span className="[display:flex] [align-items:center] [justify-content:center]">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.833L0 24l6.302-1.499A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.887 0-3.656-.494-5.192-1.358l-.373-.213-3.741.89.934-3.629-.243-.384A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
                    </svg>
                </span>
            </TrackedCTA>
        </div>
    );
}
