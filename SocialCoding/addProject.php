<?php
$mysqli = new mysqli('localhost', 'root', '', 'socialcoding');
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

/* Prepared statement, stage 1: prepare */
if (!($stmt = $mysqli->prepare("INSERT INTO git_projects (repo_url) values (?)"))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
    return;
}

$url = $_POST["repoUrl"];
if (!$stmt->bind_param('s', $url)) {
    echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
    return;
}

if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    return;
}

echo 'Success!';
?>