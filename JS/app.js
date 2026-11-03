const projects = [
    "Event Delegation",
    "Build a To-Do List",
    "Save Data Using localStorage",
    "Live Character Counter",
    "Search and Filter a List",
    "Build a Modal Dialog"
];

const searchForm = document.getElementById("search");
const searchInput = document.getElementById("s1");
const resultsSection = document.getElementById("search-results");
const resultsList = document.getElementById("project-results");
const noResults = document.getElementById("no-results");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const matches = query
        ? projects.filter((project) => project.toLowerCase().includes(query))
        : [];

    resultsList.replaceChildren();
    resultsSection.hidden = query.length === 0;
    noResults.hidden = matches.length > 0;

    matches.forEach((project) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `projects.html?q=${encodeURIComponent(project)}`;
        link.textContent = project;
        item.append(link);
        resultsList.append(item);
    });
});