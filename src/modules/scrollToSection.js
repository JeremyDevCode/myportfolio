export default function scrollToSection() {
  const hash = window.location.hash;
  const section = document.querySelector(hash);
  section.scrollIntoView();
}
