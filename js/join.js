// 아이디, 비밀번호 유효성 검사
const check = (re, what) => {
  if (re.test(what)) {
    return true;
  }
  return false;
};

const toLogin = () => {
  location.replace("../login.html");
};

// 알람을 띄웠다가 1초후에 종료
const showAlarm = (failedAlert) => {
  failedAlert.style.display = "block";
  setTimeout(() => {
    failedAlert.style.display = "none";
  }, 1000);
};

const join = async () => {
  const re = /^[a-zA-Z0-9]{4,16}$/; // 아이디와 패스워드가 적합한지 검사할 정규식
  // DOM 접근용
  const id = document.querySelector(".id-input").value;
  const password = document.querySelector(".password-input").value;
  const failedAlert = document.querySelector(".joinFailedAlert");

  // 유효성 체크 후 부합하지 않으면 에러
  if (!check(re, id)) {
    showAlarm(failedAlert);
    return false;
  }
  if (!check(re, password)) {
    showAlarm(failedAlert);
    return false;
  }

  const defaultAddress = document.querySelector(".default-address-input").value;

  try {
    // response.data는 true 또는 false이다.
    // true: 회원가입 성공
    // false: 회원가입 실패
    const response = await axios.post("../php/join.php", {
      id: id,
      pw: password,
      defaultAddress: defaultAddress,
    });
    if (response.data) {
      // 회원가입 성공 시
      location.replace("../main.html"); // 메인화면으로 이동
    } else {
      // 회원가입 실패 시
      showAlarm(failedAlert); // 경고창 띄우고 1초후에 끄기
    }
  } catch (error) {
    console.log(error);
  }
};
