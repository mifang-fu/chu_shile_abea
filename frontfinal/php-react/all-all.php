<?php
// all-users.php is to fetch all users that exist in the database.
// Method: GET - http://localhost/php-react/all-users.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$allSales = mysqli_query($db_connection, "SELECT salesorder.OrderDate as orderdate,customer.CustName as custname,salesorder.CustId as custid ,sum(qty*unitprice*discount) as allcost,sum(qty*(unitprice*discount-cost)) as realcost FROM salesorder,orderdetail,customer,product WHERE salesorder.OrderId=orderdetail.OrderId AND orderdetail.ProdId=product.ProdID AND salesorder.CustId=customer.CustId GROUP by orderdate,Custname");
if (mysqli_num_rows($allSales) > 0) {
    $all_sales = mysqli_fetch_all($allSales, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "alls" => $all_sales], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
}
?>
