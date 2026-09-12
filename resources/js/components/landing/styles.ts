import type { CSSProperties } from 'react';

/** Turns a CSS declaration string into a React style object (used for values that change at runtime). */
export function css(decl: string): CSSProperties {
    const out: Record<string, string> = {};
    decl.split(';').forEach((part) => {
        const chunk = part.trim();

        if (!chunk) {
            return;
        }

        const at = chunk.indexOf(':');

        if (at < 0) {
            return;
        }

        const prop = chunk.slice(0, at).trim();
        const value = chunk.slice(at + 1).trim();
        const key = prop.startsWith('--')
            ? prop
            : prop.replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase());
        out[key] = value;
    });

    return out as CSSProperties;
}

export const LANDING_GLOBAL_CSS = `
  @keyframes infiniteScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes fbFadeInUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fbSheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
  @keyframes heroBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

  /* Base rules live in a layer so Tailwind utility classes (also layered)
     can override them, e.g. per-link colors must beat the global a rule. */
  @layer base {
    body { margin: 0; font-family: 'Nunito', system-ui, sans-serif; }
    h1, h2, h3, h4, h5, h6, p, span, div, li, a, button, input, select, textarea, ul, ol, strong, b, em, i, label { font-family: 'Nunito', system-ui, sans-serif; }
    a { color: #D70808; }
    a:hover { color: #b30606; }
    /* Keep anchor targets clear of the sticky urgency banner + navbar */
    section[id], div[id] { scroll-margin-top: 120px; }
  }
`;

/* ---------------------------------------------------------------- shared class names */

export const BTN_PRIMARY =
    '[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [text-decoration:none]';

export const BTN_OUTLINE =
    '[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]';

/** Hero buttons stretch full-width and scale down on small phones. */
export const BTN_MOBILE_FLUID =
    'max-[500px]:[font-size:clamp(12px,3.6vw,16px)] max-[500px]:[padding:clamp(10px,3vw,14px)_clamp(16px,5vw,28px)] max-[500px]:[width:100%] max-[500px]:[box-sizing:border-box]';

export const SECTION_BADGE =
    '[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#FFF0F0] [color:#D70808] [border:1px_solid_#ffb3b3]';

export const SECTION_TITLE =
    '[font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]';

export const CHECKOUT_BTN =
    '[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:900] [border-radius:16px] [padding:16px_20px] [font-size:16px] [color:#fff] [text-decoration:none] [box-sizing:border-box]';

export const WHATSAPP_OUTLINE_BTN =
    '[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:12px_20px] [font-size:14px] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none] [box-sizing:border-box]';

export const LIGHTBOX_OVERLAY =
    '[position:fixed] [inset:0] [z-index:50] [display:flex] [align-items:center] [justify-content:center] [background:rgba(0,0,0,0.92)]';

/* ---------------------------------------------------------------- runtime style builders */

export const navStyle = (scrolled: boolean, bannerH: number): string =>
    `position:sticky;top:${bannerH}px;z-index:50;transition:all 0.3s;border-bottom:1px solid #f3f4f6;` +
    (scrolled
        ? 'background:rgba(255,255,255,0.95);box-shadow:0 4px 12px rgba(0,0,0,0.08);backdrop-filter:blur(8px);'
        : 'background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.05);');

export const cmpHeaderStyle = (bannerH: number): string =>
    `position:sticky;top:${bannerH + 64}px;z-index:20;display:grid;grid-template-columns:1.5fr 0.85fr 0.85fr 0.9fr;background:#F9F9F9;border-bottom:1px solid #ececec;border-radius:20px 20px 0 0;align-items:stretch;overflow:hidden;`;

export const toggleBtnStyle = (active: boolean): string =>
    `position:relative;border:none;cursor:pointer;font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;padding:12px 26px;border-radius:9999px;transition:all 0.2s ease;background:${active ? '#D70808' : 'transparent'};color:${active ? '#fff' : '#6b7280'};box-shadow:${active ? '0 4px 14px rgba(215,8,8,0.28)' : 'none'};text-decoration:${active ? 'none' : 'underline dotted'};text-underline-offset:4px;text-decoration-thickness:2px;`;

export const catBtnStyle = (active: boolean): string =>
    `cursor:pointer;font-size:12px;font-weight:700;padding:8px 16px;border-radius:9999px;border:1.5px solid #D70808;background:${active ? '#D70808' : '#fff'};color:${active ? '#fff' : '#D70808'};`;

export const faqItemStyle = (visible: boolean): string =>
    `border-bottom:1px solid #f3f4f6;display:${visible ? 'block' : 'none'};`;

export const faqQStyle = (open: boolean): string =>
    `font-size:14px;font-weight:700;line-height:1.4;font-family:'Nunito',sans-serif;color:${open ? '#D70808' : '#151515'};`;

export const faqChevStyle = (open: boolean): string =>
    `flex-shrink:0;margin-top:2px;font-size:14px;color:${open ? '#D70808' : '#151515'};transform:${open ? 'rotate(180deg)' : 'rotate(0deg)'};display:inline-block;`;

export const surveyOptStyle = (selected: boolean): string =>
    `display:flex;align-items:center;gap:10px;width:100%;min-height:48px;text-align:left;padding:10px 12px;border-radius:9px;cursor:pointer;background:${selected ? 'rgba(215,8,8,0.05)' : '#fff'};border:1px solid ${selected ? 'rgba(215,8,8,0.3)' : '#e5e5e5'};transition:all 0.15s ease;font-family:inherit;`;

export const rpOptStyle = (): string =>
    'display:flex;align-items:center;gap:10px;width:100%;min-height:54px;text-align:left;padding:12px 14px;border-radius:12px;cursor:pointer;background:#fff;border:1px solid #e5e5e5;transition:all 0.15s ease;font-family:inherit;box-sizing:border-box;';

export const surveyMsgStyle = (answered: boolean): string =>
    `margin:8px 0 0;min-height:16px;font-size:12px;font-weight:600;color:#6b7280;opacity:${answered ? 1 : 0};transition:opacity 0.25s ease;`;

export const lightboxImageStyle = (
    src: string,
    height: string,
    width: string,
    maxWidth: string,
): string =>
    `height:${height};width:${width};max-width:${maxWidth};border-radius:16px;background-image:url('${src}');background-size:contain;background-repeat:no-repeat;background-position:center;box-shadow:0 24px 80px rgba(0,0,0,0.6);`;

export const reviewSideStyle = (src: string, left: string): string =>
    `position:absolute;transition:all 0.6s ease;cursor:pointer;overflow:hidden;border-radius:16px;background-image:url('${src}');background-size:cover;background-position:center;left:${left};width:160px;height:210px;opacity:0.5;z-index:1;box-shadow:0 8px 28px rgba(0,0,0,0.18);`;
