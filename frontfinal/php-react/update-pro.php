<?php
// update-user.php is for updating an existing user.
// Method: POST - http://localhost/php-react/update-user.php
// Required Fields: id --> EmpId, user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->pid)
    && isset($data->pName)
    && isset($data->unitprice)
    && isset($data->cost)
    && !empty(trim($data->pName))
    && !empty(trim($data->unitprice))
    && !empty(trim($data->cost))
) {
    $pName = mysqli_real_escape_string($db_connection, trim($data->pName));
    $unitprice = mysqli_real_escape_string($db_connection, trim($data->unitprice));
    $cost = mysqli_real_escape_string($db_connection, trim($data->cost));
    $updateProd = mysqli_query($db_connection, "UPDATE `product` SET `ProdName`='$pName', `UnitPrice`='$unitprice', `Cost`='$cost' WHERE `ProdID`='$data->pid'");
    if ($updateProd) {
        echo json_encode(["success" => 1, "msg" => "prod Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "prod Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>