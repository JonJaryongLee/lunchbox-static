let fix;
// 시간 드롭다운 인덱스에 맞는 타임테이블
const timeAndIndex = {
  "11:00AM": 1,
  "11:30AM": 2,
  "12:00PM": 3,
  "12:30PM": 4,
  "01:00PM": 5,
  "01:30PM": 6,
};

const indexAndTime = {
  1: "11:00AM",
  2: "11:30AM",
  3: "12:00PM",
  4: "12:30PM",
  5: "01:00PM",
  6: "01:30PM",
};

const getUserSelectedMenu = async () => {
  try {
    const response = await axios.get("/php/getUserSelectedMenu.php");
    document.querySelector(".menuName").textContent = response.data.menu_name;
    document.querySelector(".menuDate").textContent =
      response.data.menu_day + " 배달되요!";
  } catch (error) {
    console.log(error);
  }
};

// 단순히 가져오는것뿐만 아니라 붙이는일도 한다.
const getUserDefaultInfo = async () => {
  try {
    const response = await axios.get("/php/getUserAddressAndDemand.php");
    document.querySelector("#addressInput").value =
      response.data.default_address;
    document.querySelector("#demandInput").value =
      response.data.default_request;
  } catch (error) {
    console.log(error);
  }
};

const renderFixData = (data) => {
  fix = data;
  document.querySelector(".menuName").textContent = fix.menu_name;
  document.querySelector(".menuDate").textContent = fix.menu_day + " 배달되요!";
  document.querySelector("#quantity").value = fix.quantity;
  document.querySelector("#addressInput").value = fix.address;
  // 시간을 인덱스로 변환
  const timeIndex = timeAndIndex[fix.what_time];
  document.querySelector("#timeInput").value = timeIndex;
  document.querySelector("#demandInput").value = fix.etc;
};

onload = async () => {
  try {
    let response = await axios.get("/php/sessionCheck.php");
    if (!response.data) {
      location.href = "/html/login.html"; // 로그인정보가 없으면 로그인화면으로
    }
    response = await axios.get("/php/getFixOrderInfo.php");
    // 수정요청이 아니라면
    if (!response.data) {
      // 사용자가 선택한 메뉴의 이름과 날짜 붙이기
      getUserSelectedMenu();
      // 사용자 기본 배달지, 주문요청사항 받아와서 붙임
      getUserDefaultInfo();
    } else {
      // 수정요청이라면, DOM 수정을 해야한다.
      renderFixData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const order = async () => {
  if (fix) {
    // 수정모드
    // order_id는 fix에서 그냥 받아오면 된다.
    const order_id = fix.order_id;
    const quantity = document.querySelector("#quantity").value;
    const address = document.querySelector("#addressInput").value;
    // 인덱스를 시간으로 변환
    const what_time = indexAndTime[document.querySelector("#timeInput").value];
    const etc = document.querySelector("#demandInput").value;
    try {
      await axios.post("/php/fixOrder.php", {
        order_id: order_id,
        quantity: quantity,
        address: address,
        what_time: what_time,
        etc: etc,
      });
      location.href = "/html/orderComplete.html";
    } catch (error) {
      console.log(error);
    }
  } else {
    // 일반주문모드
    // 주문추가이기때문에 order_id 불필요
    const quantity = document.querySelector("#quantity").value;
    const address = document.querySelector("#addressInput").value;
    // 인덱스를 시간으로 변환
    const what_time = indexAndTime[document.querySelector("#timeInput").value];
    const etc = document.querySelector("#demandInput").value;
    try {
      await axios.post("/php/setOrder.php", {
        quantity: quantity,
        address: address,
        what_time: what_time,
        etc: etc,
      });
      location.href = "/html/orderComplete.html";
    } catch (error) {
      console.log(error);
    }
  }
};
