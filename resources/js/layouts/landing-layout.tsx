import { createContext, useContext } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { LandingFooter } from '@/components/landing/landing-footer';
import {
    Navbar,
    URGENCY_BANNER_ID,
    UrgencyBanner,
} from '@/components/landing/landing-header';
import { WhatsappFloat } from '@/components/landing/overlays';
import { LANDING_GLOBAL_CSS } from '@/components/landing/styles';
import {
    useElementHeight,
    useFlashSale,
    useScrolled,
    useWhatsappBubble,
} from '@/hooks/use-landing-page';

const BannerHeightContext = createContext(0);

/** Height of the urgency banner, for sticky elements that must sit below banner + navbar. */
export function useBannerHeight(): number {
    return useContext(BannerHeightContext);
}

/** Page chrome for the landing page: urgency banner, sticky navbar, footer and floating WhatsApp. */
export default function LandingLayout({
    children,
    overlays,
}: PropsWithChildren<{
    /** Modal-like overlays rendered after the footer (e.g. the return survey). */
    overlays?: ReactNode;
}>) {
    const flashSale = useFlashSale();
    const scrolled = useScrolled();
    const bannerHeight = useElementHeight(URGENCY_BANNER_ID, [
        flashSale.active,
    ]);
    const bubble = useWhatsappBubble();

    return (
        <BannerHeightContext.Provider value={bannerHeight}>
            <style>{LANDING_GLOBAL_CSS}</style>

            <div className="[min-height:100vh] [font-family:Nunito,system-ui,sans-serif] [background:#fff]">
                {flashSale.active && (
                    <UrgencyBanner countdown={flashSale.countdown} />
                )}
                <Navbar scrolled={scrolled} bannerHeight={bannerHeight} />

                {children}

                <LandingFooter />
                {overlays}
                <WhatsappFloat
                    bubbleOpen={bubble.open}
                    onDismissBubble={bubble.dismiss}
                />
            </div>
        </BannerHeightContext.Provider>
    );
}
