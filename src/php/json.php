<?php   
    require 'core.php';
//ORDER BY id DESC
    $connect = mysqli_connect("localhost", "root", "", "testing");  
    $sql = "SELECT * FROM apps_countries ORDER BY ID DESC ";  
    $result = mysqli_query($connect, $sql);  
    $json_array = array();  
    while($row = mysqli_fetch_assoc($result))  
    {  
        $json_array[] = $row;  
    } 
    echo json_encode($json_array);  
?>  