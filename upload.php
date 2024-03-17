<?php
if(isset($_FILES['videoFile'])){
    $errors= array();
    $file_name = $_FILES['videoFile']['name'];
    $file_tmp = $_FILES['videoFile']['tmp_name'];
    
    $file_extension = strtolower(end(explode('.',$_FILES['videoFile']['name'])));
    $extensions= array("mp4","avi","mov","mkv");
    
    if(in_array($file_extension,$extensions)=== false){
        $errors[]="Extension not allowed, please choose a video file.";
    }
    
    if(empty($errors)==true){
        move_uploaded_file($file_tmp,"uploads/".$file_name);
        echo "File uploaded successfully.";
    }else{
        print_r($errors);
    }