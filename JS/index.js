document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("s2");
  const items = document.querySelectorAll("#list .project-box");

  if (!search) return;

  const filterProjects = () => {
    const query = search.value.toLowerCase().trim();

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.hidden = !text.includes(query);
    });
  };

  search.value = new URLSearchParams(window.location.search).get("q") || "";
  search.addEventListener("input", filterProjects);
  filterProjects();
});
