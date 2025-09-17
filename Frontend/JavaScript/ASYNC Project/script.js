const searchBtn = document.getElementById("searchBtn");
let userInput = document.getElementById("usernameInput");
let skeleton = document.getElementById("skeleton");
let userUI = document.getElementById("userUI");

function decorateUI(details, repos) {
  let repoCards = repos
    .slice(0, 6)
    .map(
      (repo) => `
      <div class="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
        <h3 class="text-xl font-semibold text-gray-800">${repo.name}</h3>
        <p class="text-gray-600 mt-1">${repo.description || "No description"}</p>
        <div class="flex gap-3 mt-3">
          <span class="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">${
            repo.language || "N/A"
          }</span>
          <span class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">⭐ ${
            repo.stargazers_count
          }</span>
        </div>
      </div>
    `
    )
    .join("");

  let data = `
    <div
      class="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
    >
      <!-- Profile Image -->
      <img
        src="${details.avatar_url}"
        alt="User Avatar"
        class="w-32 h-32 rounded-full border-4 border-blue-500"
      />
      <div class="flex-1">
        <h2 class="text-2xl font-semibold text-gray-800">${details.name || "No Name"}</h2>
        <p class="text-gray-500">@${details.login}</p>
        <p class="mt-2 text-gray-600">${details.bio || "No bio available"}</p>
        <div class="flex gap-6 mt-4">
          <div class="text-center">
            <p class="text-lg font-bold text-gray-800">${details.public_repos}</p>
            <p class="text-gray-500 text-sm">Repositories</p>
          </div>
          <div class="text-center">
            <p class="text-lg font-bold text-gray-800">${details.followers}</p>
            <p class="text-gray-500 text-sm">Followers</p>
          </div>
          <div class="text-center">
            <p class="text-lg font-bold text-gray-800">${details.following}</p>
            <p class="text-gray-500 text-sm">Following</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Repo List -->
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      ${repoCards}
    </div>
  `;

  userUI.innerHTML = data;
}





function getProfileData(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then((raw) => {
    if (!raw.ok) throw new Error("User not found");
    return raw.json();
  });
}

function getRepo(username) {
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(
    (data) => {
      if (!data.ok) throw new Error("Failed to fetch repos....");
      return data.json();
    }
  );
}




let flg = false;

searchBtn.addEventListener("click", function () {
  let username = userInput.value.trim();

  
  if (!flg){
    if (username.length > 0) {

        skeleton.classList.add("hidden");
        userUI.classList.remove("hidden")

        searchBtn.innerHTML = "Remove"
        searchBtn.style.backgroundColor = "red"

       Promise.all([getProfileData(username), getRepo(username)])
      .then(([profile, repos]) => {
        decorateUI(profile, repos);
        flg = true;
      })
      .catch((err) => alert(err.message));
      
    } else {
        alert("Please enter valid username");
    }
  }else {
    userUI.classList.add("hidden");
    skeleton.classList.remove("hidden");
    userInput.value = "";
    searchBtn.innerHTML = "Search"
    searchBtn.style.backgroundColor = "blue"
    flg = false;
  }
  
});
