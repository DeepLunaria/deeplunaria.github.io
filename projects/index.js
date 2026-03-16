import { projects_list } from "../data/projects_list.js";

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

const pj_card_list = document.getElementById("pj-card-list")

for (let index = 0; index < projects_list.length; index++) {
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