<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
    $date1 = mysqli_real_escape_string($db_connection, trim($data->orderdate));
    //$date2 = mysqli_real_escape_string($db_connection, trim($data->date2));
    $allUsers = mysqli_query($db_connection, "SELECT salesorder.OrderDate as orderdate,customer.CustName as custname,salesorder.CustId as custid ,sum(qty*unitprice*discount) as allcost,sum(qty*(unitprice*discount-cost)) as realcost FROM salesorder,orderdetail,customer,product WHERE salesorder.OrderId=orderdetail.OrderId AND orderdetail.ProdId=product.ProdID AND salesorder.CustId=customer.CustId AND OrderDate ='$date1'  GROUP by orderdate,custname");
    if ($allUsers) {
        $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
        echo json_encode(["success" => 1, "alls" => $all_users], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["success" => 0, "msg" => "all Not Found!"]);
    }

