import { LMS_FEATURES } from '@/data/landing';
import type { LmsFeature } from '@/data/landing';
import { CtaPair, SectionBadge, TrustLine } from './shared';
import { SECTION_TITLE } from './styles';

export function LmsSection() {
    return (
        <section id="lms" className="[padding:80px_24px] [background:#fff]">
            <div className="[margin:0_auto] [max-width:1152px]">
                <div className="[margin-bottom:48px] [text-align:center]">
                    <SectionBadge>💻 Tampilan LMS</SectionBadge>
                    <h2 className={`[margin:0_0_16px] ${SECTION_TITLE}`}>
                        Intip Langsung{' '}
                        <span className="[color:#D70808]">
                            Platform Belajarnya
                        </span>
                    </h2>
                    <p className="[margin:0] [margin-right:auto] [margin-left:auto] [max-width:560px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                        Semua yang kamu butuhkan untuk mengetahui kelemahan,
                        belajar, berlatih, dan menghadapi ujian.
                    </p>
                </div>

                <VideoTourPlaceholder />

                <div className="[margin:0_auto_40px] [display:flex] [max-width:1040px] [flex-direction:column] [gap:20px]">
                    {LMS_FEATURES.map((feature, i) => (
                        <LmsFeatureCard
                            key={feature.no}
                            feature={feature}
                            imageRight={i % 2 === 1}
                        />
                    ))}
                </div>

                <div className="[margin:0_auto_44px] [max-width:560px] [border-radius:22px] [padding:26px_24px] [text-align:center] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1.5px_solid_#ffd6d6]">
                    <p className="[margin:0_0_8px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                        Total nilai semua fitur di atas
                    </p>
                    <p className="[margin:0_0_12px] [font-family:Nunito,sans-serif] [font-size:clamp(30px,5vw,40px)] [line-height:1] [font-weight:900] [color:#9ca3af] [text-decoration-color:#D70808] [text-decoration-thickness:3px] [text-decoration:line-through]">
                        Rp 1.005.000
                    </p>
                    <p className="[margin:0_0_6px] [font-size:12px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                        MULAI DARI HANYA
                    </p>
                    <p className="[margin:0_0_8px] [font-family:Nunito,sans-serif] [font-size:clamp(32px,5.4vw,44px)] [line-height:1] [font-weight:900] [color:#D70808]">
                        Rp 99.000
                    </p>
                </div>

                <div className="[text-align:center]">
                    <p className="[margin:0_0_20px] [margin-right:auto] [margin-left:auto] [max-width:520px] [font-family:Nunito,sans-serif] [font-size:18px] [line-height:1.5] [font-weight:700] [color:#151515]">
                        Semua fitur ini bisa kamu akses{' '}
                        <span className="[color:#D70808]">
                            begitu kamu bergabung
                        </span>
                        .
                    </p>
                    <CtaPair section="LMS" />
                    <TrustLine />
                </div>
            </div>
        </section>
    );
}

function VideoTourPlaceholder() {
    return (
        <div className="[margin:0_auto_44px] [max-width:840px]">
            <div className="[position:relative] [aspect-ratio:16/9] [overflow:hidden] [border-radius:20px] [box-shadow:0_8px_32px_rgba(0,0,0,0.12)] [background:#151515] [border:1px_solid_#e5e5e5]">
                <div className="[position:absolute] [inset:0] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:14px] [background:repeating-linear-gradient(135deg,#1c1c1c_0,#1c1c1c_14px,#191919_14px,#191919_28px)]">
                    <span className="[display:flex] [height:66px] [width:66px] [align-items:center] [justify-content:center] [border-radius:9999px] [box-shadow:0_8px_26px_rgba(215,8,8,0.45)] [background:#D70808]">
                        <span className="[margin-left:5px] [display:block] [height:0] [width:0] [border-width:13px_0_13px_21px] [border-style:solid] [border-color:transparent_transparent_transparent_#fff]"></span>
                    </span>
                    <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:800] [color:#fff]">
                        Video Tour LMS
                    </p>
                </div>
                <div className="[pointer-events:none] [position:absolute] [top:14px] [left:14px] [display:flex] [align-items:center] [gap:7px] [border-radius:9999px] [padding:7px_13px] [background:rgba(0,0,0,0.55)]">
                    <span className="[display:block] [height:7px] [width:7px] [border-radius:9999px] [background:#D70808]"></span>
                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#fff] [text-transform:uppercase]">
                        Showcase
                    </span>
                </div>
            </div>
        </div>
    );
}

/** Screenshot + copy card; every second card flips the screenshot to the right on desktop. */
function LmsFeatureCard({
    feature,
    imageRight,
}: {
    feature: LmsFeature;
    imageRight: boolean;
}) {
    return (
        <div
            className={`[display:grid] [align-items:stretch] [overflow:hidden] [border-radius:22px] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#ececec] max-[899px]:[grid-template-columns:1fr] ${imageRight ? '[grid-template-columns:1fr_1.35fr]' : '[grid-template-columns:1.35fr_1fr]'}`}
        >
            <div
                className={`[display:flex] [flex-direction:column] [justify-content:center] [padding:22px] [background:#FAFAFA] ${imageRight ? '[order:2] max-[899px]:[order:initial]' : ''}`}
            >
                <div className="[overflow:hidden] [border-radius:12px] [line-height:0] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [background:#fff] [border:1px_solid_#e5e7eb]">
                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="[display:block] [height:auto] [width:100%]"
                    />
                </div>
            </div>
            <div
                className={`[display:flex] [flex-direction:column] [justify-content:center] [gap:11px] [padding:24px_26px] ${imageRight ? '[order:1] max-[899px]:[order:initial]' : ''}`}
            >
                <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [gap:10px]">
                    <span className="[display:flex] [height:28px] [width:28px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:9px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#fff] [background:#D70808]">
                        {feature.no}
                    </span>
                    <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                        {feature.label}
                    </span>
                    <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [border-radius:9999px] [padding:6px_13px] [font-family:Nunito,sans-serif] [font-size:15px] [font-weight:900] [white-space:nowrap] [color:#D70808] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
                        <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [color:#c96b6b] [text-transform:uppercase]">
                            Senilai
                        </span>
                        {feature.worth}
                    </span>
                    {feature.tutorOnly && (
                        <span className="[border-radius:9999px] [padding:4px_9px] [font-size:10px] [font-weight:800] [color:#D70808] [background:#FFF0F0] [border:1px_solid_#ffb3b3]">
                            Khusus Dibimbing Tutor
                        </span>
                    )}
                </div>
                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                    {feature.title}
                </h3>
                <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
                    {feature.description}
                </p>
                <div className="[margin-top:2px] [display:flex] [flex-wrap:wrap] [gap:7px]">
                    {feature.points.map((point) => (
                        <span
                            key={point}
                            className="[display:inline-flex] [flex-shrink:0] [align-items:center] [gap:6px] [border-radius:9999px] [padding:6px_12px] [font-size:13px] [font-weight:700] [white-space:nowrap] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec]"
                        >
                            <span className="[font-weight:900] [color:#D70808]">
                                ✓
                            </span>
                            {point}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
