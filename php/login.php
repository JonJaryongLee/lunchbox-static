<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);

// 클라이언트로부터 받아온 것을 php 변수에 담음
$memberId = $_POST["id"];
$memberPw = $_POST["pw"];

// member 테이블로부터 id와 pwd가 일치하는 것을 고른다.
$sql = "SELECT * FROM person WHERE user_id = '$memberId' AND password = '$memberPw'";  

//실행결과는 $res에 저장
$res = $db->query($sql); 

// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 

if ($row != null) { // 만약 배열이 존재한다면, 로그인 성공한 것
    $_SESSION["ses_username"] = $row['user_id']; // 세션변수에 입력
    echo json_encode(true,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {            // 만약 배열에 아무것도 없다면 false 반환하며 로그인 실패
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK); 
}

mysqli_close($db);

?>