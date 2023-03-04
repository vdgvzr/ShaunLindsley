<?php

use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\helpers\UrlHelper;
use craft\helpers\ArrayHelper;
use craft\models\Section;

function transformResumeContent(Entry $entry){
    $bodyBlocks = [];
    $blocks = $entry->resumeContent->all();
    foreach ($blocks as $block) {
        switch ($block->type->handle) {
            case 'skills':
                $skills = [];
                foreach ($block->skill as $row){
                    $skills[] = [
                        'skillName' => $row->skillName,
                        'skillProficiency' => $row->skillProficiency,
                    ];
                }
                $bodyBlocks[] = [
                    "skills" => [
                        'heading' => $block->heading,
                        'skills' => $skills,
                    ]
                ];
                break;
            case 'resume':
                $resume = $block->resumeFileCta->one();
                $bodyBlocks[] = [
                    'resume' => $resume ? $resume->getUrl() : null,
                ];
                break;
        }
    }
    return $bodyBlocks;
}

function transformAboutContent(Entry $entry){
    $bodyBlocks = [];
    $blocks = $entry->aboutContent->all();
    foreach ($blocks as $block) {
        switch ($block->type->handle) {
            case 'aboutMe':
                $image = $block->image->one();
                $bodyBlocks[] = [
                    'heading' => $block->heading,
                    'copy' => $block->copy,
                    'image' => $image ? $image->getUrl() : null,
                ];
                break;
            case 'hobbiesAndInterests':
                $bodyBlocks[] = [
                    'heading' => $block->heading,
                    'copy' => $block->copy,
                ];
                break;
        }
    }
    return $bodyBlocks;
}

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
                        'homepageStrapline' => $entry->homepageStrapline,
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
                        'content' => transformAboutContent($entry),
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
                    return [
                        'title' => $entry->title,
                        'content' => transformResumeContent($entry),
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