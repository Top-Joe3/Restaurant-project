import { homeModule } from './home.js';
import { menuModule } from './menu.js';
import { contactModule } from './contact.js';
import "./styles.css"

window.addEventListener("DOMContentLoaded", homeModule)

const home = document.querySelector(".home");
home.addEventListener("click", homeModule);

const menu = document.querySelector(".menu");
menu.addEventListener("click", menuModule);

const about = document.querySelector(".about");
about.addEventListener("click", contactModule)