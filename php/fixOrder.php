<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$order_id = $_POST["order_id"];
$quantity = $_POST["quantity"];
$address = $_POST["address"];
$what_time = $_POST["what_time"];
$etc = $_POST["etc"];

// 세션에서 아이디 가져옴
$user_id = $_POST["ses_username"];

// 주문수정
$sql = "
    UPDATE ordered 
    SET
    quantity = '$quantity',
    address = '$address',
    what_time = '$what_time',
    etc = '$etc'
    WHERE order_id = '$order_id';
";

$db->query($sql);

// 디폴트 리퀘스트 추가
$sql = "
    UPDATE person
    SET
    default_request = '$etc'
    WHERE user_id = '$user_id'
";

$db->query($sql);

mysqli_close($db);

?>