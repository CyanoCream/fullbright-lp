import { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import { WHATSAPP_NUMBER } from '@/data/landing';

export type CheckoutUrls = {
    selfStudy: string;
    starter: string;
    bundling: string;
    intermediate: string;
};

type LandingContextValue = {
    /** Builds a wa.me link to the main admin number with a prefilled message. */
    whatsappLink: (message: string) => string;
    checkoutUrls: CheckoutUrls;
    /** Remembers a checkout click so the return survey can open when the visitor comes back. */
    markCheckoutClicked: () => void;
};

const LandingContext = createContext<LandingContextValue | null>(null);

export function LandingProvider({
    whatsappNumber,
    checkoutUrls,
    markCheckoutClicked,
    children,
}: PropsWithChildren<{
    whatsappNumber?: string;
    checkoutUrls: CheckoutUrls;
    markCheckoutClicked: () => void;
}>) {
    const number = whatsappNumber || WHATSAPP_NUMBER;
    const whatsappLink = (message: string): string =>
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    return (
        <LandingContext.Provider
            value={{ whatsappLink, checkoutUrls, markCheckoutClicked }}
        >
            {children}
        </LandingContext.Provider>
    );
}

export function useLanding(): LandingContextValue {
    const value = useContext(LandingContext);

    if (!value) {
        throw new Error('useLanding must be used inside <LandingProvider>.');
    }

    return value;
}
