<?php

$name = $_POST["name"];
$message = $_POST["message"];
$phoneNumber = $_POST["phoneNumber"];
$options = $_POST["options"];

var_dump($name, $message, $phoneNumber, $options);

$host = "localhost";
$dbname = "message_db";
$username = "root";
$password = "";

mysqli_connect(hostname: $host, 
               username: $username,
               password: $password,
               database: $dbname);

