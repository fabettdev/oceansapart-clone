"use client";
import "./mobile-menu-toggler.css";

export default function MobileMenuToggler(): React.ReactElement {
  function toggleMobileMenu() {
    const element = document.getElementById("main-header");
    let value = "false";
    if (element) {
      if (element.dataset.show === "false") {
        value = "true";
      }
      element.dataset.show = value;
    }
  }

  return (
    <div id="mobile-menu-toggler" onClick={toggleMobileMenu}>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  );
}
