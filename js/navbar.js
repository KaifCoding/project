const pathname = window.location.pathname.replace(/\/$/, ""); // Normalize path (remove trailing slash)
const navLinks = document.querySelectorAll(".nav-link");

const navList = [
  { name: "Home", link: "/", otherLink: "/index.html" },
  { name: "Sources", link: "/sources", otherLink: "/sources/index.html" },
  { name: "Categories", link: "/categories", otherLink: "/categories/index.html"},
  { name: "About", link: "/about", otherLink: "/about/index.html" },
  { name: "Contact", link: "/contact", otherLink: "/contact/index.html" },
];
// Find the active page
const activePage = navList.find(
  (item) =>
    item.link.replace(/\/$/, "") === pathname ||
    item.otherLink.replace(/\/$/, "") === pathname
);
if (activePage) {
  navLinks.forEach((link) => {
    const linkPath = "/" + link.href.split("/")[3].replace(/\/$/, "");
    if (linkPath === activePage.link || linkPath === activePage.otherLink) {
      link.classList.add("active-link");
    }
  });
}
