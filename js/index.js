const sklep_smyk = document.getElementById("sklep_smyk");

sklep_smyk.addEventListener("click",function(){

    let cubeArr = [document.getElementById("gora"),document.getElementById("przod"),document.getElementById("bok")];
    let cubeArr2 = [...sklep_smyk.children];
    let cubeArr3 = Array.from(sklep_smyk.children);

    cubeArr3.forEach( item => {
        item.style = '';

        if (item.classList.contains("active")){
            item.classList.add("notActive");
            item.classList.remove("active");
        } else {
            item.classList.toggle("active");
        }
    } )
})