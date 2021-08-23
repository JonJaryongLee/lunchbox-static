<?php
// 세션테스트용
require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
echo json_encode($_SESSION["ses_username"],JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
mysqli_close($db);
?>