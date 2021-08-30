// 서버로부터 데이터를 담을 변수
let datas;
let index = 0;

// 세션체크
onload = async () => {
  try {
    const response = await axios.get("../php/sessionCheck.php");
    if (response.data) {
      getData(); // 로그인정보가 있으면 모든 데이터 가져오기
    } else {
      location.href = "login.html"; // 로그인정보가 없으면 로그인화면으로
    }
  } catch (error) {
    console.log(error);
  }
};

const getData = async () => {
  try {
    const response = await axios.get("../php/getMenu.php");
    datas = response.data;

    // 주요내용 초기화.
    document.querySelector(".whatDate").textContent =
      datas[0].menu_day + " 점심메뉴";
    document.querySelector(".menuName").textContent = datas[0].menu_name;
    document.querySelector(".menuExplain").textContent = datas[0].description;
    document.querySelector(".foodImg").src = datas[0].image_link;

    // 로딩 꺼버림
    document.querySelector(".loading").style.display = "none";
    // 숨겨져있던 메인화면 킴
    document.querySelector(".mainContent").style.display = "block";
  } catch (error) {
    console.log(error);
  }
};

// 현재 인덱스에 맞게 내용 수정
const changeDOM = () => {
  document.querySelector(".whatDate").textContent =
    datas[index].menu_day + " 점심메뉴";
  document.querySelector(".menuName").textContent = datas[index].menu_name;
  document.querySelector(".menuExplain").textContent = datas[index].description;
  document.querySelector(".foodImg").src = datas[index].image_link;
};

// 사용자가 옆에 있는 버튼 클릭해 메인의 내용이 바뀔 때 동작함
const changeIndex = (mode) => {
  if (mode === "prev") {
    // 왼쪽버튼 클릭했을경우
    if (index !== 0) {
      index = index - 1;
    } else {
      index = datas.length - 1;
    }
  } else {
    // 오른쪽 버튼 클릭했을경우
    if (index !== datas.length - 1) {
      index = index + 1;
    } else {
      index = 0;
    }
  }
  changeDOM(); // 인덱스가 정해지면 실행
};

// 주문하기 화면으로 가는 함수
// 간단히 href 로 처리할수도 있었지만,
// 현재 사용자가 선택한 인덱스를 세션등록해야되기때문에
// 아예 함수를 따로 만듦
const goOrder = async () => {
  try {
    await axios.post("../php/setMenuToSession.php", {
      index: index,
    });
    // 세션 등록한 후 이동
    location.href = "order.html";
  } catch (error) {
    console.log(error);
  }
};
