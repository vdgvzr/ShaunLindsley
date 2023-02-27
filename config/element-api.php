<?php

use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\helpers\UrlHelper;


return [
    'endpoints' => [
        /** 
         * Globals
         */
        
        // Site settings
        // =========================================================================
        'site.json' => function() {
            return[
                'elementType' => 'craft\elements\GlobalSet',
                'criteria' => ['handle' => 'siteSettings'],
                'transformer' => function(GlobalSet $entry) {
                    $logo = $entry->logo->one();

                    return [
                        'logo' => $logo ? $logo->getUrl(['height' => 100]) : null,
                        'footerText' => $entry->footerText,
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'sitedata'
                ],
            ];
        },
        // Contact info
        // =========================================================================
        'contact.json' => function() {
            return[
                'elementType' => 'craft\elements\GlobalSet',
                'criteria' => ['handle' => 'contactInfo'],
                'transformer' => function(GlobalSet $entry) {
                    return [
                        'emailAddress' => $entry->emailAddress,
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'contactdata'
                ],
            ];
        },
        /** 
         * Singles
         */
        
        // Home
        // =========================================================================
        '<_:home\.json|\.json>'  => function() {
            return[
                'elementType' => 'craft\elements\Entry',
                'criteria' => ['slug' => 'home'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'homepageHeader' => $entry->homepageHeader,
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'single'
                ],
            ];
        },
    ]
];