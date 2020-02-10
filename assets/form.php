<?php


if (isset($_POST['userMessage'])) {
        $retour = mail(
            'corentin.vallois@gmail.com', $_POST['object'],
            $_POST['userMessage'] . "\n\n" .
            'Phone number : ' . $_POST['telephone'] . "\n\n" .
            'Preference : ' . $_POST['com'] . "\n\n" .
            'Entreprise : ' . $_POST['Entreprise'] . "\n\n",
            'From: ' . $_POST['email']
        );
        if ($retour)
            header('Location: http://www.corentinvallois.fr/merci.html');
        else
            header('Location: http://www.corentinvallois.fr/contact.html');
}


?>