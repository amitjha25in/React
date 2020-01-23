<?php   
    require 'core.php';

    $connect = mysqli_connect("localhost", "root", "", "blog_react");  
    $sql = "SELECT * FROM likes";  
    $result = mysqli_query($connect, $sql);  
    $json_array = array();  
    while($row = mysqli_fetch_assoc($result))  
    {  
        $json_array[] = $row;  
    } 
    echo json_encode($json_array);  
?>  