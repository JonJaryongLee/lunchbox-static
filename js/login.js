const clicktest = async () => {
  try {
    const response = await axios.get("../test_json/user.json");
    const users = response.data.users;
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};
