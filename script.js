(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const links = [...document.querySelectorAll(".site-nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  let scheduled = false;
  function updateNavigation() {
    const offset = document.querySelector(".site-header").offsetHeight + 40;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10
    )
      current = sections[sections.length - 1];
    links.forEach((link) => {
      if (link.hash === `#${current.id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  }
  function requestNavigationUpdate() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }
  window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
  window.addEventListener("resize", requestNavigationUpdate);
  updateNavigation();
  const filters = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll(".project")];
  const status = document.getElementById("filter-status");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filters.forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
      let count = 0;
      projects.forEach((project) => {
        const show =
          filter === "all" || project.dataset.tags.split(" ").includes(filter);
        project.hidden = !show;
        if (show) count++;
      });
      status.textContent = `${count} ${count === 1 ? "project" : "projects"} shown`;
    });
  });
  document.querySelector(".filter-bar").hidden = false;
})();
