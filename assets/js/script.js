// Script to handle search bar interaction
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input[type='text']");
    const searchResults = document.querySelector(".search-results");

    // Sample search data (In a real scenario, this would be dynamic or fetched)
    const seriesData = [
        { title: "Series A", author: "Author A", artist: "Artist A", cover: "cover-a.jpg" },
        { title: "Series B", author: "Author B", artist: "Artist B", cover: "cover-b.jpg" },
        { title: "Series C", author: "Author C", artist: "Artist C", cover: "cover-c.jpg" },
    ];

    // Display search results
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results
        searchResults.style.display = "none";

        if (query) {
            const filteredResults = seriesData.filter(series => series.title.toLowerCase().includes(query));
            filteredResults.forEach(series => {
                const resultItem = document.createElement("div");
                resultItem.innerHTML = `
                    <img src="${series.cover}" alt="${series.title}" width="40" height="40" style="margin-right: 10px;">
                    <strong>${series.title}</strong><br>
                    <small>Author: ${series.author}, Artist: ${series.artist}</small>
                `;
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = filteredResults.length > 0 ? "block" : "none";
        }
    });

    // Hide search results when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-bar")) {
            searchResults.style.display = "none";
        }
    });
});
