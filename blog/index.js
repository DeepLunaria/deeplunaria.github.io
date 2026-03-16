import { post_list } from "../data/blog_post_list.js";

(async () => {
  const post_card_list = document.getElementById("post-card-list")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2
  });

  for (let index = 0; index < post_list.length; index++) {
    const post_page = await (await fetch(`${post_list[index]}/index.html`)).text();
    const post_metadata_regex = /<script[^>]*type=["']application\/json["'][^>]*id=["']post-metadata["'][^>]*>\s*([\s\S]*?)\s*<\/script>/i;
    const post_metadata_raw = post_metadata_regex.exec(post_page);
    const post_metadata = JSON.parse(post_metadata_raw[1])

    const blade_card = document.createElement('post-card-blade')
    blade_card.setAttribute('style', `background-color: var(${post_metadata.color});`)

    const title_card = document.createElement('post-card-content-header')
    title_card.innerHTML = post_metadata.name
    observer.observe(title_card);

    const desc_card = document.createElement('post-card-content-desc')
    desc_card.innerHTML = post_metadata.description
    observer.observe(desc_card);

    const time_card = document.createElement('post-card-content-time')
    const created_date = new Date(post_metadata.created_at)
    const formatted_date = `${created_date.getDate()}/${created_date.getMonth()}/${created_date.getFullYear()}`
    const formatted_time = `${created_date.getHours()}:${created_date.getMinutes()}:${created_date.getSeconds()}`
    time_card.innerHTML = `${formatted_date} ${formatted_time}`
    observer.observe(time_card);

    const content_card = document.createElement('post-card-content')
    content_card.appendChild(title_card)
    content_card.appendChild(desc_card)
    content_card.appendChild(time_card)

    const main_card = document.createElement("a")
    main_card.classList.add("post-card")
    main_card.setAttribute('href', post_list[index])
    main_card.appendChild(blade_card)
    main_card.appendChild(content_card)

    post_card_list.appendChild(main_card)
  }
})()