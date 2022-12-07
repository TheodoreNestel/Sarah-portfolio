<?php
 
// Require the class
include 'Route.php';
 
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

 

//post photo route

Route::add('/upload', function() {
    //write function that runs the upload file 
});
 
// 404 ROUTE
 
Route::pathNotFound(function() {
    readfile('dist/pages/lost.html');
});
 
 
 
 
// INITIALIZE ROUTER
 
// Run the router
Route::run('/');
 
 
?>
