import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { AgitationSection } from '@/components/landing/agitation-section';
import { FaqSection } from '@/components/landing/faq-section';
import {
    AlumniCampusStrip,
    HeroSection,
} from '@/components/landing/hero-section';
import { LandingProvider } from '@/components/landing/landing-context';
import type { CheckoutUrls } from '@/components/landing/landing-context';
import { LmsSection } from '@/components/landing/lms-section';
import { Lightbox, ReturnPopup } from '@/components/landing/overlays';
import { PricingSection } from '@/components/landing/pricing-section';
import { ProofSection } from '@/components/landing/proof-section';
import { lightboxImageStyle } from '@/components/landing/styles';
import { SurveySection } from '@/components/landing/survey-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { ValueSection } from '@/components/landing/value-section';
import { WhySection } from '@/components/landing/why-section';
import {
    GOOGLE_REVIEW_COUNT,
    googleReviewSrc,
    WA_SCREENSHOTS,
} from '@/data/landing';
import type { PricingMode } from '@/data/landing';
import {
    useLightbox,
    useOverlayKeys,
    useReturnPopup,
} from '@/hooks/use-landing-page';
import LandingLayout from '@/layouts/landing-layout';

type LandingPageProps = {
    /** Built by LandingPageController from WHATSAPP_NUMBER. */
    whatsappUrl?: string;
    /** External checkout links per package, from config/landing.php. */
    checkoutUrls: CheckoutUrls;
};

/** Pricing tab from ?mode=tutor so ads can deep-link to the tutor packages. */
function initialPricingMode(): PricingMode {
    try {
        return new URLSearchParams(window.location.search).get('mode') ===
            'tutor'
            ? 'tutor'
            : 'self';
    } catch {
        return 'self';
    }
}

export default function LandingPage({
    whatsappUrl,
    checkoutUrls,
}: LandingPageProps) {
    const [pricingMode, setPricingMode] =
        useState<PricingMode>(initialPricingMode);
    const photos = useLightbox(WA_SCREENSHOTS.length);
    const reviews = useLightbox(GOOGLE_REVIEW_COUNT);
    const returnPopup = useReturnPopup();

    useOverlayKeys([
        {
            active: photos.index !== null,
            close: photos.close,
            prev: photos.prev,
            next: photos.next,
        },
        {
            active: reviews.index !== null,
            close: reviews.close,
            prev: reviews.prev,
            next: reviews.next,
        },
        { active: returnPopup.open, close: returnPopup.close },
    ]);

    return (
        <LandingProvider
            whatsappNumber={whatsappUrl?.match(/wa\.me\/(\d+)/)?.[1]}
            checkoutUrls={checkoutUrls}
            markCheckoutClicked={returnPopup.markCheckoutClicked}
        >
            <Head title="Kelas TOEFL Skor 500+ untuk Submission Beasiswa dan Kerja">
                <meta
                    name="description"
                    content="Persiapkan TOEFL 500+ dalam 15 hari dengan metode belajar terstruktur dari Full Bright Indonesia. Sudah membantu 45.000+ alumni meraih beasiswa & CPNS. Mulai dari Rp99rb."
                />
            </Head>

            <LandingLayout
                overlays={
                    returnPopup.open && (
                        <ReturnPopup onClose={returnPopup.close} />
                    )
                }
            >
                <HeroSection />
                <AlumniCampusStrip />
                <AgitationSection />
                <ValueSection />
                <ProofSection onOpenPhoto={photos.open} />
                <LmsSection />
                <WhySection />
                <TestimonialsSection onOpenReview={reviews.open} />

                {photos.index !== null && (
                    <Lightbox
                        label="Score"
                        imageStyle={lightboxImageStyle(
                            WA_SCREENSHOTS[photos.index].src,
                            '80vh',
                            '340px',
                            '80vw',
                        )}
                        caption={`Skor ${WA_SCREENSHOTS[photos.index].score}`}
                        position={`${photos.index + 1} / ${WA_SCREENSHOTS.length}`}
                        onClose={photos.close}
                        onPrev={photos.prev}
                        onNext={photos.next}
                    />
                )}
                {reviews.index !== null && (
                    <Lightbox
                        label="Review"
                        imageStyle={lightboxImageStyle(
                            googleReviewSrc(reviews.index),
                            '85vh',
                            '400px',
                            '90vw',
                        )}
                        position={`${reviews.index + 1} / ${GOOGLE_REVIEW_COUNT}`}
                        onClose={reviews.close}
                        onPrev={reviews.prev}
                        onNext={reviews.next}
                    />
                )}

                <PricingSection
                    mode={pricingMode}
                    onModeChange={setPricingMode}
                />
                <FaqSection />
                <SurveySection />
            </LandingLayout>
        </LandingProvider>
    );
}
