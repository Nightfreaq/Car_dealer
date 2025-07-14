function hideNav(){
  const nav =document.querySelector(".navbar-collapse")

  if(nav.classList.contains("show")){
    nav.classList.remove("show")
  }
}

document.addEventListener('click', hideNav)