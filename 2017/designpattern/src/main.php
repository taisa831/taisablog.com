<?php
require_once dirname(__FILE__) . '/Parser/NormalParser.php';
require_once dirname(__FILE__) . '/Parser/UpperCaseParser.php';
require_once dirname(__FILE__) . '/Parser/ParserClient.php';
require_once dirname(__FILE__) . '/vendor/autoload.php';
require_once dirname(__FILE__) . '/Factory/NormalParserFactory.php';
require_once dirname(__FILE__) . '/Factory/UpperCaseParserFactory.php';

$target_rss_urls = ['http://tech.aainc.co.jp/feed', 'http://tech.aainc.co.jp/feed'];

$normal_parser_factory = new NormalParserFactory();
$parser_client = new ParserClient($normal_parser_factory->create($target_rss_urls));
$parser_client->run();

$upper_case_parser_factory = new UpperCaseParserFactory();
$parser_client = new ParserClient($upper_case_parser_factory->create($target_rss_urls));
$parser_client->run();
