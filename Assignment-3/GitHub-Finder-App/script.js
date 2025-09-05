const result = document.getElementById("result");
async function getUser() {
  const username = document.getElementById("usernameInput").value.trim();

  if (!username) {
    alert("Please enter a username");
    return;
  }

  const url = `https://api.github.com/users/${username}`;
  const reposUrl = `https://api.github.com/users/${username}/repos?sort=created&per_page=5`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("User not found");
    const userData = await response.json();
    showProfile(userData);
    
    const reposResponse = await fetch(reposUrl);
    const reposData = await reposResponse.json();
    showRepos(reposData);
    
    result.classList.remove("hidden")
  } catch (error) {
    profileDiv.innerHTML = `<p>${error.message}</p>`;
  }
}

function showProfile(user) {
  const profileDiv = document.getElementById("profile");

  profileDiv.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.login}">
    <h2>${user.name || "No Name"}</h2>
    <p>@${user.login}</p>
    <p>${user.bio || "No bio available"}</p>
    <p>Followers: ${user.followers} | Following: ${user.following}</p>
    <p>Repos: ${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank">View Profile</a>
  `;
}

function showRepos(repos) {
  const reposDiv = document.getElementById("repos");

  let output = "<h3>Latest Repositories</h3>";
  if (repos.length === 0) {
    output += "<p>No repositories found.</p>";
  } else {
    repos.forEach(repo => {
      output += `
        <div class="repo-item">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <div class="repo-stats">
            ⭐ Stars: ${repo.stargazers_count} | 🍴 Forks: ${repo.forks_count}
          </div>
        </div>
      `;
    });
  }

  reposDiv.innerHTML = output;
}
