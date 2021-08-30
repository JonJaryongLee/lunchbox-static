<?php
//세션변수 사용을 위함 
session_start();

// 정상적인 json 출력을 위해 에러메세지 오프
error_reporting(0);
ini_set("display_errors", 0);
// json type 사용시 필요한 헤더
header("Content-Type:application/json");

if ($_SESSION["ses_username"]) {
    echo json_encode(true,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
}
?>
