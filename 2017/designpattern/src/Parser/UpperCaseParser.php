<?php
require_once dirname(__FILE__) . '/Parser.php';
require_once dirname(__FILE__) . '/ParserBase.php';

class UpperCaseParser extends ParserBase implements Parser
{

    public function printChar()
    {
        echo "**********************\n";
    }

    public function printTitle($title)
    {
        echo strtoupper(mb_substr($title, 0, 10)) . "\n";
    }

    public function printDescription($description)
    {
        echo strtoupper(mb_substr($description, 0, 30)) . "\n";
    }
}