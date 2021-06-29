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
    isset($data->seq)
    && isset($data->pid)
    && isset($data->qty)
    && isset($data->discount)
    && is_numeric($data->seq)
    && !empty(trim($data->pid))
    && !empty(trim($data->qty))
    && !empty(trim($data->discount))
) {
    //$orderid = mysqli_real_escape_string($db_connection, trim($data->orderid));
    $pid = mysqli_real_escape_string($db_connection, trim($data->pid));
    $qty = mysqli_real_escape_string($db_connection, trim($data->qty));
    $discount = mysqli_real_escape_string($db_connection, trim($data->discount));
    $updatedetail = mysqli_query($db_connection, "UPDATE `orderdetail` SET `ProdId`='$pid', `Qty`='$qty', `Discount`='$discount' WHERE `seq`='$data->seq'");
    if ($updatedetail) {
        echo json_encode(["success" => 1, "msg" => "Sale Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Sale Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>