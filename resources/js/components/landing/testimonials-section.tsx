import { useCallback, useEffect, useRef, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import {
    ALUMNI_TESTIMONIALS,
    GOOGLE_REVIEW_COUNT,
    googleReviewSrc,
    SCORE_REVIEWERS,
    STATS,
    WA_SCREENSHOTS,
} from '@/data/landing';
import { GoogleIcon } from './shared';
import {
    BTN_PRIMARY,
    css,
    reviewSideStyle,
    SECTION_BADGE,
    SECTION_TITLE,
} from './styles';

const MARQUEE_MASK_6 =
    '[overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]';

export function TestimonialsSection({
    onOpenReview,
}: {
    onOpenReview: (index: number) => void;
}) {
    return (
        <section id="testimonials">
            <div className="[padding:40px_24px] [background:#151515]">
                <div className="[margin:0_auto] [display:grid] [max-width:1152px] [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] [gap:32px] [text-align:center] [color:#fff]">
                    {STATS.map((stat) => (
                        <div key={stat.label}>
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(32px,4vw,48px)] [font-weight:900] [letter-spacing:-0.02em]">
                                {stat.value}
                            </p>
                            <p className="[margin:6px_0_0] [font-size:12px] [font-weight:500] [letter-spacing:0.02em] [opacity:0.75]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="[padding:80px_24px] [background:#fff]">
                <div className="[margin:0_auto] [max-width:1152px]">
                    <div className="[margin-bottom:48px] [text-align:center]">
                        <div className={SECTION_BADGE}>
                            💬 Testimoni Alumni Kami
                        </div>
                        <h2 className={`[margin:0_0_16px] ${SECTION_TITLE}`}>
                            Lihat Bagaimana Strategi Kami Membantu Alumni
                            <br />
                            <span className="[color:rgb(215,_8,_8)]">
                                Meraih Target Skor Untuk Beasiswa &amp; CPNS
                            </span>
                        </h2>
                        <p className="[margin:0] [font-size:14px] [color:#9ca3af]">
                            Klik foto untuk memperbesar
                        </p>
                    </div>

                    <ScoreScreenshotMarquee />
                    <AlumniStories />
                    <ScoreReviewerMarquee />
                    <GoogleReviewCarousel onOpen={onOpenReview} />
                    <AlumniVideo />

                    <div className="[margin-top:40px] [text-align:center]">
                        <p className="[margin:0_0_20px] [margin-right:auto] [margin-left:auto] [max-width:520px] [font-family:Nunito,sans-serif] [font-size:18px] [line-height:1.5] [font-weight:700] [color:#151515]">
                            Keberhasilan alumni selama ini bukan karena mereka
                            pintar, tapi karena mereka{' '}
                            <span className="[color:#D70808]">
                                gunakan metode yang tepat
                            </span>
                            .
                        </p>
                        <TrackedCTA
                            zone="midpage"
                            action="scroll"
                            label="Testimonials - Gabung Sekarang"
                            href="#pricing"
                            className={BTN_PRIMARY}
                        >
                            Gabung Sekarang →
                        </TrackedCTA>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ScoreScreenshotMarquee() {
    const shots = [...WA_SCREENSHOTS, ...WA_SCREENSHOTS];

    return (
        <div className={`[margin-bottom:56px] ${MARQUEE_MASK_6}`}>
            <div className="[display:flex] [width:max-content] [animation:infiniteScroll_35s_linear_infinite]">
                {shots.map((shot, i) => (
                    <div
                        key={i}
                        className="[margin:0_8px] [display:flex] [flex-shrink:0] [flex-direction:column] [align-items:center] [gap:8px]"
                    >
                        <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:16px] [font-weight:800] [color:#151515]">
                            Skor{' '}
                            <span className="[color:#D70808]">
                                {shot.score}
                            </span>
                        </p>
                        <div
                            className="[aspect-ratio:9/16] [width:130px] [overflow:hidden] [border-radius:12px] [background-size:cover] [background-position:center] [box-shadow:0_4px_16px_rgba(0,0,0,0.15)]"
                            style={{ backgroundImage: `url("${shot.src}")` }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AlumniStories() {
    return (
        <div className="[margin:0_auto_56px] [width:100%] [max-width:896px]">
            <p className="[margin:0_0_24px] [text-align:center] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                Testimoni Alumni yang Sukses Masuk Universitas Luar Negeri
            </p>
            <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [gap:16px]">
                {ALUMNI_TESTIMONIALS.map((story) => (
                    <div
                        key={story.name}
                        className="[display:flex] [min-width:0] [flex-direction:column] [gap:12px] [border-radius:16px] [padding:20px] [box-shadow:0_2px_16px_rgba(0,0,0,0.05)] [background:#F9F9F9] [border:1px_solid_#f3f4f6]"
                    >
                        <span className="[align-self:flex-start] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [color:#D70808] [background:#FFF0F0]">
                            {story.campus}
                        </span>
                        <p className="[margin:0] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [color:#D70808] [text-transform:uppercase]">
                            {story.headline}
                        </p>
                        <p className="[margin:0] [flex:1] [font-size:14px] [line-height:1.6] [color:#3d3d3d]">
                            {story.quote}
                        </p>
                        <div className="[display:flex] [align-items:center] [gap:12px] [padding-top:8px] [border-top:1px_solid_#f3f4f6]">
                            <div
                                role="img"
                                aria-label={story.name}
                                className="[height:40px] [width:40px] [flex-shrink:0] [border-radius:9999px] [background-size:cover] [background-position:center]"
                                style={{
                                    backgroundImage: `url("${story.photo}")`,
                                }}
                            ></div>
                            <div className="[min-width:0] [flex:1]">
                                <p className="[margin:0] [overflow:hidden] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                    {story.name}
                                </p>
                                <p className="[margin:0] [overflow:hidden] [font-size:12px] [text-overflow:ellipsis] [white-space:nowrap] [color:#6b7280]">
                                    {story.major}
                                </p>
                            </div>
                            <span className="[flex-shrink:0] [font-size:12px] [color:#F59E0B]">
                                ★★★★★
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ScoreReviewerMarquee() {
    // Four copies keep the strip wider than the viewport while it scrolls by -50%.
    const reviewers = Array.from({ length: 4 }, () => SCORE_REVIEWERS).flat();

    return (
        <div className="[margin-top:40px] [overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="[display:flex] [width:max-content] [animation:infiniteScroll_40s_linear_infinite]">
                {reviewers.map((reviewer, i) => (
                    <div
                        key={i}
                        className="[margin:0_12px] [display:flex] [width:220px] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [padding:16px_20px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)] [background:#fff] [border:1px_solid_#f3f4f6]"
                    >
                        <img
                            src={reviewer.avatar}
                            alt={reviewer.name}
                            className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
                        />
                        <div className="[min-width:0] [flex:1]">
                            <p className="[margin:0] [overflow:hidden] [font-size:12px] [font-weight:900] [text-overflow:ellipsis] [white-space:nowrap] [color:#151515]">
                                {reviewer.name}
                            </p>
                        </div>
                        <p className="[margin:0] [flex-shrink:0] [font-family:Nunito,sans-serif] [font-size:20px] [font-weight:900] [color:#16a34a]">
                            {reviewer.score}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const wrapReview = (i: number): number =>
    (i + GOOGLE_REVIEW_COUNT) % GOOGLE_REVIEW_COUNT;

const SLIDER_ARROW =
    '[position:absolute] [z-index:3] [display:flex] [height:36px] [width:36px] [align-items:center] [justify-content:center] [border-radius:9999px] [border:1px_solid_#e5e7eb] [background:#fff] [box-shadow:0_4px_12px_rgba(0,0,0,0.12)] [color:#151515] [font-size:16px] [cursor:pointer]';

/** Autoplaying Google review screenshots; clicking any card opens the review lightbox. */
function GoogleReviewCarousel({ onOpen }: { onOpen: (index: number) => void }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = window.setInterval(
            () => setCurrent((i) => wrapReview(i + 1)),
            3000,
        );

        return () => window.clearInterval(id);
    }, [current]);

    const prevIndex = wrapReview(current - 1);
    const nextIndex = wrapReview(current + 1);

    return (
        <div className="[margin-top:48px]">
            <div className="[margin-bottom:24px] [display:flex] [align-items:center] [justify-content:center] [gap:8px]">
                <GoogleIcon />
                <span className="[font-size:14px] [font-weight:800] [color:#151515]">
                    4.9
                </span>
                <span className="[font-size:16px] [color:#FBBF24]">★★★★★</span>
                <span className="[font-size:14px] [font-weight:400] [color:#6b7280]">
                    <b>3.620</b> Google Reviews
                </span>
            </div>
            <div className="[position:relative] [display:flex] [height:220px] [align-items:center] [justify-content:center] [overflow:hidden]">
                <button
                    onClick={() => setCurrent(prevIndex)}
                    aria-label="Sebelumnya"
                    className={`${SLIDER_ARROW} [left:0]`}
                >
                    ‹
                </button>
                <div
                    style={css(
                        reviewSideStyle(
                            googleReviewSrc(prevIndex),
                            'calc(50% - 260px)',
                        ),
                    )}
                    onClick={() => onOpen(prevIndex)}
                ></div>
                <img
                    src={googleReviewSrc(current)}
                    alt="Bukti skor TOEFL alumni Full Bright"
                    onClick={() => onOpen(current)}
                    className="[position:absolute] [left:50%] [z-index:2] [height:210px] [width:auto] [max-width:340px] [transform:translateX(-50%)] [cursor:pointer] [border-radius:16px] [object-fit:contain] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [transition:all_0.3s_ease]"
                />
                <div
                    style={css(
                        reviewSideStyle(
                            googleReviewSrc(nextIndex),
                            'calc(50% + 100px)',
                        ),
                    )}
                    onClick={() => onOpen(nextIndex)}
                ></div>
                <button
                    onClick={() => setCurrent(nextIndex)}
                    aria-label="Selanjutnya"
                    className={`${SLIDER_ARROW} [right:0]`}
                >
                    ›
                </button>
            </div>
        </div>
    );
}

function AlumniVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [showOverlay, setShowOverlay] = useState(true);
    const play = useCallback((): void => {
        if (videoRef.current?.paused) {
            void videoRef.current.play();
        }
    }, []);

    return (
        <div className="[margin-top:48px] [margin-right:auto] [margin-left:auto] [max-width:520px]">
            <p className="[margin:0_0_6px] [text-align:center] [font-size:11px] [font-weight:900] [letter-spacing:0.08em] [color:#9ca3af] [text-transform:uppercase]">
                Cerita Alumni
            </p>
            <h3 className="[margin:0_0_16px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:clamp(19px,2.4vw,24px)] [line-height:1.3] [font-weight:900] [color:#151515]">
                Dengar Langsung dari{' '}
                <span className="[color:#D70808]">Alumni Kami</span>
            </h3>
            <div
                className="[position:relative] [cursor:pointer] [overflow:hidden] [border-radius:18px] [line-height:0] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [background:#151515]"
                onClick={play}
            >
                <video
                    ref={videoRef}
                    src="/assets/testimoni iyha.mp4#t=1.5"
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setShowOverlay(false)}
                    className="[display:block] [aspect-ratio:9/16] [max-height:560px] [width:100%] [object-fit:cover] [background:#151515]"
                ></video>
                {showOverlay && (
                    <div className="[position:absolute] [inset:0] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:14px] [background:rgba(21,21,21,0.35)]">
                        <span className="[display:flex] [height:76px] [width:76px] [align-items:center] [justify-content:center] [border-radius:9999px] [box-shadow:0_8px_28px_rgba(215,8,8,0.5)] [background:#D70808]">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="#fff"
                            >
                                <path d="M8 5.5v13l11-6.5z"></path>
                            </svg>
                        </span>
                        <span className="[font-family:Nunito,sans-serif] [font-size:13px] [font-weight:800] [color:#fff] [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                            Putar video testimoni
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
