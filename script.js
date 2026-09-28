(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.hash));
  let pending = false;

  function updateNavigation() {
    const anchorOffset = parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const offset = Math.max(header.offsetHeight + 24, anchorOffset + 2);
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) current = section;
    });
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 3
    ) {
      current = sections[sections.length - 1];
    }
    links.forEach((link) => {
      if (link.hash === `#${current.id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    pending = false;
  }

  function scheduleUpdate() {
    if (!pending) {
      pending = true;
      requestAnimationFrame(updateNavigation);
    }
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  updateNavigation();
})();
