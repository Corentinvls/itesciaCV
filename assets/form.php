<?php


//$message = $_POST['msg'];

    if (isset($_POST['userMessage'])) {
            $position_arobase = strpos($_POST['email'], '@');
            if ($position_arobase === false)
                echo '<p>Votre email doit comporter un arobase.</p>';
            else {
                $retour = mail('corentin.vallois@gmail.com', $_POST['object'], $_POST['userMessage'], 'From: ' . $_POST['email']);
                if($retour)
                    echo 'alert(Votre message a été envoyé.)';
                else
                    echo '<p>Erreur.</p>';
            }
        }
?>