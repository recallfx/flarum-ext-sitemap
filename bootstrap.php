<?php

use Recallfx\Sitemap\Listeners;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\AddClientAssets::class);
    $events->subscribe(Listeners\GenerateSitemap::class);
};
