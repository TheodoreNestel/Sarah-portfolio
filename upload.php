<?php

function uploadImg(){
  
  $response = new stdClass();

//   $response->status = "Failed :(";


  if(!isset($_POST["psw"])){
    return json_encode($response);
  };

  if($_POST["psw"] != "11" ){
    $response->message = "Password is incorrect";
    return json_encode($response);
  }



  $arr = array();
  $meta = json_decode($_POST["meta"]);
  $upload_dir = 'uploads'.DIRECTORY_SEPARATOR;
  $allowed_types = array('jpg', 'png', 'jpeg', 'gif');
  $valid_upload = FALSE;
   
  // Define maxsize for files i.e 2MB //this shits out a byte value
  $maxsize = 4 * 1024 * 1024;



	// Checks if user sent an empty form
	if(!empty(array_filter($_FILES['files']['name']))) {

		// Loop through each file in files[] array
		foreach ($_FILES['files']['tmp_name'] as $key => $value) {
			
			$file_tmpname = $_FILES['files']['tmp_name'][$key];
			$file_name = $_FILES['files']['name'][$key];
			$file_size = $_FILES['files']['size'][$key];
			$file_ext = pathinfo($file_name, PATHINFO_EXTENSION);

      array_push($arr, $file_name . " type : " . $meta[$key]->type);

			// Set upload file path
			$filepath = $upload_dir.$file_name;

			//Check file type is allowed or not
			if(in_array(strtolower($file_ext), $allowed_types)) {

				// Verify file size - 2MB max
				if ($file_size > $maxsize){

						$response->message = "Error: File size is larger than the allowed limit.";
						
					}
}
				// If file with name already exist then append time in
				// front of name of the file to avoid overwriting of file

				$filepath = $upload_dir . $meta[$key]->type . "__" . time() . "-" . $file_name;

				if( !move_uploaded_file($file_tmpname, $filepath)){
					$response->message = "Error uploading {$file_name}.";
				}
				else {
				// If file extension not valid
				$response->message = "Error uploading {$file_name}type is not valid .";
				}
				
		}
	}
	



	$files = array_diff(scandir(__DIR__ . '/uploads'), array('.', '..'));
  
    $response->names = $arr;
	$response->photos = $files;

  return json_encode($response);

  



}

?>