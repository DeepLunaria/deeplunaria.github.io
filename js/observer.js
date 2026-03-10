const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

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