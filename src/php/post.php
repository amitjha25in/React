<?php  
   require 'core.php';

   $connect = mysqli_connect("localhost", "root", "", "testing");  
   $post = json_decode(file_get_contents('php://input'), true);
//    print_r($post);
//    exit;
    if(isset($post["posts"]))  
    {  
        $country_code = mysqli_real_escape_string($connect, $post["posts"]["country_code"]);  
        $country_name = mysqli_real_escape_string($connect, $post["posts"]["country_name"]); 
         
        $query = "INSERT INTO apps_countries(country_code, country_name) VALUES('".$country_code."', '".$country_name."')";  
        
        if(mysqli_query($connect, $query))  
        {  
            $arr=array();
            $arr['country_code']=$country_code;
            $arr['country_name']=$country_name;
            echo json_encode($arr);   
        }  
    }  
?>  