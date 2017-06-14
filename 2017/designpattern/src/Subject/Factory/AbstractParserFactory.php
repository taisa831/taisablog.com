<?php

abstract class AbstractParserFactory
{
    public function create($target_rss_urls)
    {
        return $this->createParser($target_rss_urls);
    }

    abstract protected function createParser($target_rss_urls);
}