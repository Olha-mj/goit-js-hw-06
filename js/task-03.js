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

const imgList = document.querySelector(".gallery");

imgList.style.display = "flex";
imgList.style.flexDirection = "column";
imgList.style.gap = "30px";


const markup = images.map((image) => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`).join("");
imgList.insertAdjacentHTML("beforeend", markup);

const imageItems = imgList.querySelectorAll("img");

imageItems.forEach((img) => {
  img.style.width = "250px";
});


