<?php
    $UserName = $_POST['name'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
    $Subject = $_POST['subject'];
    $Msg = $_POST['message'];


    if(!empty($UserName) || !empty($Email) || !empty($Subject) || !empty($Msg))
    {
        $to = 'contact@wildsobol.pl';
        $Headers = 'Wiadomość od: ' . $UserName . '.' . "\r\n" . 'Skontaktować się z nim można na podany adres: ' . $Email . "\r\n" . 'Jego numer telefonu to: ' . $Phone;
        mb_language("uni");
        mb_internal_encoding("UTF-8");
        mail($to, $Subject, $Msg, $Headers);
    }
    else
    {
        echo '403';
    }
?>