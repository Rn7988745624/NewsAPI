const container = document.getElementById('news-accordion');
const apikey = 'e39d13d5741d4e26a9f6b02abec8838d'
let source = 'bbc-news';
let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`
var req = new Request(url);
let newsHTML = ''
fetch(req)
    .then(function (response) {
        return response.json();
    }).then((data) => {
        data.articles.forEach((article) => {
            let news = `<div class="card">
                                <img src="${article.urlToImage}" alt="news">
                                <a id="news-title" href="${article.url}"><p class="news-title">${article.title}</p></a>
                                <p class="news-description">${article.description}.<a id="news-description" href="${article.url}">   Read more...</a></p>
                            </div>`
            newsHTML += news
        });
        container.innerHTML = newsHTML;
    }).catch((error) => {
        console.log(error);
    })
