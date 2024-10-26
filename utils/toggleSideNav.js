"use client";

function toggleSideNav() {
  const body = document.querySelector("body");
  const sideNav = document.querySelector("#sideNav");
  if (sideNav.style.display === "flex") {
    console.log("block");
    sideNav.style.display = "none";
    body.style.overflowY = "auto";
  } else {
    console.log("none");
    sideNav.style.display = "flex";
    body.style.overflowY = "hidden";
  }
}

export default toggleSideNav;
