const container = document.getElementById("container");
const gallerypage = document.getElementById("gallerypage");

const babout = document.getElementById("aboutme");
const bgallery = document.getElementById("gallery");

const profile = document.getElementById("pic");

container.style.display = "flex";
gallerypage.style.display = "none";
profile.style.display = "block";
gallerypage.style.opacity = "0";

babout.addEventListener("click", async () => {
    gallerypage.style.opacity = "0";
    await delay (300);
    container.style.display = "flex";
    container.style.opacity = "1" 
    gallerypage.style.display = "none";  
    // profile.style.display = "block";
    profile.style.top = "0px";
})

bgallery.addEventListener("click", async () => {
    container.style.opacity = "0";
    await delay (300);
    container.style.display = "none";
    gallerypage.style.display = "grid";
    gallerypage.style.opacity = "1";
    // profile.style.display = "none";
    profile.style.top = "-30px";
})

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
