<?php

class ParserClient
{
    private $parser;

    public function __construct(Parser $parser)
    {
        $this->parser = $parser;
    }

    public function run()
    {
        $this->parser->run();
    }
}