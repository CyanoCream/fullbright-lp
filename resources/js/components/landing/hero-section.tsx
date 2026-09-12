import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { ALUMNI_CAMPUS_LOGOS } from '@/data/landing';
import { BTN_MOBILE_FLUID, BTN_OUTLINE, BTN_PRIMARY } from './styles';

const HERO_META = 'max-[500px]:[font-size:clamp(9px,2.6vw,12px)]';
const ALUMNI_AVATAR =
    '[height:20px] [width:20px] [border-radius:9999px] [border:2px_solid_#fff] [object-fit:cover] [margin-left:-8px] max-[500px]:[height:clamp(14px,4vw,20px)] max-[500px]:[width:clamp(14px,4vw,20px)]';
const TRUST_CHIP =
    '[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:6px_12px] [font-size:12px] [font-weight:600] [background:#F3F4F6] [color:#374151] [border:1px_solid_#e5e7eb]';
const HIGHLIGHT =
    '[background-image:linear-gradient(rgb(245,_183,_0),_rgb(245,_183,_0))] [background-repeat:no-repeat] [background-size:100%_12px] [background-position:0px_100%] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] [padding:0px_2px]';
const EMPHASIS = '[color:rgb(21,_21,_21)]';

export function HeroSection() {
    return (
        <section
            id="hero"
            className="[position:relative] [overflow:hidden] [background:linear-gradient(160deg,#fff_55%,#FFF5F5_100%)]"
        >
            <div className="[pointer-events:none] [position:absolute] [top:-96px] [right:-96px] [height:384px] [width:384px] [border-radius:9999px] [opacity:0.07] [filter:blur(120px)] [background:#D70808]"></div>
            <div className="[pointer-events:none] [position:absolute] [bottom:-96px] [left:-96px] [height:288px] [width:288px] [border-radius:9999px] [opacity:0.05] [filter:blur(100px)] [background:#151515]"></div>

            <div
                id="hero-section-inner"
                className="[position:relative] [margin:0_auto] [display:grid] [max-width:1152px] [grid-template-columns:1fr] [gap:40px] [padding:40px_24px_16px] max-[500px]:[gap:24px] max-[500px]:[padding-top:24px] max-[500px]:[padding-bottom:8px]"
            >
                <div className="[display:grid] [grid-template-columns:1.05fr_0.95fr] [align-items:center] [gap:40px] max-[899px]:[position:relative] max-[899px]:[grid-template-columns:1fr] max-[899px]:[gap:24px]">
                    <div className="[position:relative] [z-index:1] [grid-column:1] [display:flex] [flex-direction:column] [gap:16px]">
                        <div
                            id="hero-rating-badge"
                            className="[display:inline-flex] [width:fit-content] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.05em] [color:#374151] [border:1.5px_solid_#151515] max-[500px]:[padding:clamp(4px,1.2vw,6px)_clamp(10px,3vw,16px)] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]"
                        >
                            <span className="[display:flex] [gap:2px] [color:#F59E0B]">
                                ★★★★★
                            </span>
                            <span className="[letter-spacing:0.08em] [text-transform:uppercase]">
                                45.000+ ALUMNI
                            </span>
                            <div className="[margin-left:8px] [display:flex]">
                                {[1, 2, 3].map((n) => (
                                    <img
                                        key={n}
                                        src={`/assets/People%20${n}.webp`}
                                        alt="alumni"
                                        className={ALUMNI_AVATAR}
                                    />
                                ))}
                            </div>
                        </div>

                        <h1
                            id="hero-headline"
                            className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(30px,4vw,44px)] [line-height:1.15] [font-weight:900] [color:#151515] max-[500px]:[font-size:clamp(24px,7vw,30px)]"
                        >
                            Serius Soal Beasiswa &amp; CPNS?
                            <br />
                            Capai{' '}
                            <span className={HIGHLIGHT}>
                                TOEFL 500+ dalam 15 Hari Saja
                            </span>
                        </h1>

                        <p
                            id="hero-subheadline"
                            className="[margin:0] [font-size:16px] [line-height:1.6] [color:#3d3d3d] max-[500px]:[font-size:clamp(12px,3.4vw,14px)]"
                        >
                            <b>Persiapkan dari</b>
                            <strong className={EMPHASIS}>&nbsp;sekarang</strong>
                            &nbsp;dengan strategi{' '}
                            <strong className={EMPHASIS}>
                                belajar 1 jam sehari
                            </strong>{' '}
                            yang telah membantu{' '}
                            <strong className={EMPHASIS}>45.000+ alumni</strong>{' '}
                            meraih <b>beasiswa impian</b> mereka.
                        </p>

                        <div
                            id="hero-trust-badges"
                            className="[display:flex] [flex-wrap:wrap] [gap:8px] max-[500px]:[display:none]"
                        >
                            <span className={TRUST_CHIP}>
                                ✓ Lembaga Resmi ITP &amp; IIEF
                            </span>
                            <span className={TRUST_CHIP}>
                                ✓ 13+ Tahun Pengalaman
                            </span>
                        </div>

                        <div
                            id="hero-cta-row"
                            className="[display:flex] [flex-direction:column] [gap:12px]"
                        >
                            <div
                                id="hero-cta-buttons"
                                className="[display:flex] [flex-wrap:wrap] [gap:12px] max-[500px]:[flex-direction:column]"
                            >
                                <TrackedCTA
                                    zone="hero"
                                    action="scroll"
                                    label="Hero - Mulai Persiapan TOEFL"
                                    href="#pricing"
                                    className={`${BTN_PRIMARY} ${BTN_MOBILE_FLUID}`}
                                >
                                    Mulai Persiapan TOEFL →
                                </TrackedCTA>
                                <TrackedCTA
                                    zone="hero"
                                    action="scroll"
                                    label="Hero - Lihat Bukti Alumni"
                                    href="#testimonials"
                                    className={`${BTN_OUTLINE} ${BTN_MOBILE_FLUID}`}
                                >
                                    Lihat Bukti Alumni →
                                </TrackedCTA>
                            </div>

                            <div
                                id="hero-rating-line"
                                className="[display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:flex-start] [gap:8px_12px]"
                            >
                                <span
                                    className={`[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [color:#6b7280] ${HERO_META}`}
                                >
                                    ★★★★★{' '}
                                    <span
                                        className={`[margin-left:4px] ${HERO_META}`}
                                    >
                                        4.9/5 Google Review
                                    </span>
                                </span>
                                <span
                                    className={`[font-size:12px] [color:#6b7280] ${HERO_META}`}
                                >
                                    •
                                </span>
                                <span
                                    className={`[font-size:12px] [font-weight:600] [color:#6b7280] ${HERO_META}`}
                                >
                                    45.000+ Alumni Sukses
                                </span>
                                <span
                                    className={`[font-size:12px] [color:#6b7280] ${HERO_META}`}
                                >
                                    •
                                </span>
                                <span
                                    className={`[font-size:12px] [font-weight:600] [color:#6b7280] ${HERO_META}`}
                                >
                                    🛡 Garansi 100%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="[grid-column:2] [display:flex] [align-items:flex-end] [justify-content:center] max-[899px]:[grid-column:1] max-[899px]:[display:none]">
                        <div className="[position:relative] [display:flex] [width:100%] [max-width:560px] [align-items:flex-end] [justify-content:center] [align-self:stretch] max-[899px]:[width:230px] max-[899px]:[max-width:initial] max-[899px]:[align-items:flex-start] max-[899px]:[justify-content:flex-end] max-[899px]:[align-self:initial]">
                            <img
                                src="/assets/hero-consultant.png"
                                alt="Konsultan Full Bright Indonesia siap membantu persiapan TOEFL kamu"
                                className="[display:block] [height:auto] [max-height:min(72vh,660px)] [width:100%] [mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,rgba(0,0,0,0.5)_92%,transparent_100%)] [object-fit:contain] [object-position:bottom_center] [filter:drop-shadow(0_18px_40px_rgba(0,0,0,0.16))] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,rgba(0,0,0,0.5)_92%,transparent_100%)] max-[899px]:[max-height:initial] max-[899px]:[mask-image:linear-gradient(to_left,#000_40%,transparent_100%)] max-[899px]:[object-position:top_center] max-[899px]:[opacity:0.24] max-[899px]:[filter:initial] max-[899px]:[-webkit-mask-image:linear-gradient(to_left,#000_40%,transparent_100%)]"
                            />
                            <div className="hidden min-[900px]:contents">
                                <div className="[position:absolute] [bottom:18px] [left:0] [display:flex] [max-width:216px] [align-items:center] [gap:10px] [border-radius:16px] [padding:11px_14px] [box-shadow:0_8px_32px_rgba(0,0,0,0.14)] [background:#fff]">
                                    <span className="[font-size:22px]">🎓</span>
                                    <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:12px] [line-height:1.35] [font-weight:900] [color:#151515]">
                                        Alumni kami tersebar di seluruh dunia
                                    </p>
                                </div>
                                <div className="[position:absolute] [top:12px] [right:0] [display:flex] [align-items:center] [gap:6px] [border-radius:16px] [padding:8px_12px] [box-shadow:0_8px_32px_rgba(0,0,0,0.12)] [background:#fff]">
                                    <span className="[color:#F59E0B]">
                                        ★★★★★
                                    </span>
                                    <span className="[margin-left:4px] [font-size:12px] [font-weight:900] [color:#151515]">
                                        4.9
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="[position:relative] [display:flex] [justify-content:center] [padding-bottom:4px]">
                <div className="[display:flex] [height:52px] [width:52px] [animation:heroBounce_2s_ease-in-out_infinite] [align-items:center] [justify-content:center] [border-radius:9999px] [color:#374151] [background:#F3F4F6] [border:1px_solid_#e5e7eb]">
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 4v14M5 12l7 7 7-7"></path>
                    </svg>
                </div>
            </div>

            <div className="[margin-bottom:-1px] [line-height:0]">
                <svg
                    viewBox="0 0 1440 56"
                    preserveAspectRatio="none"
                    className="[display:block] [height:56px] [width:100%]"
                >
                    <path
                        d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
                        fill="#F3F3F3"
                    ></path>
                </svg>
            </div>
        </section>
    );
}

export function AlumniCampusStrip() {
    // Rendered twice so the -50% marquee animation loops seamlessly.
    const logos = [...ALUMNI_CAMPUS_LOGOS, ...ALUMNI_CAMPUS_LOGOS];

    return (
        <div className="[overflow:hidden] [padding:32px_0] [background:#F3F3F3]">
            <p className="[margin:0_0_18px] [text-align:center] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                Alumni Kami Sekarang Kuliah Di
            </p>
            <div className="[overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                <div className="[display:flex] [width:max-content] [animation:infiniteScroll_30s_linear_infinite]">
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            role="img"
                            aria-label={logo.name}
                            className="[margin:0_20px] [height:64px] [width:110px] [flex-shrink:0] [background-size:contain] [background-position:center] [background-repeat:no-repeat]"
                            style={{ backgroundImage: `url("${logo.src}")` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
