function changePic() {
    const picFile = document.querySelector("pfp");
    const profilePic = document.querySelector("image");
    picFile.onchange = function () {
        profilePic.src = URL.createObjectURL(picFile.files[0])
    }
}
