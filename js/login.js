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
    const response = await axios.post('../php/login.php',{
        id: id,
        pw: password
    });
    if(response.data){
      location.replace("../main.html");
    } else {
      showAlarm(failedAlert);
    }
  } catch (error) {
      console.log(error);
  }
};
