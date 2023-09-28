/* Toggle Function to add or remove the open class in targeted element */

function toggleMenu() {
    const menu = document.querySelector(".menu-links"); /* target element */
    const icon = document.querySelector(".hamburger-icon"); /* target element */
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}