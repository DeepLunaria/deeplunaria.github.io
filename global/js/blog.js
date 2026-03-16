const post_metadata = JSON.parse(document.getElementById('post-metadata').innerHTML)
const time_tag = document.getElementsByTagName('post-time')[0]
const created_date = new Date(post_metadata.created_at)
const formatted_date = `${created_date.getDate()}/${created_date.getMonth()}/${created_date.getFullYear()}`
const formatted_time = `${created_date.getHours()}:${created_date.getMinutes()}:${created_date.getSeconds()}`
time_tag.innerHTML = `${formatted_date} ${formatted_time}`