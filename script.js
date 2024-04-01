let redBtn = document.getElementById("red")
let blueBtn = document.getElementById("blue")
let blackBtn = document.getElementById("black")
let imgchange = document.getElementById("imgchange")

redBtn.onclick = function(){
    imgchange.src = "./Imagenes/arkana_red_md.jpg"
}

blueBtn.onclick = function () {
    imgchange.src = "./Imagenes/arkana_blue_md.jpg"
}

blackBtn.onclick = function (){
    imgchange.src = "./Imagenes/arkana_black_md.jpg"
}