const pathname2 = window.location.pathname
if (pathname2 === '/categories/index.html' || pathname2 ==='/categories/') {
    const categories = [
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
      ];
      
      const container = document.getElementById("categories-container");
      container.innerHTML = categories
        .map(
          (category) =>
            `<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              ${category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
        
            <a href="/categories/${category}.html" class="text-primary inline-flex items-center">
              Go to ${category.charAt(0).toUpperCase() + category.slice(1)} Page
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>`
        ).join("");
}

// sources.js
else if (pathname2 === '/sources/index.html' || pathname2 ==='/sources/') {
    const sources = [
        { title: "BBC News", slug: "bbc-news"},
        { title: "CNN", slug: "cnn"},
        { title: "Fox News", slug: "fox-news" },
        { title: "Google News", slug: "google-news"},
      ];
      
      const sourcesContainer = document.getElementById("sources-container");
      console.log(sourcesContainer);
      
      sourcesContainer.innerHTML = sources.map(
          (source) =>
            `<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              ${source.title}
            </h2>
        
            <a href="/sources/${source.slug}.html" class="text-primary inline-flex items-center">
              Go to ${source.title} Page
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>`
        )
        .join("");
}
