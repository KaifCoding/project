const baseUrl = "https://saurav.tech/NewsAPI/";
const category = window.location.pathname.split("/")[2].split(".")[0];
const url = `${baseUrl}top-headlines/category/${category}/in.json`;
const newsContainer = document.getElementById(`${category}-news-section`);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles;
    articles.forEach((article) => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("p-4", "md:w-1/3");

      articleElement.innerHTML = `
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${
                              article.urlToImage
                            }" alt="${article.title}">
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Source: ${
                                  article.source.name || "Unknown"
                                }</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${
                                  article.title
                                }</h1>
                                <p class="leading-relaxed mb-3">${
                                  article.description
                                }</p>
                                <p class="text-gray-500 mb-3"><strong>Author:</strong> ${
                                  article.author || "N/A"
                                }</p>
                                <p class="text-gray-500 mb-3"><strong>Published on:</strong> ${new Date(
                                  article.publishedAt
                                ).toLocaleDateString()}</p>
                                <div class="flex items-center flex-wrap">
                                    <a href="${
                                      article.url
                                    }" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;

      newsContainer.appendChild(articleElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });






