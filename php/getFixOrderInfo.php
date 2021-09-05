<?php
require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// 정상적인 json 출력을 위해 에러메세지 오프
error_reporting(0);
ini_set("display_errors", 0);
$username = $_SESSION["ses_username"];
$order_time = $_SESSION["ses_order_time"];
// 만약 수정버튼을 눌렀을 때 등록된 주문시간이 있다면
if ($_SESSION["ses_order_time"]) {
    // 해당 아이디와 주문시간에 일치하는 아이디를 찾는다.
    $sql = "
        SELECT
            order_id, 
            quantity, 
            address, 
            what_time, 
            etc, 
            menu_day, 
            menu_name
        FROM ordered
        LEFT JOIN menu 
        ON ordered.menu_id = menu.menu_id
        WHERE user_id = '$username'
        AND order_time = '$order_time'
    ";
    // 실행결과는 $res에 저장
    $res = $db->query($sql);
    // 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
    $row = $res->fetch_array(MYSQLI_ASSOC); 
    echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
}
// 수정요청 이후엔 필요가 없으니 해제
unset($_SESSION["ses_order_time"]); 
mysqli_close($db);

?>