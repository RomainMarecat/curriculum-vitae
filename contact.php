<?php

// hide all basic notices from PHP
error_reporting(E_ALL ^ E_NOTICE); 

if( isset($_POST['msg-submitted']) ) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	// server validation
	if( trim($name) === '' ) {
		$nameError = 'Merci de vérifier votre nom.';
		$hasError = true;
	}

	if( trim($email) === '' ) {
		$emailError = 'Merci de vérifier votre adresse email.';
		$hasError = true;
	} else if( !preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($email)) ) {
		$emailError = 'Please provide valid email address.';
		$hasError = true;
	}

	if( trim($message) === '' ) {
		$messageError = "Merci de vérifier votre message.";
		$hasError = true;
	} else {
		if( function_exists( 'stripslashes' ) ) {
			$message = stripslashes( trim( $message ) );
		}
	}
		
	if(!isset($hasError)) {
		
		$emailTo = 'romain.marecat@gmail.com';
		$subject = 'Nouveau Message Envoyé De: ' . $name;
		$body = "Nom: $name \n\nEmail: $email \n\nMessage: $message";
		$headers = 'De: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
        
        $message = 'Merci ' . $name . ', Votre message a été envoyé.';
		$result = true;
	
	} else {

		$arrMessage = array( $nameError, $emailError, $messageError );

		foreach ($arrMessage as $key => $value) {
			if( !isset($value) )
				unset($arrMessage[$key]);
		}

		$message = implode( '<br/>', $arrMessage );
		$result = false;
	}

	header("Content-type: application/json");
	echo json_encode( array( 'message' => $message, 'result' => $result ));
	die();
}


?>