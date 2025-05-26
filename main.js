// change nav Style on Scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icons
    // answer.nextElementSibling.classList.toggle('active')
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className == "ri-add-fill") {
      icon.className = "ri-subtract-fill";
    } else {
      icon.className = "ri-add-fill";
    }
  });
});

//  show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-button");
const closeBtn = document.querySelector("#close-menu-button");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav)





// /* ================== Signup popup modal ============ */




const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container_main_form");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});



function showModal(){
  document.querySelector('.container_main_form').classList.add('show_modal_click')
}


// window.onload = function () {
//   var hidemodal = document.getElementById('hide_modal');
//   document.onclick = function(div1){
//     if (div1.target.id !== 'hide_modal'){
//       hidemodal.style.display = 'none';
//     }
//   };
// };



// google Auth Setup
function signIn(){
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

  let form = document.createElement('form')

  form.setAttribute('method','GET')
  form.setAttribute('action',oauth2Endpoint)

  // add parameter
  let params = {
    "client_id" : "908990059657-fptjlei1qqah3k9v37sc29pi2aknktgm.apps.googleusercontent.com",
    "redirect_uri" : "http://127.0.0.1:5500/index.html",
    "response_type" : "token",
    "scope" : "https://www.googleapis.com/auth/userinfo.profile" ,
    "include_granted":'true',
    'state':'pass-through-value'
  }  

  for (var p in params) {
    let input = document.createElement('input')
    input.setAttribute('type','hidden')
    input.setAttribute('name',p)
    input.setAttribute('value',params[p])
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()

}