function sayHello () {
    var name = document.getElementById("name").value;
    var message = "Termina mi dibujo " + name + "!"
    document
    .getElementById("content")
    .innerHTML = message

    if (name === "Matias") {
        var title = 
        document
        .querySelector("#title")
        .textContent;
        title += "... Hey vos no sos Matias!";
        document
        .querySelector("#content")
        .textContent = title;
    }
}