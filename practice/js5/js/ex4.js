function addElement(name, color, count) {
    var newDiv = document.createElement(name);

    newDiv.style.width = "100%";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = color;

    var content = document.createTextNode("div" + count);
    newDiv.appendChild(content);

    var currentDiv = document.getElementById("result4");
    currentDiv.insertBefore(newDiv, currentDiv.childNodes[count--]);

}

document.querySelector("#btnEx4").addEventListener("click", function () {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0)
            addElement("div", "red", i);
        else
            addElement("div", "blue", i);
    }
})