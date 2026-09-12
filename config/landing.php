<?php

return [
    // External checkout pages per package (CTWA mode). The bundle is purchased
    // from the Starter page by ticking the bundle option at checkout.
    'checkout_urls' => [
        'selfStudy' => env('CHECKOUT_URL_SELF_STUDY', 'https://member.fullbrightindonesia.com/paket-gold-e-course-toefl'),
        'starter' => env('CHECKOUT_URL_STARTER', 'https://member.fullbrightindonesia.com/paket-premium-toefl-level-starter-live-zoom-intensif-flash-sale'),
        'bundling' => env('CHECKOUT_URL_BUNDLING', 'https://member.fullbrightindonesia.com/paket-premium-toefl-level-starter-live-zoom-intensif-flash-sale'),
        'intermediate' => env('CHECKOUT_URL_INTERMEDIATE', 'https://member.fullbrightindonesia.com/paket-premium-toefl-level-intermediate-live-zoom-intensif-flash-sale'),
    ],
];
