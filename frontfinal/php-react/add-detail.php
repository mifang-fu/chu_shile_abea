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
    && isset($data->orderid)
    && isset($data->pid)
    && isset($data->qty)
    && isset($data->discount)
    && !empty(trim($data->seq))
    && !empty(trim($data->orderid))
    && !empty(trim($data->pid))
    && !empty(trim($data->qty))
    && !empty(trim($data->discount))
) {
    $seq = mysqli_real_escape_string($db_connection, trim($data->seq));
    $orderid = mysqli_real_escape_string($db_connection, trim($data->orderid));
    $pid = mysqli_real_escape_string($db_connection, trim($data->pid));
    $qty = mysqli_real_escape_string($db_connection, trim($data->qty));
    $discount = mysqli_real_escape_string($db_connection, trim($data->discount));
    $insertdetail = mysqli_query($db_connection, "INSERT INTO `orderdetail`(`seq`,`OrderId`,`ProdId`,`Qty`,`Discount`) VALUES('$seq','$orderid','$pid','$qty','$discount')");
    if ($insertdetail) {
        $last_detail = mysqli_insert_id($db_connection);
        echo json_encode(["success" => 1, "msg" => "detail Inserted.", "seq" => $last_detail]);
    } else {
        echo json_encode(["success" => 0, "msg" => "detail Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>