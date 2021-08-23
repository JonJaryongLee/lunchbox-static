// 알람을 띄웠다가 1초후에 종료
const showAlarm = (failedAlert) => {
  failedAlert.style.display = "block";
  setTimeout(() => {
    failedAlert.style.display = "none";
  }, 1000);
}

const login = async () => {
  // DOM 접근용
  const id = document.querySelector(".id-input").value;
  const password = document.querySelector(".password-input").value;
  const failedAlert = document.querySelector(".loginFailedAlert");

  try {
    // response.data는 true 또는 false이다.
    // true: 로그인 성공
    // false: 로그인 실패
    const response = await axios.post('../php/login.php',{
        id: id,
        pw: password
    });
    if(response.data){                  // 로그인 성공 시
      location.replace("../main.html"); // 메인화면으로 이동
    } else {                            // 로그인 실패 시
      showAlarm(failedAlert);           // 경고창 띄우고 1초후에 끄기
    }
  } catch (error) {
      console.log(error);
  }
};
