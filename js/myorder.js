// 세션체크
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

const toMain = () => {
  location.href = "main.html";
}

const changeIndex = (mode) => {
  console.log(mode);
};

const goOrder = () => {
  console.log("수정하기 누름.");
};

const openCancelDialog = () => {
  console.log("삭제하기 누름.");
};
