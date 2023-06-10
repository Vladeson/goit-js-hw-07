import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

galleryItems.forEach(({preview, original, description})=> {
    gallery.insertAdjacentHTML("beforeend", 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
})

gallery.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
    return;
    }
    
    basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`).show()
})
