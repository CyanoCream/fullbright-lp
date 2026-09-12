import { WA_SCREENSHOTS } from '@/data/landing';
import { CtaPair, SectionBadge, TrustLine } from './shared';

/** Number of WhatsApp score screenshots featured in this section (the rest live in the testimonials marquee). */
const FEATURED = 3;

export function ProofSection({
    onOpenPhoto,
}: {
    onOpenPhoto: (index: number) => void;
}) {
    return (
        <section id="proof" className="[padding:72px_24px] [background:#fff]">
            <div className="[margin:0_auto] [max-width:672px]">
                <div className="[margin-bottom:36px] [text-align:center]">
                    <SectionBadge>📱 Bukti Nyata dari Alumni</SectionBadge>
                    <h2 className="[margin:0_0_14px] [font-family:Nunito,sans-serif] [font-size:clamp(24px,3vw,36px)] [line-height:1.25] [font-weight:900] [color:#151515]">
                        Metode Kami Berhasil Membuat
                        <br />
                        <span className="[font-size:26.46px] [color:#d70808]">
                            Ribuan Alumni Kami Capai TOEFL 500+&nbsp;
                        </span>
                    </h2>

                    <p className="[margin:0] [font-size:14px] [color:#9ca3af]">
                        Klik foto untuk memperbesar
                    </p>
                </div>

                <div className="[margin:0_auto_32px] [display:flex] [max-width:420px] [flex-direction:column]">
                    {WA_SCREENSHOTS.slice(0, FEATURED).map((shot, i) => (
                        <div
                            key={shot.src}
                            className="[display:flex] [cursor:pointer] [flex-direction:column] [align-items:center] [gap:10px] [padding:20px_0] [border-bottom:1px_solid_#e5e7eb]"
                            onClick={() => onOpenPhoto(i)}
                        >
                            <p className="[margin:0] [font-family:Nunito,sans-serif] [font-size:18px] [font-weight:800] [color:#151515]">
                                Skor{' '}
                                <span className="[color:#D70808]">
                                    {shot.score}
                                </span>
                            </p>
                            <div
                                className="[aspect-ratio:1/1] [width:100%] [overflow:hidden] [border-radius:14px] [background-size:cover] [background-position:center] [box-shadow:0_6px_24px_rgba(0,0,0,0.18)]"
                                style={{
                                    backgroundImage: `url("${shot.src}")`,
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

                <div className="[text-align:center]">
                    <CtaPair
                        section="Proof"
                        proofLabel="Lihat Lebih Banyak Bukti"
                    />
                    <TrustLine />
                </div>
            </div>
        </section>
    );
}
