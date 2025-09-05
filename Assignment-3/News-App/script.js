const apiKey = "pub_b3ea650b0f3a495d810744029287cb5a";

async function getNews() {
  const query = document.getElementById("queryInput").value.trim() || "pakistan";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}&language=en`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch news");

    const data = await response.json();
    showNews(data.results);
  } catch (error) {
    document.getElementById("newsContainer").innerHTML = `<p>${error.message}</p>`;
  }
}

function showNews(articles) {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  if (!articles || articles.length === 0) {
    container.innerHTML = "<p>No news found.</p>";
    return;
  }

  articles.forEach((article) => {
    container.innerHTML += `
      <div class="news-card">
        <img src="${article.image_url}" alt="News Image">
        <div class="content">
          <h3>${article.title}</h3>
          <p>${(article.description || "No description available.").slice(0, 250)}...</p>
          <a href="${article.link}" target="_blank">Read more</a>
        </div>
      </div>
    `;
  });
}

getNews();
