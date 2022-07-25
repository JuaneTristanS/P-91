function NPAU() {
    window.location = "game_page.html";

    p1 = document.getElementById("p1username").value;
    p2 = document.getElementById("p2username").value;

    localStorage.setItem("p1username" , p1);
    localStorage.setItem("p2username" , p2);

}

