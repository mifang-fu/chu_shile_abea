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
    isset($data->seq)
    && isset($data->orderid)
    && isset($data->empid)
    && isset($data->custid)
    && isset($data->orderdate)
    && isset($data->descript)
    && !empty(trim($data->seq))
    && !empty(trim($data->orderid))
    && !empty($data->empid)
    && !empty($data->custid)
    && !empty($data->orderdate)
    && !empty($data->descript)
) {
    $seq = mysqli_real_escape_string($db_connection, trim($data->seq));
    $orderid = mysqli_real_escape_string($db_connection, trim($data->orderid));
    $empid = mysqli_real_escape_string($db_connection, trim($data->empid));
    $custid = mysqli_real_escape_string($db_connection, trim($data->custid));
    $orderdate = mysqli_real_escape_string($db_connection, trim($data->orderdate));
    $descript = mysqli_real_escape_string($db_connection, trim($data->descript));
    $insertSale = mysqli_query($db_connection, "INSERT INTO `salesorder`(`seq`,`OrderId`,`EmpId`,`CustId`,`OrderDate`,`Descript`) VALUES('$seq','$orderid','$empid','$custid','$orderdate','$descript')");
    if ($insertSale) {
        $last_sale = mysqli_insert_id($db_connection);
        echo json_encode(["success" => 1, "msg" => "Sale Inserted.", "seq" => $last_sale]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Sale Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>