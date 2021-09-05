// 서버로부터 데이터를 담을 변수
let datas;
let index = 0;

// 세션체크
onload = async () => {
  try {
    let response = await axios.get("../php/sessionCheck.php");
    if (!response.data) {
      location.href = "/html/login.html"; // 로그인정보가 없으면 로그인화면으로
    }
    // 로그인 정보가 있다면 사용자 주문정보 불러오기
    response = await axios.get("../php/getMyOrder.php");
    if (response.data) {
      datas = response.data;
      // 첫 화면 데이터 세팅
      document.querySelector(".myMenu").textContent = datas[0].menu_name;
      document.querySelector(".quantity").textContent = datas[0].quantity;
      document.querySelector(".address").textContent = datas[0].address;
      document.querySelector(".time").textContent = datas[0].time;
      document.querySelector(".demandContent").textContent = datas[0].etc;
    } else {
      // 주문내역이 없어 false가 반환되었을 시
      // 주문화면을 끄고 주문내역이 없다는 안내 노출
      document.querySelector(".myOrderMain").style.display = "none";
      document.querySelector(".ifNoData").style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
};

// 현재 인덱스에 맞게 내용 수정
const changeDOM = () => {
  document.querySelector(".myMenu").textContent = datas[index].menu_name;
  document.querySelector(".quantity").textContent = datas[index].quantity;
  document.querySelector(".address").textContent = datas[index].address;
  document.querySelector(".time").textContent = datas[index].time;
  document.querySelector(".demandContent").textContent = datas[index].etc;
};
// 사용자가 옆에 있는 버튼 클릭해 마이오더의 내용이 바뀔 때 동작함
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

// 주문시간 세션등록하고, 주문화면으로 페이지 전환
// 가정: 한 명의 유저가 아무리 빨리 주문해도 1초안에 같은 걸 두 번 주문할 수 없다!
// 그렇기에, 세션에 유저 아이디와 주문시간만 있다면 해당 내역을 불러올 수 있을 것이고,
// 수정할 수 있다.
const goOrder = async () => {
  try {
    await axios.post("../php/setOrderTimeToSession.php", {
      order_time: datas[index].order_time,
    });
    location.replace("/html/order.html"); // 주문화면으로 이동
  } catch (error) {
    console.log(error);
  }
};

// 취소 버튼 눌렀을 때
const cancel = async () => {
  try {
    const response = await axios.post("../php/menuCancel.php", {
      order_time: datas[index].order_time
    });
    location.replace("/html/cancelComplete.html"); // 주문 취소 완료화면으로 이동
  } catch (error) {
    console.log(error);
  }
};
