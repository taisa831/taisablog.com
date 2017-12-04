<?php

abstract class ParserBase
{
    protected $target_rss_urls = [];

    public function __construct($target_rss_urls)
    {
        $this->target_rss_urls = $target_rss_urls;
    }

    abstract function printChar();

    abstract function printTitle($title);

    abstract function printDescription($description);

    public function run()
    {
        foreach ($this->target_rss_urls as $rss_url) {
            $rss = Feed::loadRss($rss_url);

            foreach ($rss->item as $item) {
                $this->printChar();
                $this->printTitle($item->title);
                $this->printDescription($item->description);
                $this->printChar();
            }
        }
    }
}
