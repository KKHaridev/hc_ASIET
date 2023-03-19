<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["college"];
    $to = "hackclub@adishankara.ac.in";
    $subject = "New form submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    mail($to, $subject, $body, $headers);
}
?>