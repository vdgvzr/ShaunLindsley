<?php

use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\helpers\UrlHelper;
use craft\helpers\ArrayHelper;
use craft\models\Section;

$pageInfos = [];

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

                    $singleSections = ArrayHelper::where(\Craft::$app->sections->getAllSections(), 
                    'type', Section::TYPE_SINGLE);

                    $pages = Entry::find()
                        ->sectionId(ArrayHelper::getColumn($singleSections, 'id'))
                        ->all();

                    foreach ($pages as $page) {
                        $pageInfos[] = [
                            'title' => $page->title,
                            'url' => $page->url,
                            'jsonUrl' => UrlHelper::url("{$page->slug}.json")
                        ];
                    }

                    return [
                        'pages' => $pageInfos,
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
                    'type' => 'page'
                ],
            ];
        },

        // About
        // =========================================================================
        '<about.json>'  => function() {
            return[
                'elementType' => 'craft\elements\Entry',
                'criteria' => ['slug' => 'about'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'text' => $entry->text->getParsedContent(),
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'page'
                ],
            ];
        },
    ]
];