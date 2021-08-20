const passwordCheck = (userTypedPassword, passwordInDB) => {
  if (userTypedPassword === passwordInDB) {
    return true;
  } else {
    return false;
  }
};

const showAlarm = (failedAlert) => {
  failedAlert.style.display = "block";
  setTimeout(() => {
    failedAlert.style.display = "none";
  }, 1000);
}

const login = async () => {
  const id = document.querySelector(".id-input").value;
  const password = document.querySelector(".password-input").value;
  const failedAlert = document.querySelector(".loginFailedAlert");
  try {
    const response = await axios.get("../test_json/user.json");
    const users = response.data.users;
    const matchedId = users.filter((user) => user.user_id === id);
    if (matchedId.length === 0) {
      showAlarm(failedAlert);
    } else {
      const isPasswordCorrect = passwordCheck(password, matchedId[0].password);
      if (isPasswordCorrect) {
        // 해당 아이디를 main.js 로 보내야함.
        location.replace("../main.html");
      } else {
        showAlarm(failedAlert);
      }
    }
  } catch (error) {
    console.error(error);
  }
};