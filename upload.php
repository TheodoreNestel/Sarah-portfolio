<?php

function uploadImg(){
  
  $response = new stdClass();

  $response->status = "Failed :(";


  if(!isset($_POST["psw"])){
    return json_encode($response);
  };

  if($_POST["psw"] != "11" ){
    $response->message = "Password is incorrect";
    return json_encode($response);
  }



  $arr = array();




	// Checks if user sent an empty form
	if(!empty(array_filter($_FILES['files']['name']))) {

		// Loop through each file in files[] array
		foreach ($_FILES['files']['tmp_name'] as $key => $value) {
			
			$file_tmpname = $_FILES['files']['tmp_name'][$key];
			$file_name = $_FILES['files']['name'][$key];
			$file_size = $_FILES['files']['size'][$key];
			$file_ext = pathinfo($file_name, PATHINFO_EXTENSION);

      array_push($arr, $file_name);

			// Set upload file path
			//$filepath = $upload_dir.$file_name;

			// Check file type is allowed or not
			// if(in_array(strtolower($file_ext), $allowed_types)) {

			// 	// Verify file size - 2MB max
			// 	if ($file_size > $maxsize)		
			// 		echo "Error: File size is larger than the allowed limit.";

			// 	// If file with name already exist then append time in
			// 	// front of name of the file to avoid overwriting of file
			// 	if(file_exists($filepath)) {
			// 		$filepath = $upload_dir.time().$file_name;
					
			// 		if( move_uploaded_file($file_tmpname, $filepath)) {
			// 			echo "{$file_name} successfully uploaded <br />";
			// 		}
			// 		else {					
			// 			echo "Error uploading {$file_name} <br />";
			// 		}
			// 	}
			// 	else {
				
			// 		if( move_uploaded_file($file_tmpname, $filepath)) {
			// 			echo "{$file_name} successfully uploaded <br />";
			// 		}
			// 		else {					
			// 			echo "Error uploading {$file_name} <br />";
			// 		}
			// 	}
			// }
			// else {
				
			// 	// If file extension not valid
			// 	echo "Error uploading {$file_name} ";
			// 	echo "({$file_ext} file type is not allowed)<br / >";
			// }
		}
	}
	




  
   $response->names = $arr;
  
  return json_encode($response);
  



}

?>