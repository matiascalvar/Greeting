function sayHello () {
    var name = document.getElementById("name").value;
    var message = "Un gusto conocerte " + name + "!"
    document
    .getElementById("content")
    .innerHTML = message

    if (name === "Marcia") {
        var title = 
        document
        .querySelector("#title")
        .textContent;
        title += "... Hey termina mi castillo del lago!";
        document
        .querySelector("#content")
        .textContent = title;
    }
}
