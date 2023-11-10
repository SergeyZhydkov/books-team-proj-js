import axios from "axios";
import Notiflix from 'notiflix';
const BASEURL = 'https://books-backend.p.goit.global';
const CATSELECT = '/books/category?category=';

const mainContentPage = document.querySelector('.main-content-page');
let selectedCategory = '';
const catListItem = document.querySelector('.categoriesList');

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 function temp() {
   getSelectedCategory('Audio Nonfiction');
};temp();
 function  temp2() {
  const headmainh = `<h1 class="head-main-h">Best Sellers
  <span class="head-main-h head-main-hdecor">
  Books
  </span>
   </h1>`;
  mainContentPage.insertAdjacentHTML('afterbegin', headmainh)
};
setTimeout(temp2, 600)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


catListItem.addEventListener('click', onCategoriesSwitch);
function onCategoriesSwitch(e) {
  // selectedCategory = e.target.textContent;
  // console.log(catListItem.firstChild);
if (e.target.textContent === selectedCategory) {
    return;
  } if (e.currentTarget === e.target) {
    return;
  } if (catListItem.firstChild === e.target) {
    
    getSelectedCategory('Audio Nonfiction')
    // mainContentPage.innerHTML = 'Audio Nonfiction';
  }else {
  selectedCategory = e.target.textContent
  getSelectedCategory(selectedCategory);
}
// console.log(e.currentTarget);
//   console.log(e.target);
    
    
};

async function getSelectedCategory(selectedCategory) {
 
 try {
   const booksSelectedCategory =
     await axios.get(`${BASEURL}${CATSELECT}${selectedCategory}`);
     onSelectedCategory(booksSelectedCategory.data)
     return booksSelectedCategory.data
  }
  catch (error) {
     console.error(error);
     Notiflix.Notify.failure('Error');
  }
};

function onSelectedCategory(respArr) {
   
let headMaidCss;

function headMaker (category){
// const category = "Combined Print and E-Book Nonfiction";
const fixLast = category.length - category.lastIndexOf(' ');
const lastWorld = category.substring(category.length - fixLast);
let lengthFirstPart = category.length - lastWorld.length;
const firstPartLenght = category - lengthFirstPart;
const firstPart = category.slice(0, lengthFirstPart);

// console.log(firstPart);
// console.log(lastWorld);
 return headMaidCss = `<h1 class="head-main-h">${firstPart}
  <span class="head-main-h head-main-hdecor">
  ${lastWorld}
  </span>
   </h1>`};
headMaker (selectedCategory)
   console.log(headMaidCss);
  
   const markupSelectedCategory = respArr.map(({
        author,
        book_image,
        description,
        amazon_product_url,
        title,
        list_name,
        _id,
    }
   ) => `
       <li class="photo-card" id="${_id}">
             <img class="images-prev" src="${book_image}"
              alt="${title}" width ='180' loading="lazy" />
                <div class="info">
                   <p class="info-item-title"><b>${title}</b></p>
                   <p class="info-item-author"><b>${author}</b></p>
             </div>
       </li>
       `).join("");
     const contentPageCat = `${headMaidCss}
<ul class="main-content-list">
    ${markupSelectedCategory}
</ul>`;
   mainContentPage.innerHTML = contentPageCat;

}

