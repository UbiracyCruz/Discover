function lightSwitch(){
    const html = document.documentElement.classList;
    html.toggle("light");

    const img = document.querySelector("#profile img");
    
    if (html.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png");
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }
}