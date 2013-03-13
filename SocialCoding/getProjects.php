<?php
// Connecting, selecting database
$link = mysql_connect('localhost', 'root', '') or die('Could not connect: ' . mysql_error());
mysql_select_db('socialcoding') or die('Could not select database');

// Performing SQL query
$query = 'SELECT * FROM git_projects';
$result = mysql_query($query) or die('Query failed: ' . mysql_error());

// Printing results in HTML
echo "[";
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    foreach ($line as $col_value) {
        echo "'$col_value',";
    }
}
echo "]";*/

// Free resultset
mysql_free_result($result);

// Closing connection
mysql_close($link);
?>