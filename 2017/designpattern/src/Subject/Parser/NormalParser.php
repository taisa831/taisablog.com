<?php
require_once dirname(__FILE__) . '/Parser.php';
require_once dirname(__FILE__) . '/ParserBase.php';

class NormalParser extends ParserBase implements Parser
{

    public function printChar()
    {
        echo "----------------------\n";
    }

    public function printTitle($title)
    {
        echo mb_substr($title, 0, 10) . "\n";
    }

    public function printDescription($description)
    {
        echo mb_substr($description, 0, 30) . "\n";
    }

}