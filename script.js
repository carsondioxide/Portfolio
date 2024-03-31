document.getElementById("secret").onclick = (e) => {
    document.body.style.height = "2400px";
    let button = document.getElementById("secret-button");
    button.style.display = "block";
    button.style.position = "absolute";
    button.style.top = "2300px";
    button.style.left =  "45%";
}

document.getElementById("secret-button").onclick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}