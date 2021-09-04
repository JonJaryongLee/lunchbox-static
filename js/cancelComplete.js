// 세션체크
onload = async () => {
  try {
    const response = await axios.get("../php/sessionCheck.php");
    if (response.data) {
      // 세션에 로그인정보가 있을 경우
      return;
    } else {
      // 세션에 로그인정보가 없을 경우
      location.href = "/html/login.html";
    }
  } catch (error) {
    console.log(error);
  }
};

// 3초후 메인화면으로 이동
setTimeout(() => {
  location.href = "/html/main.html";
}, 3000);
