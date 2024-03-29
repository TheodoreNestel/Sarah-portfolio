<?php
 
// Require the class
include 'Route.php';
include 'upload.php';
 
// Use this namespace
use Steampixel\Route;
 
 
 
// DEFAULT ROUTES
 
// Add the home/main route
Route::add('/', function() {
    readfile('dist/index.html');
});

Route::add('/admin', function() {
    readfile('dist/photoUploaderForm.html');
});
 

//Get photo route

Route::add('/photos', function() {
    $response = new stdClass();
    $files = array_diff(scandir(__DIR__ . '/uploads'), array('.', '..'));

    $response->data = $files;

    return json_encode($response);
});
 

//post photo route

Route::add('/upload', function() {
    //write function that runs the upload file 
   return uploadImg();

}, "post");
 
// 404 ROUTE
 
Route::pathNotFound(function() {
    readfile('dist/pages/lost.html');
});
 
 
 
 
// INITIALIZE ROUTER
 
// Run the router
Route::run('/');
 
 
?>
