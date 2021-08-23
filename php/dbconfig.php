<?php

// DB접속의 기본이 되는 파일
// 각 파일의 제일 첫번째에 위치시킬것 

//세션변수 사용을 위함 
session_start();
// 에러 콘솔로 출력
error_reporting(E_ALL);
ini_set("display_errors", 1);
// json type 사용시 필요한 헤더
header("Content-Type:application/json");

// DB 접속
$host = '203.255.3.144:1315';
$user = 'admin';
$pw = 'lunchbox';
$dbName = 'lunchbox';
$db = new mysqli($host, $user, $pw, $dbName);

// 기본 클라이언트 문자 집합 설정하기
mysqli_set_charset($db, "utf8");
  
?>