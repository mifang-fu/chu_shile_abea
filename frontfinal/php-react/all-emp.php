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

if (
    isset($data->empid)
    && isset($data->password)
    && is_numeric($data->empid)
    && !empty(trim($data->password))
    ) {
        $empid = mysqli_real_escape_string($db_connection, trim($data->empid));
        $password = mysqli_real_escape_string($db_connection, trim($data->password));
        $allemp = mysqli_query($db_connection, "SELECT EmpId as empid, EmpName as empname,DeptName as deptname, JobTitle as jobtitile ,Phone as pwd FROM `employee`,`dept` WHERE employee.DeptId=dept.DeptId AND `EmpId`='$empid''");
        if ($allemp) {
            $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
            echo json_encode(["success" => 1, "emp" => $all_users], JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode(["success" => 0, "msg" => "user not found!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
    }
?>
