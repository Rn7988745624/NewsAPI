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
    let url = `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${apikey}`

    var req = new Request(url);
    let newsHTML = ''
    fetch(req)
        .then(function (response) {
            return response.json();
        }).then((data) => {
            data.articles.forEach(article => {
                let news = `<div class="card">
                                <img src="${article.urlToImage}" alt="news">
                                <a id="news-title" href="${article.url}"><p class="news-title">${article.title}</p></a>
                                <p class="news-description">${article.description}.<a id="news-description" href="${article.url}">   Read more...</a></p>
                            </div>`        
                newsHTML += news
            });
            container1.innerHTML = newsHTML;
        }).catch((error) => {
            console.log("error: ");
            console.log(error);
        })
    }

