// 서버로부터 데이터를 담을 변수
let data;
// 첫 인덱스가 0이 아니라 1인 이유는,
// 애초에 디비 만들때 메뉴에 인덱스를 달아두지 않았기 때문
// 이건 추후 수정해서 더 좋은 방식으로 코딩할 수 있도록 할 것
let index = 1;
onload = async () => {
  try {
    const response = await axios.get("../php/getMenu.php");
    data = response.data;
    // 로딩 꺼버림
    document.querySelector(".loading").style.display = "none";
    // 숨겨져있던 메인화면 킴
    document.querySelector(".mainContent").style.display = "block";
    // 주요내용 초기화. 인덱스 1번으로 세팅해서 내일 메뉴가 먼저 나오도록 조치
    document.querySelector(".whatDate").textContent =
      data[1].menu_day + " 점심메뉴";
    document.querySelector(".menuName").textContent = data[1].menu_name;
    document.querySelector(".menuExplain").textContent = data[1].description;
    // 세 개의 이미지를 미리 세팅. 반복문을 사용해보려 노력해볼 것.
    document.querySelectorAll(".carousel-inner .carousel-item img")[0].src =
      data[1].image_link;
    document.querySelectorAll(".carousel-inner .carousel-item img")[1].src =
      data[2].image_link;
    document.querySelectorAll(".carousel-inner .carousel-item img")[2].src =
      data[0].image_link;
  } catch (error) {
    console.log(error);
  }
};

// 현재 인덱스에 맞게 내용 수정
const changeDOM = () => {
  document.querySelector(".whatDate").textContent =
    data[index].menu_day + " 점심메뉴";
  document.querySelector(".menuName").textContent = data[index].menu_name;
  document.querySelector(".menuExplain").textContent = data[index].description;
};

// 사용자가 옆에 있는 버튼 클릭해 메인의 내용이 바뀔 때 동작함
const changeIndex = (mode) => {
  if (mode === "prev") { // 왼쪽버튼 클릭했을경우
    if (index !== 0) {
      index = index - 1;
    } else {
      index = 2;
    }
  } else {    // 오른쪽 버튼 클릭했을경우
    if (index !== 2) {
      index = index + 1;
    } else {
      index = 0;
    }
  }
  changeDOM();  // 인덱스가 정해지면 실행
};

// 주문하기 화면으로 가는 함수
// 간단히 href 로 처리할수도 있었지만, 
// 현재 사용자가 선택한 인덱스를 세션등록해야되기때문에
// 아예 함수를 따로 만듦
const goOrder = async () => {
  try {
    const response = await axios.post("../php/setMenuToSession.php", {
      index: index,
    });
    // 세션 등록한 후 이동
    location.href = "order.html";
  } catch (error) {
    console.log(error);
  }
};
