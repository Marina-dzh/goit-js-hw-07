import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    list: document.querySelector('.gallery'),
};

let instance = '';

const markup = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('')
refs.list.insertAdjacentHTML('beforeend', markup)

refs.list.addEventListener('click', openOri)

function openOri(e) {
  e.preventDefault()
   instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`, {
onShow: instance => { document.addEventListener('keydown', modalClose) },
onClose: instance => { document.removeEventListener('keydown', modalClose) }})
instance.show()
  
}

function modalClose(e) {
  if (e.code === 'Escape') {
    instance.close()
  }

}



