 <?php
//© Copyright 2015 www.thingsstockbrokerssay.com - All Rights Reserved 
//Property of Gale Technologies LLC www.galetechnologiesllc.com

$myFile = "testing.txt";
$fileContents = file($myFile);
$a = $fileContents;
$q = $_REQUEST["q"];

$hint = "";
$printOutput = $fileContents[$q];
$hint = $printOutput;

echo $hint;
?>