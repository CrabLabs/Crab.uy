<?php

define('mail_to', 'rodrigo@crab.uy');
define('subject', 'New Crab.uy Contact!');

if (isset($_POST['name'], $_POST['email'], $_POST['message']) )
{
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	$headers = 	'From: $email' . "\r\t" .
				'Replay-To: $mail ' ."\r\t" .
				'X-Mailer: PHP/' . phpversion();

	if (filter_var($email, FILTER_VALIDATE_EMAIL) {
		$message = wordwrap($message, 70, "\r\t");
		mail(mail_to, subject, $message, $headers)
	} else {
		print('This ($email) email address is not valid.');
	}
}
else
{
	// $missing = array();
	// foreach (array('name', 'email', 'message') as $attribute)
	// {
	// 	if (! isset($_POST[$attribute]))
	// 		$missing[] = $attribute;
	// }
	$missing = array_map(function ($attr) {
		return (! isset($_POST[$attr]) ) ? $attr : false;
	}, array('name', 'email', 'message'));
	
	printf('The %s %s missing!', serialize($missing), (count($missing) > 1) ? 'are' : 'is');
	die;	
}