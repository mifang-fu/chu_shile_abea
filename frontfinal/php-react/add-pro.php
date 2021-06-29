<?php
// add-user.php is for inserting new users into the database.
// Method: POST - http://localhost/php-react/add-user.php
// Required Fields – user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->pid)
    && isset($data->pName)
    && isset($data->unitprice)
    && isset($data->cost)
    && !empty(trim($data->pid))
    && !empty(trim($data->pName))
    && !empty($data->unitprice)
    && !empty($data->cost)
) {
    $pid = mysqli_real_escape_string($db_connection, trim($data->pid));
    $pName = mysqli_real_escape_string($db_connection, trim($data->pName));
    $unitprice = mysqli_real_escape_string($db_connection, trim($data->unitprice));
    $cost = mysqli_real_escape_string($db_connection, trim($data->cost));
    $insertProd = mysqli_query($db_connection, "INSERT INTO `product`(`ProdName`,`ProdID`,`UnitPrice`,`Cost`) VALUES('$pName','$pid','$unitprice','$cost')");
    if ($insertProd) {
        $last_id = mysqli_insert_id($db_connection);
        echo json_encode(["success" => 1, "msg" => "Product Inserted.", "id" => $pid]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Product Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>