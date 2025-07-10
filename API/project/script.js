const colUrl = "http://universities.hipolabs.com/search?country=india";

// DOM Elements
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const resultsSection = document.getElementById("results");
const spinner = document.getElementById("spinner");
const navLinks = document.querySelectorAll(".cf-nav a");
const categoryLinks = document.querySelectorAll(".cf-categories li");

let modal = null;

let allColleges = [];
let filteredColleges = [];
let currentView = "all"; // all, state, city, fav, about
let currentCategory = null;
let favourites = JSON.parse(localStorage.getItem("cf-favourites") || "[]");

// Fetch all colleges on load
window.addEventListener("DOMContentLoaded", async () => {
  spinner.hidden = false;
  try {
    allColleges = await searchClg();
    filteredColleges = allColleges;
    renderResults(filteredColleges);
  } catch (e) {
    showMessage("Failed to load colleges. Please try again later.");
  } finally {
    spinner.hidden = true;
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.parentElement.classList.remove("active"));
    link.parentElement.classList.add("active");
    currentCategory = null;
    categoryLinks.forEach((cat) => cat.classList.remove("active"));
    switch (link.id) {
      case "nav-all":
        currentView = "all";
        filteredColleges = allColleges;
        renderResults(filteredColleges);
        break;
      case "nav-state":
        currentView = "state";
        showMessage("Type a state name in the search bar.");
        break;
      case "nav-city":
        currentView = "city";
        showMessage("Type a city name in the search bar.");
        break;
      case "nav-fav":
        currentView = "fav";
        renderResults(getFavourites());
        break;
      case "nav-about":
        currentView = "about";
        showAbout();
        break;
    }
  });
});

// Category filtering
categoryLinks.forEach((cat) => {
  cat.addEventListener("click", () => {
    categoryLinks.forEach((c) => c.classList.remove("active"));
    cat.classList.add("active");
    currentCategory = cat.textContent.trim();
    filterByCategory(currentCategory);
  });
});

function filterByCategory(category) {
  if (!category || category === "Others") {
    renderResults(allColleges);
    return;
  }
  // For demo: filter by keywords in name (real API may differ)
  const keywords = {
    Engineering: ["engineering", "tech", "institute of technology"],
    Medical: ["medical", "medicine", "health"],
    Management: ["management", "business", "mba"],
    Arts: ["arts", "fine arts", "literature"],
    Science: ["science", "research"],
    Law: ["law", "legal"],
  };
  const keys = keywords[category] || [];
  const filtered = allColleges.filter((item) =>
    keys.some((k) => item.name.toLowerCase().includes(k))
  );
  renderResults(filtered);
}

// Search
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim().toLowerCase();
  if (!query) {
    renderResults(currentView === "fav" ? getFavourites() : allColleges);
    return;
  }
  spinner.hidden = false;
  setTimeout(() => {
    let arr = (currentView === "fav" ? getFavourites() : allColleges).filter(
      (item) => {
        return (
          (item["state-province"] &&
            item["state-province"].toLowerCase().includes(query)) ||
          (item.name && item.name.toLowerCase().includes(query)) ||
          (item["country"] && item["country"].toLowerCase().includes(query))
        );
      }
    );
    renderResults(arr);
    spinner.hidden = true;
  }, 300);
});

// Render results as cards
function renderResults(arr) {
  resultsSection.innerHTML = "";
  if (!arr.length) {
    showMessage("No colleges found.");
    return;
  }
  arr.forEach((item) => {
    const card = document.createElement("div");
    card.className = "college-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", item.name);
    card.addEventListener("click", () => showModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") showModal(item);
    });

    const name = document.createElement("div");
    name.className = "college-name";
    name.innerText = item.name;
    card.appendChild(name);

    if (item["state-province"] || item.country) {
      const loc = document.createElement("div");
      loc.className = "college-location";
      loc.innerText = `${item["state-province"] || ""}${
        item["state-province"] && item.country ? ", " : ""
      }${item.country || ""}`;
      card.appendChild(loc);
    }

    if (item.domains && item.domains.length) {
      const desc = document.createElement("div");
      desc.className = "college-desc";
      desc.innerText = `Domain: ${item.domains[0]}`;
      card.appendChild(desc);
    }

    // Favourite button
    const favBtn = document.createElement("button");
    favBtn.className = "cf-fav-btn";
    favBtn.innerHTML = isFavourite(item) ? "❤️" : "🤍";
    favBtn.title = isFavourite(item)
      ? "Remove from favourites"
      : "Add to favourites";
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavourite(item);
      renderResults(currentView === "fav" ? getFavourites() : arr);
    });
    card.appendChild(favBtn);

    resultsSection.appendChild(card);
  });
}

function showMessage(msg) {
  resultsSection.innerHTML = `<div class="no-results">${msg}</div>`;
}

function showAbout() {
  resultsSection.innerHTML = `<div class="college-card"><b>About CollegeFinder</b><br><br>This app helps you search and explore Indian colleges by city, state, or category. You can also save your favourite colleges for quick access.<br><br><b>Features:</b><ul><li>Modern, responsive UI</li><li>Search and filter by city, state, or category</li><li>Save favourites (localStorage)</li><li>Accessible and mobile-friendly</li></ul></div>`;
}

// Modal for college details
function showModal(item) {
  if (modal) modal.remove();
  modal = document.createElement("div");
  modal.className = "cf-modal-bg";
  modal.innerHTML = `
    <div class="cf-modal">
      <button class="cf-modal-close" aria-label="Close">&times;</button>
      <h2>${item.name}</h2>
      <div class="college-location">${item["state-province"] || ""}${
    item["state-province"] && item.country ? ", " : ""
  }${item.country || ""}</div>
      <div class="college-desc">Domain: ${
        item.domains ? item.domains[0] : "N/A"
      }</div>
      <div style="margin: 1em 0;">
        <a href="${
          item.web_pages[0] || "#"
        }" target="_blank" rel="noopener" class="cf-modal-link">Visit Website</a>
      </div>
      <button class="cf-fav-btn-modal">${
        isFavourite(item) ? "❤️ Remove from Favourites" : "🤍 Add to Favourites"
      }</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.querySelector(".cf-modal-close").onclick = () => modal.remove();
  document.querySelector(".cf-fav-btn-modal").onclick = () => {
    toggleFavourite(item);
    renderResults(currentView === "fav" ? getFavourites() : filteredColleges);
    modal.remove();
  };
  modal.tabIndex = 0;
  modal.focus();
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.remove();
  });
}

// Favourites
function isFavourite(item) {
  return favourites.some(
    (f) =>
      f.name === item.name && f["state-province"] === item["state-province"]
  );
}
function toggleFavourite(item) {
  if (isFavourite(item)) {
    favourites = favourites.filter(
      (f) =>
        !(
          f.name === item.name && f["state-province"] === item["state-province"]
        )
    );
  } else {
    favourites.push(item);
  }
  localStorage.setItem("cf-favourites", JSON.stringify(favourites));
}
function getFavourites() {
  return favourites;
}

// API fetch
async function searchClg() {
  const res = await axios.get(colUrl);
  return res.data;
}
