<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Credentials:true");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age:604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with, x-requested-by");
include("keys.php");



// Include router class
include('Route.php');
include("keys.php");

// Add base route (startpage)
Route::add('/',function(){
    echo 'Welcome :-)';
});


// Simple test route that simulates static html file
Route::add('/nooo',function(){
    
    
});

//  <!-- Post route example -->
Route::add('/prueba',function(){
    $data = array();
    $cari = mysqli_query($conn, "select * from usuario");

    while ($row = mysqli_fetch_object($cari)) {
        $data[] = $row;
    }
    
    echo json_encode($data);
},'get');

// Post route example
Route::add('/contact-form',function(){
    echo 'Hey! The form has been sent:<br/>';
    print_r($_POST);
},'post');

// Accept only numbers as parameter. Other characters will result in a 404 error
Route::add('/foo/([0-9]*)/bar',function($var1){
    echo $var1.' is a great number!';
});

Route::run('/');







// $data = array();
// $cari = mysqli_query($conn, "select * from area");

// while ($row = mysqli_fetch_object($cari)) {
//     $data[] = $row;
// }
// echo json_encode($data);


// // Include router class
// include('Route.php');
// include("keys.php");

// // Add base route (startpage)
// Route::add('/',function(){
//     echo 'Welcome :-)';
// });


// // Simple test route that simulates static html file
// Route::add('/nooo',function(){
    
    
// });

// //  <!-- Post route example -->
// Route::add('/prueba',function(){
//     $data = array();
//     $cari = mysqli_query($conn, "select * from usuario");

//     while ($row = mysqli_fetch_object($cari)) {
//         $data[] = $row;
//     }
    
//     echo json_encode($data);
// },'get');

// // Post route example
// Route::add('/contact-form',function(){
//     echo 'Hey! The form has been sent:<br/>';
//     print_r($_POST);
// },'post');

// // Accept only numbers as parameter. Other characters will result in a 404 error
// Route::add('/foo/([0-9]*)/bar',function($var1){
//     echo $var1.' is a great number!';
// });

// Route::run('/');