<?php
//세션변수 사용을 위함 
session_start();
// 세션테스트용
echo json_encode($_SESSION["ses_index"],JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
?>