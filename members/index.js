import { members_list } from "../data/members_list.js";

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

const members_card_list = document.getElementById("members-card-list")

for (let index = 0; index < members_list.length; index++) {
  const member_details = members_list[index];

  const blade_card = document.createElement('members-card-blade')
  blade_card.setAttribute('style', `background-color: var(${member_details.color});`)

  const title_card = document.createElement('members-card-content-header')
  title_card.innerHTML = member_details.name
  observer.observe(title_card);

  const desc_card = document.createElement('members-card-content-desc')
  desc_card.innerHTML = member_details.description
  observer.observe(desc_card);

  const content_card = document.createElement('members-card-content')
  content_card.appendChild(title_card)
  content_card.appendChild(desc_card)

  const main_card = document.createElement("a")
  main_card.classList.add("members-card")
  main_card.setAttribute('href', member_details.link)
  main_card.appendChild(blade_card)
  main_card.appendChild(content_card)

  members_card_list.appendChild(main_card)
}