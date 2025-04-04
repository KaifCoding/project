
    const apiResponse = {
        "status": "ok",
        "totalResults": 70,
        "articles": [
            {
                "source": { "id": null, "name": "Thestatesman.com" },
                "author": "SNS Web",
                "title": "‘Olympics in 2021 unrealistic unless COVID-19 vaccine found’",
                "description": "Olympics is not the only sporting tournament to be pushed back...",
                "url": "https://www.thestatesman.com/sports/olympics-in-2021-unrealistic-unless-covid-19-vaccine-found1502879079-1502879079.html",
                "urlToImage": "https://www.thestatesman.com/wp-content/uploads/2020/03/Tokyo2020.jpg",
                "publishedAt": "2020-04-19T14:41:24Z"
            },
            {
                "source": { "id": null, "name": "Hindustantimes.com" },
                "author": "HT Correspondent",
                "title": "Covid-19: Staying at home and want to use AC? Here’s what you need to know",
                "description": "A recent study in China suggested that air conditioning aided the transmission of coronavirus...",
                "url": "https://www.hindustantimes.com/india-news/covid-19-staying-at-home-and-want-to-use-ac-here-s-what-you-need-to-know/story-ZToEjpKIT5DuT99xw4wz5M.html",
                "urlToImage": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/19/Pictures/virus-outbreak-india_5ceba5dc-81f4-11ea-aedf-4d2519fcedc3.jpg",
                "publishedAt": "2020-04-19T04:36:11Z"
            }
        ]
    };

    const newsContainer = document.querySelector(".news-section");

    apiResponse.articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("xl:w-1/4", "md:w-1/2", "p-4");

        articleElement.innerHTML = `
            <div class="bg-gray-100 p-6 rounded-lg news-card">
                <img class="rounded w-full object-cover object-center mb-4" 
                     src="${article.urlToImage}" alt="news image">
                <div class="news-content">
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        ${article.source.name || "Unknown Source"}
                    </h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                        <a href="${article.url}" target="_blank">${article.title}</a>
                    </h2>
                    <p class="leading-relaxed text-base">${article.description}</p>
                </div>
            </div>
        `;

        newsContainer.appendChild(articleElement);
    });

