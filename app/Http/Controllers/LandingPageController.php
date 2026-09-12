<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    public function __invoke(): Response
    {
        $mode = (string) config('analytics.mode');

        return Inertia::render("demo/{$mode}", [
            'whatsappUrl' => $this->whatsappUrl(),
            'externalCheckoutUrl' => config('analytics.external_checkout_url'),
            'checkoutUrls' => config('landing.checkout_urls'),
            'paymentMode' => config('analytics.payment_mode'),
            'productName' => config('analytics.product_name'),
            'productPrice' => config('analytics.product_price'),
        ]);
    }

    private function whatsappUrl(): string
    {
        $number = preg_replace('/\D+/', '', (string) config('analytics.whatsapp_number'));

        return $number
            ? 'https://wa.me/'.$number.'?text='.urlencode((string) config('analytics.whatsapp_default_message'))
            : '#pricing';
    }
}
