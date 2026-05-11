function changePic() {
    const picFile = document.querySelector("pfp");
    const profilePic = document.querySelector("image");
    picFile.onchange = function () {
        profilePic.src = URL.createObjectURL(picFile.files[0])
    }
}
const user = "Username";
const password = "1234567890password";
function logAccount() {
    let userName = document.getElementById("user").value;
    let passWord = document.getElementById("pass").value;
    if (user === userName && password === passWord) {
        window.location.href = "notebook.html";
    } 
}
