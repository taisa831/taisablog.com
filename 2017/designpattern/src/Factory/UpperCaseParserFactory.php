<?php
require_once dirname(__FILE__) . '/AbstractParserFactory.php';
require_once dirname(__FILE__) . '/../Parser/UpperCaseParser.php';

class UpperCaseParserFactory extends AbstractParserFactory
{
    protected function createParser($target_rss_urls)
    {
        return new UpperCaseParser($target_rss_urls);
    }
}