import { useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '@/data/landing';
import type { FaqItem } from '@/data/landing';
import { useLanding } from './landing-context';
import { SectionBadge } from './shared';
import {
    BTN_OUTLINE,
    BTN_PRIMARY,
    catBtnStyle,
    css,
    faqChevStyle,
    faqItemStyle,
    faqQStyle,
    SECTION_TITLE,
} from './styles';

export function FaqSection() {
    const { whatsappLink } = useLanding();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleCategory = (category: string): void =>
        setActiveCategory((current) =>
            current === category ? null : category,
        );

    return (
        <section
            id="faq"
            className="[padding:80px_24px_48px] [background:#F3F3F3]"
        >
            <div className="[margin:0_auto] [max-width:1152px]">
                <div className="[margin-bottom:56px] [text-align:center]">
                    <SectionBadge>❓ Masih Ragu?</SectionBadge>
                    <h2 className={`[margin:0] ${SECTION_TITLE}`}>
                        Apakah Kamu Benar-Benar{' '}
                        <span className="[color:#D70808]">
                            Butuh Ini Sekarang?
                        </span>
                    </h2>
                </div>

                <div className="[margin-bottom:32px] [display:flex] [flex-wrap:wrap] [justify-content:center] [gap:8px]">
                    <button
                        onClick={() => setActiveCategory(null)}
                        style={css(catBtnStyle(activeCategory === null))}
                    >
                        Semua
                    </button>
                    {FAQ_CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            style={css(
                                catBtnStyle(activeCategory === category),
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="[margin:0_auto_48px] [max-width:768px] [border-radius:24px] [padding:0_28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] [background:#fff]">
                    {FAQ_ITEMS.map((item, i) => (
                        <FaqEntry
                            key={item.question}
                            item={item}
                            visible={
                                activeCategory === null ||
                                activeCategory === item.category
                            }
                            open={openIndex === i}
                            onToggle={() =>
                                setOpenIndex(openIndex === i ? null : i)
                            }
                        />
                    ))}
                </div>

                <div className="[margin:0_auto] [max-width:512px] [text-align:center]">
                    <p className="[margin:0_0_24px] [font-size:14px] [font-weight:600] [color:#3d3d3d]">
                        Masih ada pertanyaan lain? Hubungi kami sekarang.
                    </p>
                    <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px]">
                        <TrackedCTA
                            zone="faq"
                            action="whatsapp"
                            label="FAQ - Chat Via WA"
                            href={whatsappLink(
                                'Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL. Saya mau tanya-tanya dulu.',
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={BTN_PRIMARY}
                        >
                            Chat Via WA →
                        </TrackedCTA>
                        <TrackedCTA
                            zone="faq"
                            action="scroll"
                            label="FAQ - Lihat Bukti Alumni"
                            href="#testimonials"
                            className={BTN_OUTLINE}
                        >
                            Lihat Bukti Alumni →
                        </TrackedCTA>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FaqEntry({
    item,
    visible,
    open,
    onToggle,
}: {
    item: FaqItem;
    visible: boolean;
    open: boolean;
    onToggle: () => void;
}) {
    return (
        <div style={css(faqItemStyle(visible))}>
            <button
                onClick={onToggle}
                className="[display:flex] [width:100%] [cursor:pointer] [align-items:flex-start] [justify-content:space-between] [gap:16px] [padding:20px_0] [text-align:left] [background:none] [border:none]"
            >
                <span style={css(faqQStyle(open))}>{item.question}</span>
                <span style={css(faqChevStyle(open))}>▾</span>
            </button>
            {open && (
                <div className="[padding:0_32px_24px_0]">
                    <p className="[margin:0] [font-size:14px] [line-height:1.6] [white-space:pre-line] [color:#3d3d3d]">
                        {item.answer}
                    </p>
                </div>
            )}
        </div>
    );
}
