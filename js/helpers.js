

let navActive= ()=>{

    let burger=document.querySelector(".burger")
    let nav= document.querySelector(".links")


    burger.addEventListener("click", ()=>{

        nav.classList.toggle("nav-active")
    })
}