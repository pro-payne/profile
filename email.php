<?php
// var_dump($_POST); return;
//if (isset($_POST['submit']))
$results = ['success' => false];

if (isset($_POST["from_email"]) && isset($_POST["subject"]) && isset($_POST["message"])){
	$to_email = "ayabongapayne@gmail.com";
	$from_email = $_POST["from_email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];
	
	try{
		if ( mail($to_email,$from_email, $subject, $message)){
			$results['success'] = true;			
		}		
	}catch(Exception $e){
		echo json_encode($results);
		return;
	}	
}

echo json_encode($results);
