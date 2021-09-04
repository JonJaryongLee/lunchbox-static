<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가

$username = $_SESSION["ses_username"];

// LEFT JOIN 사용
$sql = "
    SELECT 
        quantity, 
        address, 
        what_time, 
        etc, 
        menu_day, 
        menu_name,
        order_time
    FROM ordered
    LEFT JOIN menu 
    ON ordered.menu_id = menu.menu_id
    WHERE user_id = '$username'
";

// 최종결과
$data = array();

// 실행결과는 $res에 저장
$res = $db->query($sql);

// fetch_array는 한번 실행될때마다 한 행씩 뱉어내므로
// 원하는 걸 모두 얻으려면 반복문 사용해야함.
for ($i = 0 ; $i < $res->num_rows ; $i++)  {
    $row = $res->fetch_array(MYSQLI_ASSOC);
    array_push($data, $row);
}

if ($data != null) {  // 만약 배열이 존재한다면 사용자 주문 내역이 있는 것
    echo json_encode($data, JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {    // 사용자 주문 내역이 없을 경우
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
}

mysqli_close($db);

?>