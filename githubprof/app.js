const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchbox = document.querySelector("#search");

const getUser = async (username) => {
  const response = await fetch(APIURL + username);
  const data = await response.json();
  const card = `
  <div id="container">
          <div id="card">
            <img class="avatar" src="${data.avatar_url}" alt="user-photo" />
          </div>

          <div id="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul id="info">
              <li>###<strong>${data.followers} Followers</strong></li>
              <li>###<strong>${data.following} Following</strong></li>
              <li>###<strong>${data.public_repos} repos</strong></li>
            </ul>

            <div id="repos">
              
            </div>
          </div>
        </div>
`;
  main.innerHTML = card;
  getRepos(username);
};

const getRepos = async (username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(APIURL + username + "/repos");
  const data = await response.json();
  data.forEach((item) => {
    const elem = document.createElement("a");
    elem.classList.add("repos");
    elem.href = item.html_url;
    elem.innerText = item.name;
    elem.target = "_blank";
    repos.appendChild(elem);
  });
};

// getUser("Aryanjoshi99999");

{
  /* <a class="repo" href="#" targer="blank">Repo 1</a>
              <a class="repo" href="#" targer="blank">Repo 2</a>
              <a class="repo" href="#" targer="blank">Repo 3 </a> */
}

const formSubmit = () => {
  if (searchbox.value != null) {
    getUser(searchbox.value);
    searchbox.value = "";
  }
  return false; // for not refreshing the page on form submitting
};

searchbox.addEventListener("focusout", function () {
  formSubmit();
});
