
// Grabbing The News Container 
let newsAccordion = document.getElementById("newsAccordion");

// News Api Parameters
let news_source = "the-times-of-india"
let apikey = "01850710786c414eaccaeeac5a9607af"

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/everything?sources=${news_source}&apikey=${apikey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>
                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more...</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}


xhr.send();

