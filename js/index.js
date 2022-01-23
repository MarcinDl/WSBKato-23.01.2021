document.querySelector("button").addEventListener("click",function(){
    console.log(document.getElementById("name").value.length);

    if (document.getElementById("name").value.length == 4){
        document.getElementById("icon").classList.add("animate")
    }
})