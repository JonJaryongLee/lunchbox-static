<?php
require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// 정상적인 json 출력을 위해 에러메세지 오프
error_reporting(0);
ini_set("display_errors", 0);
$username = $_SESSION["ses_username"];
$sql = "
    SELECT default_address, default_request 
    FROM person 
    WHERE user_id = '$username'
";
// 실행결과는 $res에 저장
$res = $db->query($sql);
// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 
echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
mysqli_close($db);
?>