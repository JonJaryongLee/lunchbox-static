let fix, userDefaultAddress, userDefaultDemand;

onload = async () => {
  try {
    let response = await axios.get("../php/sessionCheck.php");
    if (!response.data) {
      location.href = "/html/login.html"; // 로그인정보가 없으면 로그인화면으로
    }
    response = await axios.get("../php/getFixOrderInfo.php");
    // 수정요청이 아니라면 사용자 기본 배달지, 주문요청사항 받아옴
    if (!response.data) {
      response = await axios.get("../php/getUserAddressAndDemand.php");
      userDefaultAddress = response.data.default_address;
      userDefaultDemand = response.data.default_request;
    } else {
      // 수정요청이라면, DOM 수정을 해야한다.
      fix = response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const order = () => {
  if (fix) {
    console.log("수정모드!");
  } else {
    console.log("일반주문모드!");
  }
};

