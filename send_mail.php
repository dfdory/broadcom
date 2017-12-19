<?php
$nom=addslashes($_POST["nom"]);
$email=addslashes($_POST["email"]);
$message=$_POST['message'];
$mail='Jessica.Mbella@broadcom.cm';
$objet='Renseignement';
                //------------------Debut  mail---------------
if (!preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $mail)) 
{
    $passage_ligne = "\r\n";
}
else
{
    $passage_ligne = "\n";
}
//=====Declaration des messages au format texte et au format HTML
$message_txt  = "\n $message \n";
$message_html = "<p style='text-align: justify;'>
					<p></p>
					<p>$message</p>";
//==========
        
//=====Creation de la boundary
$boundary = "-----=".md5(rand());
//==========
 
//=====Definition du sujet
$sujet = "$objet";
//=========
 
//=====Creation du header de l'e-mail
$header = "From: $nom".$passage_ligne;
$header.= "Reply-to: $email".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//==========
 
//=====Creation du message
$message = $passage_ligne.$boundary.$passage_ligne;
//=====Ajout du message au format texte
$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_txt.$passage_ligne;
//==========
$message.= $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format HTML
$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_html.$passage_ligne;
//==========
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
//==========

//=====Envoi de l'e-mail
mail($mail,$sujet,$message,$header);
//-------------------Fin  mail------------------------------------------
header("Location:contact.html");
?>