const pizza = document.getElementById("pizza");
const tumble = document.getElementById("tumble");

function jump()
{
    if(pizza.classList != "jump")
    {
        pizza.classList.add("jump");

        setTimeout(function(){
            pizza.classList.remove("jump");
        },300);
    }
}

let alive = setInterval(function(){
    let pizzatop = parseInt(window.getComputedStyle(pizza).getPropertyValue("top"));
    let tumbleleft = parseInt(window.getComputedStyle(tumble).getPropertyValue("left"));

    if(tumbleleft<50 && tumbleleft >= 0 && pizzatop >= 50)
    {
        alert("Game Over");
    }
},10);

document.addEventListener("keydown", function(event){
    jump();
});