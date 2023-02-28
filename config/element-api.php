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

                    $structureSections = ArrayHelper::where(\Craft::$app->sections->getAllSections(), 
                    'type', Section::TYPE_STRUCTURE);

                    $singles = Entry::find()
                        ->sectionId(ArrayHelper::getColumn($singleSections, 'id'))
                        ->all();
                    
                    $structures = Entry::find()
                        ->sectionId(ArrayHelper::getColumn($structureSections, 'id'))
                        ->all();

                    foreach ($singles as $page) {
                        $pageInfos[] = [
                            'title' => $page->title,
                            'url' => $page->url,
                            'slug' => $page->slug,
                            'jsonUrl' => UrlHelper::url("{$page->slug}.json")
                        ];
                    }

                    foreach ($structures as $page) {
                        $pageInfos[] = [
                            'title' => $page->title,
                            'url' => $page->url,
                            'slug' => $page->slug,
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
        'contactInfo.json' => function() {
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

         /** 
         * Structure - Top Level Pages
         */
        
        // About
        // =========================================================================
        'about.json'  => function() {
            return[
                'elementType' => 'craft\elements\Entry',
                'criteria' => ['slug' => 'about'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'text' => $entry->text->getRawContent(),
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'page'
                ],
            ];
        },
    
        // Resume
        // =========================================================================
        'resume.json'  => function() {
            return[
                'elementType' => 'craft\elements\Entry',
                'criteria' => ['slug' => 'resume'],
                'transformer' => function(Entry $entry) {
                    $resume = $entry->resume->one();
    
                    return [
                        'title' => $entry->title,
                        'text' => $entry->text->getRawContent(),
                        'resume' => $resume ? $resume->getUrl() : null,
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'page'
                ],
            ];
        },

        // Contact
        // =========================================================================
        'contact.json'  => function() {
            return[
                'elementType' => 'craft\elements\Entry',
                'criteria' => ['slug' => 'contact'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'text' => $entry->text->getRawContent(),
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