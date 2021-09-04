<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$order_time = $_POST["order_time"];

// 세션의 아이디를 담을 변수
$memberId = $_SESSION["ses_username"];

// member 테이블로부터 id가 일치하는게 있는지 파악
$sql = "SELECT order_id FROM ordered WHERE user_id = '$memberId' AND order_time = '$order_time'";  

//실행결과는 $res에 저장
$res = $db->query($sql); 

// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 

// 삭제할 오더 아이디
$order_id = $row["order_id"];

// 삭제 sql 구문. 해당 오더 아이디와 일치하는 데이터를 삭제
$sql = "DELETE FROM ordered WHERE order_id = '$order_id'";

// $res에 저장할 필요 없이 그냥 실행
$db->query($sql); 

mysqli_close($db);

?>