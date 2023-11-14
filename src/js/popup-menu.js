const refs = {
    catList: document.querySelector('.categoriesList'),
    catListItem: document.querySelector('.categoriesList'),
    

    bestSellersPartName: document.querySelector('.bestSellersPartName'),
    partCardsPage: document.querySelector('.partCardsList'),
    btnSeeMore: document.querySelector('.btnBestSellersSeeMore'),
    cardsBookSmall: document.querySelector('.photo-card'),
//   shoppingList: document.querySelector('.js-shop-list'),


    


    popupMenuConttent: document.querySelector('.popup-menu-conttent'),
    btnAddtoShList: document.querySelector('.btn-addto-card'),
    btnRemoveShList: document.querySelector('.btn-remove-card'),

    bdropPopup: document.querySelector('.backdrop-popup-menu'),
    backdropBlock: document.querySelector('.wrapper'),
    btnCloseInfoBook: document.querySelector('.btn-close-infobook'),
    bookPage: document.querySelector('.box-popup-menu'),
    catPage: document.querySelector('.main-content-page'),
};


// // На стр. BestSellers вікриваемо інфо про книгу або відрацьовуемо клік по кнопці SeeMore
       refs.catPage.addEventListener('click', onBookSwitch);

function onBookSwitch(e) {
      // const currentBook = e.target.closest(".photo-card")
       const currentBook = e.target.closest(".part-cards-list-itemcat")
    const currentCategory = e.target.closest(".btnBestSellersSeeMore")

    if (currentBook) {
        let bookId = currentBook.id;
        bookDetail(bookId);
    } if (currentCategory) {
        let bookCat = currentCategory.getAttribute("category");
        selectedCategory = bookCat;
        booksSelectedCategory(selectedCategory);
        console.log(bookCat);
     }return
};
// //////////////////////////////////////////////////////////////


// // ---->>>>>>   Детальна інформація про книгу  <<<<<<-----//??????????????????????????????
async function bookDetail(bookId) {
    return await fetch(`https://books-backend.p.goit.global/books/${bookId}`)
       .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
           }
          return resp.json();
       })
        .then((resp) => {  
              
//     console.log([resp]);
    creatMarkupBook([resp])
  })
        .catch((err) => console.log(err));
}


function creatMarkupBook(respArr) {
// console.log(respArr);
const infoBuyLinks = respArr[0].buy_links.map(({name, url }) =>
     `
     <div class="boxMarketPlace">
     <a href="${url}" class="infoMarketPlace" target="_blank"><b>${name}</b></a>
     </div>
       `).join("");

    const pageMarkupBook = respArr.map(({
        author,
        book_image,
        description,
        buy_links: [{ name, url }],
        buy_links,
        title,
        list_name,
        _id,
    }
   ) => `
       <div class="photo-card" id="${_id}">
       
             <img class="images-photo" src="${book_image}"
              alt="${title}" loading="lazy" hight="281" />
                <div class="info">
                   <p class="info-title"><b>${title}</b></p>
                   <p class="info-author"><b>${author}</b></p>
                   <p class="info-buy_links"><b>${infoBuyLinks}</b></p>
                   <p class="info-description">${description}</p>

                </div>
       </div>
       `).join("");
// refs.bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);
      refs.popupMenuConttent.innerHTML = pageMarkupBook;
      refs.bookPage.classList.remove('hidden');
      refs.bdropPopup.classList.remove('hidden')
      refs.backdropBlock.classList.add('backdrop-block')
//    refs.bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);
}
// //////////////////////////////////////////////////////////////



// refs.bookPage.addEventListener('click', onClickBookInfo);
// function onClickBookInfo(e) { 
//     refs.btnAddtoCard = e.target.closest(".btn-addto-card")
//      refs.btnRemoveCard = e.target.closest(".btn-remove-card")
//       refs.btnCloseBookPage = e.target.closest(".btn-close-infobook")
//       console.log(btnAddtoCard);
//       console.log(btnRemoveCard);
//       console.log(btnCloseBookPage);
    
// //     const btnAddtoCard = e.target.closest(".btn-addto-card")
// //     const btnRemoveCard = e.target.closest(".btn-remove-card")
// //       const btnCloseBookPage = e.target.closest(".btn-close-infobook")
      

//       console.log(object);
//     if (btnAddtoCard) {
//           console.log('btnAddtoCard');
//       //     btnAddtoCard.classList.add('hidden') 
//       //     btnRemoveCard.classList.remove('hidden') 
//      refs.btnAddtoCard.hidden = true;
//      refs.btnRemoveCard.hidden = false;


          
//       //   refs.btnRemoveShList.classList.remove('hidden');
    
//     } if (btnRemoveCard) {
//       //   btnAddtoCard.classList.remove('hidden')
//       // btnRemoveCard.classList.add('hidden')
//     console.log('btnRemoveCard');
//       } if (btnCloseBookPage) {
//           refs.backdropBlock.classList.remove('backdrop-block')
//           refs.bookPage.classList.add('hidden');
//           refs.bdropPopup.classList.add('hidden')
          
//      }return



// };