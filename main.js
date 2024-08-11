let card = document.querySelectorAll(".reviewCard");
let icon = document.getElementById("icon");
let surgery = document.querySelectorAll(".card");


let count = 0;

card.forEach(function(cards,index){
    cards.style.left=`${index * 100}%`
})

function myFun(){
    card.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(() => {
    count++;
    if(card.length == count){
        count = 0;
    }
    myFun()
}, 2000);

icon.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("mode")
    if(icon.className=="fa-solid fa-moon"){
        icon.className="fa-solid fa-sun";
    }else{
        icon.className="fa-solid fa-moon";
    }
})

surgery.forEach((currentCard)=>{
    currentCard.addEventListener("click",function(){
        console.log(currentCard);
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML = `
            <i id="cross" class="fa-solid fa-xmark"></i>
            <img style="width: 50px;" src="${currentCard.firstElementChild.src}" alt="">
            <h1>${currentCard.lastElementChild.innerHTML}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel error, voluptatum natus voluptas libero cum quas consequatur odit et qui harum animi!</p>`

            document.querySelector("body").appendChild(div);
            document.getElementById("cross").addEventListener("click",()=>{
                // div.style.display = "none"
                div.remove()
            })
    })
})