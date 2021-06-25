function sayHello () {
    var name = document.getElementById("name").value;
    var message = "Termina mi dibujo " + name + "!"
    document
    .getElementById("content")
    .textContent = message
}