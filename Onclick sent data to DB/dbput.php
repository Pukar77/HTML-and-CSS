<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "test"; 

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

if(isset($_POST["name"]) && isset($_POST["price"])){
$name = $_POST["name"];
$price = $_POST["price"];
$insertBook = $conn->prepare("insert into test(price,name) values(?,?)");
            $insertBook->bind_param("is",$price, $name);
            $insertBook = $bookmarkSql->execute($insertBook);
echo "success";
}
else{
    echo"failed";
}
$insertBook->close();
 else {
    echo "name or price not set";
}

