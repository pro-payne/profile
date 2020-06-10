<?php
//var_dump($_POST); return;
//if (isset($_POST['submit']))
if (empty($_POST))
{
	//this page should not be accessed directly.Need to submit the form.
	echo "error;  you need to submit the form!";

} else{
	if (isset($_POST["submit"])){
		$to_email = "ayabongapayne@gmail.com";
		$from_email = $_POST["from_email"];
		$subject = $_POST["subject"];
		$message = $_POST["message"];
  		
  		//mail('ayabongapayne@gmail.com',$from_email, $subject, $message);
  		//header('submit');
		if ( mail($to_email,$from_email, $subject, $message)){
			echo ("email successfully sent to $to_email.....");
		} else {
			echo ("Email sending failed.....");
		}
	}
}
?>
