var inputUser = document.getElementById("userName");
console.log(inputUser);
var inputPass = document.getElementById("password");
console.log(password);

var valUser = inputUser.value;
console.log(valUser);
var valPass = inputPass.value;
console.log(valPass);

var txtContent = document.getElementById("txtContent");
var btnClick = document.getElementById("btnClick");
console.log(txtContent, btnClick);

//Events click of JS - way 1
btnClick.onclick = function () {
    txtContent.innerHTML = "Content has been changed!";
    txtContent.style.backgroundColor = "grey";
    txtContent.style.color = "white";
}

var txtHidden = document.getElementById("txtHidden");
var btnShow = document.getElementById("btnShow");
var btnHidden = document.getElementById("btnHidden");
//Add Events click for button - way 2
btnHidden.addEventListener("click", function () {
    txtHidden.style.display = "none";
});
btnShow.addEventListener("click", function () {
    txtHidden.style.display = "block";
});

/**
 * So sánh onclick và addEventListener
 * onclick: Xóa mất sự kiện click sẵn của thẻ 
 * addEventListener: Chỉ thêm event mới mà không ảnh hưởng đến event có sẵn
*/

/**
 * Ways to add style for element
 */

document.getElementById("btnAdd").onclick = function () {
    var heading = document.getElementById("heading2");
    // way1: just add style more, not delete style available
    // heading.style.backgroundColor = "pink";
    // heading.style.color = "white";

    //way2: add class 
    // heading.classList.add("styleHeading");
    heading.classList.toggle("styleHeading");

    //way3: delete style available and add new css
    //heading.style.cssText = "color: white; background-color: red; border: 3px solid yellow;";
}
/**
 * Demo Tun on-off Light
 */
var imgLight = document.getElementById("imgLight");
var btnOn = document.getElementById("btnOn");
var btnOff = document.getElementById("btnOff");

//Add click for btnOn
btnOn.addEventListener("click", function(){
    imgLight.src = "./img/pic_bulbon.gif"
})
btnOff.addEventListener("click", function(){
    imgLight.src = "./img/pic_bulboff.gif"
})