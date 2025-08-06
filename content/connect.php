<?php


$mysql_host = 'sql302.epizy.com';

$mysql_user = 'epiz_22147199';

$mysql_pass = 'eY9Hbc70FwPX';

global $conn;

$conn = mysqli_connect($mysql_host,$mysql_user,$mysql_pass);

$mysql_db = 'epiz_22147199_cl';

if(!$conn || !mysqli_select_db($conn,$mysql_db))

{

die(mysqli_connect_error());	//Kill the page

}

mysqli_set_charset($conn,'utf-8');

?>