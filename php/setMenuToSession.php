<?php
// 이 php 파일의 경우, 디비연결부가 불필요함.

// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$index = $_POST["index"];
// 세션변수 사용을 위함
session_start();
$_SESSION["ses_index"] = $index; // 세션변수에 입력

?>