const projects = [
  {
    name: "ByteBlaze",
    description: "A versatile and powerful music bot for Discord that brings rhythm and melody to your server.",
    color: "--pastel-blue-blade",
    link: "https://github.com/DeepLunaria/ByteBlaze"
  },
  {
    name: "LunaticSea",
    description: "ByteBlaze now in Lua / Luvit.",
    color: "--pastel-orange-blade",
    link: "https://github.com/XDL-LunaticSea"
  },
  {
    name: "MoonWake",
    description: "Redmi Note 12 Pro 5G powersave, stable kernel and stuff.",
    color: "--pastel-purple-blade",
    link: "https://github.com/XDL-MoonWake"
  },
  {
    name: "Rainlink",
    description: "Another lavalink wrapper but focus on stability and rich features.",
    color: "--pastel-green-blade",
    link: "https://github.com/DeepLunaria/Rainlink"
  },
  {
    name: "BShield Experimentation",
    description: "Also known as BSE, this experimentation do research on how BShield works and bypass it.",
    color: "--pastel-red-blade",
    link: "https://github.com/DeepLunaria/BShieldExperimentation"
  },
  {
    name: "LunaStream",
    description: "[HIATUS, BRB] A lavalink alternative focus on stability, decent speed and modulize like FrequenC.",
    color: "--pastel-yellow-blade",
    link: "https://github.com/XDL-LunaStream"
  },
]

const pj_card_list = document.getElementById("pj-card-list")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

for (let index = 0; index < projects.length; index++) {
  const project_details = projects[index];

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