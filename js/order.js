// 세션테스트
const test = async () => {
    try {
        const response = await axios.get("../php/test.php");
        console.log(response.data);
    } catch(error) {
        console.log(error);
    }
}