// Theme selector
const theme_key = "theme-mode"; // "System", "Light", "Dark"
const themeSelect = document.getElementById("themeSelect");
const media = window.matchMedia("(prefers-color-scheme: dark)");

const getSavedMode = () => {
  return localStorage.getItem(theme_key) || "System";
};

const setSavedMode = (mode) => {
  localStorage.setItem(theme_key, mode);
};

const applyMode = (mode) => {
  document.body.classList.remove("dark", "light");

  if (mode === "dark") {
    document.body.classList.add("dark");
  } else if (mode === "light") {
    document.body.classList.add("light");
  }
};

const syncUI = (mode) => {
  themeSelect.value = mode;
};

// Initialize
let mode = getSavedMode();
applyMode(mode);
syncUI(mode);

// Handle select change
themeSelect.addEventListener("change", (e) => {
  mode = e.target.value;
  setSavedMode(mode);
  applyMode(mode);
});

// React to system changes if the mode === "System"
media.addEventListener("change", () => {
  if (getSavedMode() === "System") {
    applyMode("System");
  }
});

// Gallery code
const photos = [
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
    alt: "Mountain at sunrise",
    caption: "Alpine Sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300",
    alt: "Ocean wave",
    caption: "Blue Wave",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300",
    alt: "Forest path",
    caption: "Forest Path",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
    alt: "Laptop on desk",
    caption: "Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
    alt: "City skyline",
    caption: "City Lights",
  },
];

// Gallery code
const thumbsEL = document.querySelector("#thumbs");
const mainImage = document.querySelector("#mainImage");
const CaptionEL = document.querySelector("#Caption");
const topBtn = document.querySelector("#top-btn");
const lightbox = document.querySelector("#lightBox");
const lightboxImage = document.querySelector("#lightBoxImage");
const lightboxCaption = document.querySelector("#lightBoxCaption");
const closeLightbox = document.querySelector("#closeLightBox");

// render thumbnails
const renderThumbs = (items) => {
  const frag = document.createDocumentFragment();
  items.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${p.thumb}" alt="${p.alt}" loading="lazy" decoding="async" data-index="${i}" tabindex="0"/>`;
    frag.appendChild(li);
  });
  thumbsEL.appendChild(frag);
};

renderThumbs(photos);
