const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navlinks')
  const navLinks = document.querySelectorAll('.navlinks li')

  burger.addEventListener('click', () => {
    // Toggle Navigaton
    nav.classList.toggle('nav-active')

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    })
    //burger animation
    burger.classList.toggle('toggle')
  })
}

navSlide()
