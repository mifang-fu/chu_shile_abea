<?php
// delete-user.php is for deleting an existing user.
// Method: POST - http://localhost/php-react/delete-user.php
// Required Fields: id --> EmpId

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

    $del = mysqli_real_escape_string($db_connection, trim($data->pid));
    $allUsers = mysqli_query($db_connection, "SELECT ProdID as pid, ProdName as pName, UnitPrice as unitprice, Cost as cost FROM `product` WHERE ProdID LIKE '%$del%'");
    if ($allUsers){
    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "prods" => $all_users], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["success" => 0, "msg" => "detail Not Found!"]);
    }
