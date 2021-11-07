const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
const imgEl = document.createElement('img');
const liEl = document.createElement('li');

const createElements = element => {
  const imgEl = document.createElement('img');
  const liEl = document.createElement('li');
  imgEl.textContent = element;
  liEl.textContent = element;
  liEl.appendChild(imgEl);
  return imgEl, liEl;
};

const elementListRef = images.flatMap(image =>
  createElements(image.url, image.alt),
);


galleryRef.append(...elementListRef);