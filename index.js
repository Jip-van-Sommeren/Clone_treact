function openMenu (){
    document.body.classList.add("menu--open")
}
function closeMenu (){
    document.body.classList.remove("menu--open")

}




function test(elem) {
    // get all 'a' elements
    
    // loop through all 'a' elements

    
    var a = document.querySelectorAll('.test__container--1.active');
    
    // console.log(e.target)
    // elem.style.outline =  "solid blue 1px"
    // loop through all 'a' elements
    // for (i = 0; i < a.length; i++) {
    //     // Remove the class 'active' if it exists
    //     a[i].classList.remove('active')
    // }
    if (a.length != 1) {
        document.querySelector(".test__container--1").classList.add('active');
        document.querySelector(".test__container--2").classList.add("active2");
    }

    else {
        document.querySelector(".test__container--1").classList.remove('active');
        document.querySelector(".test__container--2").classList.remove("active2");

    }
}


// function scrollRating2 (){
//     document.body.classList.remove("menu--open")
// }

// const boxes = document.querySelectorAll('test__scroll--button');

// for (const box of boxes) {
//   box.addEventListener('click', function handleClick() {
//     box.classList.add('test');
//   });
// }ñ
