const tabdwa = document.getElementById("tabdwa");
const tabjeden = document.getElementById("tabjeden");
const jeden = document.getElementById("jeden");
const dwa = document.getElementById("dwa");

tabdwa.addEventListener("click", function() {
    this.classList.add("pogrubienie");
    tabjeden.classList.remove("pogrubienie");
    jeden.classList.add("display_none");
    dwa.classList.remove("display_none");
})

tabjeden.addEventListener("click", function() {
    this.classList.add("pogrubienie");
    tabdwa.classList.remove("pogrubienie");
    dwa.classList.add("display_none");
    jeden.classList.remove("display_none");
})

