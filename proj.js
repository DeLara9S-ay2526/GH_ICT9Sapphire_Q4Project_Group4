function changePic() {
    const picFile = document.querySelector("pfp");
    const profilePic = document.querySelector("image");
    picFile.onchange = function () {
        profilePic.src = URL.createObjectURL(picFile.files[0])
    }
}
const username = "Username";
const password = "asimplepassword";
function logAccount() {
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    if (username === userName && password === passWord) {
        window.location.href = "dashboard.html";
}
