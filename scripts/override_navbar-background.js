const navbar = document.getElementsByClassName("bg-primary")[0]
navbar.classList.remove("bg-primary")
document.getElementsByClassName("navbar-dark")[0].classList.remove("navbar-dark")
navbar.classList.add("tms-navbar")

const collections = Array.from(document.querySelectorAll('.tms-navbar .container .dropdown-toggle'))
const varselDropdown = collections.find(el => el.textContent.localeCompare('Varsler') === 1);

if (document.location.pathname === "/") {
    document.querySelector(".tms-navbar .container > a:first-child").classList.add("active-nav")
} else {
    document.querySelectorAll(".tms-navbar .container li a").forEach((navelement) => {
        const href = navelement.getAttribute("href")
        if (href === "./") {
            navelement.classList.add("active-nav")
            if (document.location.href.includes("varsler")) {
                varselDropdown.classList.add("active-nav")
            }
        }
    })
}