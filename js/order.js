onload = async () => {
  try {
    let response = await axios.get("../php/sessionCheck.php");
    if (!response.data) {
      location.href = "/html/login.html"; // 로그인정보가 없으면 로그인화면으로
    }
    response = await axios.get("../php/getFixOrderInfo.php");
    if(!response.data) {
      return; // 수정요청이 아니라면 원래 화면으로
    } else {  // 수정요청이라면, 데이터 받아오는 요청을 해서 DOM 수정을 해야한다.
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
