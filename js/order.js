onload = async () => {
  try {
    const response = await axios.get("../php/sessionCheck.php");
    if (!response.data) {
      location.href = "login.html"; // 로그인정보가 없으면 로그인화면으로
    }
  } catch (error) {
    console.log(error);
  }
};
