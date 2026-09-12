import { useState } from 'react';
import { SURVEY_OPTIONS } from '@/data/landing';
import { css, surveyMsgStyle, surveyOptStyle } from './styles';

export function SurveySection() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section id="survey" className="[padding:28px_24px] [background:#fff]">
            <div className="[margin:0_auto] [max-width:460px] [border-radius:16px] [padding:20px_20px_16px] [background:#FAFAFA] [border:1px_solid_#ececec]">
                <div className="[margin-bottom:16px]">
                    <p className="[margin:0_0_6px] [font-size:11px] [font-weight:700] [letter-spacing:0.06em] [color:#6b6b6b] [text-transform:uppercase]">
                        BOLEH TAHU KESULITANMU?
                    </p>
                    <h2 className="[margin:0] [font-family:Nunito,sans-serif] [font-size:clamp(20px,3.6vw,23px)] [line-height:1.25] [font-weight:800] [color:#151515]">
                        Apa Tantangan Terbesarmu{' '}
                        <span className="[color:#D70808]">
                            Soal TOEFL Sekarang?
                        </span>
                    </h2>
                </div>

                <div className="[display:flex] [flex-direction:column] [gap:6px]">
                    {SURVEY_OPTIONS.map((option, i) => (
                        <button
                            key={option}
                            onClick={() => setSelected(i)}
                            style={css(surveyOptStyle(selected === i))}
                        >
                            <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">
                                {option}
                            </span>
                            {selected === i && (
                                <span className="flex [height:16px] [width:16px] shrink-0 items-center justify-center [border-radius:9999px] [font-size:9px] [font-weight:800] [color:#fff] [background:#D70808]">
                                    ✓
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <p style={css(surveyMsgStyle(selected !== null))}>
                    ✓ Makasih! Jawabanmu sudah tercatat.
                </p>
            </div>
        </section>
    );
}
