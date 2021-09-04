<?php
// 이 php 파일의 경우, 디비연결부가 불필요함.

// 정상적인 json 출력을 위해 에러메세지 오프
error_reporting(0);
ini_set("display_errors", 0);
// json type 사용시 필요한 헤더
header("Content-Type:application/json");

// 세션변수 사용을 위함
session_start();
// 만약 수정버튼을 눌렀을 때 등록된 주문시간이 있다면
if ($_SESSION["ses_order_time"]) {
    echo json_encode([
        'username' => $_SESSION["ses_username"],
        'order_time' => $_SESSION["ses_order_time"]
    ],JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
}

unset($_SESSION["ses_order_time"]); // 수정요청 이후엔 필요가 없으니 해제

?>