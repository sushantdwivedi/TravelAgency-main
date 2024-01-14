Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down')[i].style.transform = "rotate(-90deg)"
        }
        else{
            document.getElementsByClassName('bi-caret-down')[i].style.transform = "rotate(0deg)"

        }
    })
})

let menu_btn = documet.getElementsByClassName('bi-three-dots')[0];
let menu_bx = document.getElementById('menu_bx');



menu_btn.addEventListener('click', ()=>{
menu_bx.classList.toggle('ul_active');

})