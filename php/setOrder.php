<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$quantity = $_POST["quantity"];
$address = $_POST["address"];
$what_time = $_POST["what_time"];
$etc = $_POST["etc"];

// 세션에서 가져올 것들
$user_id = $_SESSION["ses_username"];
$menu_id = $_SESSION["ses_index"];

// 주문추가
$sql = "
    INSERT INTO `ordered`
    (user_id, menu_id, quantity, address, what_time, etc)
    VALUES
    ('$user_id', '$menu_id', '$quantity', '$address', '$what_time', '$etc');
";  

//실행결과는 $res에 저장
$res = $db->query($sql); 

mysqli_close($db);

?>