<?php

use Inertia\Testing\AssertableInertia as Assert;

test('root renders the demo for the configured project mode', function () {
    config()->set('analytics.mode', 'ctwa');
    $this->get('/')->assertInertia(fn (Assert $page) => $page
        ->component('demo/ctwa')
        ->where('tracking.pageUrl', '/'));

    config()->set('analytics.mode', 'form');
    $this->get('/')->assertInertia(fn (Assert $page) => $page->component('demo/form')->where('paymentMode', 'internal'));
});

test('ctwa landing page receives the whatsapp link and package checkout urls', function () {
    config()->set('analytics.mode', 'ctwa');
    config()->set('analytics.whatsapp_number', '+62 852-5549-9299');
    config()->set('analytics.whatsapp_default_message', 'Halo Admin');
    config()->set('landing.checkout_urls.starter', 'https://checkout.test/starter');

    $this->get('/')->assertInertia(fn (Assert $page) => $page
        ->component('demo/ctwa')
        ->where('whatsappUrl', 'https://wa.me/6285255499299?text=Halo+Admin')
        ->where('checkoutUrls.starter', 'https://checkout.test/starter')
        ->has('checkoutUrls.selfStudy')
        ->has('checkoutUrls.bundling')
        ->has('checkoutUrls.intermediate'));
});
