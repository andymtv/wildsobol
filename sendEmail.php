<?php
// несколько получателей
$to  = 'andriimatviienko@outlook.com';

// тема письма
$subject = 'Skontaktuj się ze mną!';

// текст письма
$message = 'Użytkownik' . $_POST['name'] . ' napisał do ciebie:<br />' . $_POST['message'] . '<br />
Skontaktować się z nim można na podany e-mail: <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Andrzej <andriimatviienko@outlook.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>