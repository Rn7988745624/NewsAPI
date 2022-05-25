const searchFrom = document.querySelector('.search');
const inputFrom = document.querySelector('#search-bar');
const container1 = document.getElementById('news-accordion');

searchFrom.addEventListener('submit', provider)

function provider(e) {
    if (inputFrom.value == '') {
        alert("Input field is Empty!!!");
    }
    e.preventDefault()
    const apikey = 'ee419c0ff41641efbeb888316eff7b49'
    let topic = inputFrom.value;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`

    var req = new Request(url);
    let news_data = null
    const getNewsData = async () => {

        await fetch(`${url}`)
            .then(res => res.json())
            .then(res => {
                news_data = res.articles
            })
            .catch(err => {
                console.log(err)
            })
        return news_data
    }

    const fetchNews = async () => {
        const data = await getNewsData()
        const container = document.getElementById(`${container1}`)
        const title = `<a id="news-title" href="${data[0].url}"><p class="news-title">${data[0].title}</p></a>`
        const description = `<p class="news-description">${data[0].description}.<a id="news-description" href="${data[0].url}">   Read more...</a></p>`
        const imgData = `<img src=${data[0].urlToImage} />`
        container.innerHTML += `<div class="card">
                        ${imgData} 
                        ${title} 
                        ${description}
                        </div>`

    }
    fetchNews()
}