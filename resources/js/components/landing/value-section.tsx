import { COMPARISON_ROWS, METHOD_PILLARS } from '@/data/landing';
import { useBannerHeight } from '@/layouts/landing-layout';
import { CtaPair, SectionBadge, TrustLine } from './shared';
import { cmpHeaderStyle, css, SECTION_TITLE } from './styles';

const MARK =
    '[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [border-radius:9999px] [font-size:13px] [font-weight:900] [flex-shrink:0]';
const MARK_YES = `${MARK} [background:#9ca3af] [color:#fff]`;
const MARK_NO = `${MARK} [background:#efefef] [color:#b4b4b4]`;
const MARK_FULLBRIGHT = `${MARK} [background:#D70808] [color:#fff]`;
const CELL = '[padding:16px_8px] [display:flex] [justify-content:center]';
const PILLAR_TONE = {
    red: {
        card: '[border-left:4px_solid_#D70808]',
        icon: '[background:#FFF0F0]',
    },
    dark: {
        card: '[border-left:4px_solid_#151515]',
        icon: '[background:#F3F3F3]',
    },
} as const;

export function ValueSection() {
    const bannerHeight = useBannerHeight();

    return (
        <>
            <div className="[margin-top:-1px] [line-height:0] [background:#F3F3F3]">
                <svg
                    viewBox="0 0 1440 56"
                    preserveAspectRatio="none"
                    className="[display:block] [height:56px] [width:100%]"
                >
                    <path
                        d="M0,28 C240,0 480,56 720,28 C960,0 1200,56 1440,28 L1440,0 L0,0 Z"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>

            <section
                id="value"
                className="[padding:80px_24px] [background:#fff]"
            >
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:56px] [text-align:center]">
                        <SectionBadge>
                            💡 Metode Eksklusif Full Bright
                        </SectionBadge>
                        <h2 className={`[margin:0_0_20px] ${SECTION_TITLE}`}>
                            Ini{' '}
                            <span className="[color:rgb(215,_8,_8)]">
                                Strategi Belajar TOEFL
                            </span>{' '}
                            Yang Tepat Untuk Kamu
                        </h2>
                        <p className="[margin:0] [margin:0_auto] [max-width:576px] [font-size:16px] [line-height:1.6] [color:#3d3d3d]">
                            Ini cara Full Bright membantu{' '}
                            <strong className="[color:rgb(21,_21,_21)]">
                                45.000+ orang
                            </strong>{' '}
                            mengubah submission yang tadinya ditolak jadi
                            diterima di kampus &amp; perusahaan impian mereka.
                        </p>
                    </div>

                    <div className="[margin:0_auto_56px] [max-width:760px] [border-radius:20px] [box-shadow:0_4px_24px_rgba(0,0,0,0.05)] [background:#fff] [border:1px_solid_#ececec]">
                        <div style={css(cmpHeaderStyle(bannerHeight))}>
                            <div className="[padding:16px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#6b7280] [text-transform:uppercase]">
                                Kriteria
                            </div>
                            <div className="[padding:16px_8px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.25] [font-weight:800] [color:#6b7280]">
                                Belajar Otodidak
                            </div>
                            <div className="[padding:16px_8px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.25] [font-weight:800] [color:#6b7280]">
                                Kursus Lain
                            </div>
                            <div className="[padding:16px_8px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [line-height:1.25] [font-weight:900] [color:#fff] [background:#D70808]">
                                Full Bright
                            </div>
                        </div>

                        {COMPARISON_ROWS.map((row) => (
                            <div
                                key={row.criteria}
                                className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [align-items:center] [border-bottom:1px_solid_#f4f4f4]"
                            >
                                <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                    {row.criteria}
                                </div>
                                <div className={CELL}>
                                    <Mark yes={row.selfTaught} />
                                </div>
                                <div className={CELL}>
                                    <Mark yes={row.otherCourse} />
                                </div>
                                <div
                                    className={`${CELL} [align-items:center] [align-self:stretch] [background:#FFF7F7]`}
                                >
                                    <span className={MARK_FULLBRIGHT}>✓</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="[margin:0_auto_18px] [max-width:560px]">
                        <div className="[overflow:hidden] [border-radius:16px] [line-height:0] [box-shadow:0_3px_16px_rgba(0,0,0,0.05)] [background:#fff] [border:1px_solid_#ececec]">
                            <img
                                src="/assets/pasted-1788585564773-0.png"
                                alt="Instruktur Full Bright menjelaskan pola soal TOEFL di kelas"
                                className="[display:block] [height:auto] [width:100%]"
                            />
                        </div>
                    </div>
                    <p className="[margin:0_auto_28px] [max-width:820px] [text-align:center] [font-size:19px] [line-height:1.6] [font-weight:800] [color:#151515]">
                        3 Metode Belajar yang Membuat Alumni Full Bright Naik
                        Skor dalam 15 Hari:
                    </p>

                    <div className="[margin-bottom:40px] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] [gap:16px]">
                        {METHOD_PILLARS.map((pillar) => (
                            <div
                                key={pillar.title}
                                className={`[display:flex] [flex-direction:column] [gap:16px] [border-radius:16px] [padding:28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6] ${PILLAR_TONE[pillar.tone].card}`}
                            >
                                <div
                                    className={`[display:flex] [height:48px] [width:48px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:16px] [font-size:22px] ${PILLAR_TONE[pillar.tone].icon}`}
                                >
                                    {pillar.icon}
                                </div>
                                <h3 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:16px] [line-height:1.3] [font-weight:900] [color:#151515]">
                                    {pillar.title}
                                </h3>
                                <p className="[margin:0] [font-size:14px] [line-height:1.7] [color:#3d3d3d]">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="[text-align:center]">
                        <CtaPair section="Value" />
                        <TrustLine />
                    </div>
                </div>
            </section>
        </>
    );
}

function Mark({ yes }: { yes: boolean }) {
    return yes ? (
        <span className={MARK_YES}>✓</span>
    ) : (
        <span className={MARK_NO}>✕</span>
    );
}
