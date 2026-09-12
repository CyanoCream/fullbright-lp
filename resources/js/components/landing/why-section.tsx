import { WHY_ITEMS } from '@/data/landing';
import { CtaPair, SectionBadge } from './shared';
import { SECTION_TITLE } from './styles';

export function WhySection() {
    return (
        <section
            id="why-fullbright"
            className="[padding:80px_24px] [background:#F3F3F3]"
        >
            <div className="[margin:0_auto] [max-width:1152px]">
                <div className="[margin-bottom:48px] [text-align:center]">
                    <SectionBadge>🏅 Mengapa Full Bright?</SectionBadge>
                    <h2 className={`[margin:0] ${SECTION_TITLE}`}>
                        Mengapa <span className="[color:#D70808]">45.000+</span>{' '}
                        Orang Memilih Full Bright?
                    </h2>
                </div>
                <div className="[margin:0_auto_40px] [display:grid] [max-width:768px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [gap:16px]">
                    {WHY_ITEMS.map((item) => (
                        <div
                            key={item.title}
                            className="[display:flex] [align-items:flex-start] [gap:16px] [border-radius:16px] [padding:16px] [box-shadow:0_1px_8px_rgba(0,0,0,0.04)] [background:#fff]"
                        >
                            <div className="[margin-top:2px] [display:flex] [height:36px] [width:36px] [flex-shrink:0] [align-items:center] [justify-content:center] [border-radius:12px] [color:#fff] [background:#D70808]">
                                {item.icon}
                            </div>
                            <div className="[display:flex] [flex-direction:column] [gap:4px]">
                                <p className="[margin:0] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                                    {item.title}
                                </p>
                                <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="[margin:0_auto_36px] [max-width:440px] [overflow:hidden] [border-radius:18px] [box-shadow:0_3px_16px_rgba(0,0,0,0.05)] [background:#fff] [border:1px_solid_#ececec]">
                    <div className="[line-height:0]">
                        <img
                            src="/assets/Foto Bareng.png"
                            alt="Tim instruktur Full Bright Indonesia"
                            className="[display:block] [height:auto] [width:100%]"
                        />
                    </div>
                    <p className="[margin:0] [padding:14px_18px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:13px] [font-weight:800] [color:#151515]">
                        Tim instruktur Full Bright, pengalaman 10+ tahun
                        mengajar TOEFL ITP
                    </p>
                </div>

                <div className="[text-align:center]">
                    <CtaPair section="Why Full Bright" />
                </div>
            </div>
        </section>
    );
}
