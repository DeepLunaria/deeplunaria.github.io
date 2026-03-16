import { projects_list } from "./data/projects_list.js";

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

// INFO: Rainbow blade easter egg
const rootCss = document.querySelector(':root')
const rand = Math.random()

if (Math.round(rand * 10) / 10 == 0.1) {
  rootCss.style.setProperty('--pastel-orange-blade', '#F2CB9D')
  rootCss.style.setProperty('--pastel-purple-blade', '#D5B2D8')
  rootCss.style.setProperty('--pastel-green-blade', '#BDF0C1')
  rootCss.style.setProperty('--pastel-red-blade', '#F2A4A4')
  rootCss.style.setProperty('--pastel-yellow-blade', '#F0F2AD')
  rootCss.style.setProperty('--pastel-blue-blade', '#94EBF2')
}

// INFO: Add scroll animation to some element
const au_header_list = document.getElementsByTagName('au-card-header')

for (let index = 0; index < au_header_list.length; index++) {
  const el = au_header_list[index];
  observer.observe(el);
}

const au_card_content = document.getElementsByTagName('au-card-content')

for (let index = 0; index < au_card_content.length; index++) {
  const el = au_card_content[index];
  observer.observe(el);
}

// INFO: Render project card list
const pj_card_list = document.getElementById("pj-card-list")

for (let index = 0; index < 3; index++) {
  const project_details = projects_list[index];

  const blade_card = document.createElement('pj-card-blade')
  blade_card.setAttribute('style', `background-color: var(${project_details.color});`)

  const title_card = document.createElement('pj-card-content-header')
  title_card.innerHTML = project_details.name
  observer.observe(title_card);

  const desc_card = document.createElement('pj-card-content-desc')
  desc_card.innerHTML = project_details.description
  observer.observe(desc_card);

  const content_card = document.createElement('pj-card-content')
  content_card.appendChild(title_card)
  content_card.appendChild(desc_card)

  const main_card = document.createElement("a")
  main_card.classList.add("pj-card")
  main_card.setAttribute('href', project_details.link)
  main_card.setAttribute('target', '_blank')
  main_card.appendChild(blade_card)
  main_card.appendChild(content_card)

  pj_card_list.appendChild(main_card)
}