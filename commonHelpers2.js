import"./assets/su-cdcfd17c.js";const B="/books-team-proj-js/assets/icons-35358588.svg#trash",L=document.querySelector(".shopping-list-empty"),P=document.querySelector(".js-shop-list"),S="user-shopping-list",t=JSON.parse(localStorage.getItem(S))||[];console.log("shopArr",t);console.log(t.length);const f=document.querySelector(".pagination");f.classList.add("visually-hidden");const r=document.querySelector(".prev");r.disabled=!0;const u=document.querySelector(".next"),c=document.querySelector(".double-prev");c.disabled=!0;const o=document.querySelector(".double-next"),y=document.querySelector(".buttons-numbers"),d=4;let s=1;function I(l,a,e){const i=(a-1)*e,g=i+e;return l.slice(i,g).map(({_id:m,list_name:k,amazon_product_url:q,author:E,book_image:M,book_uri:$,contributor:x,description:j,publisher:R,title:A})=>`<li data-id="${m}" class="shopping-list-card js-trash">
            <div class="shopping-list-card-flex"><img class="list-card-img" src="${M}" alt="${E}">
              <div>
                <div class="shop-trash-flex">
                  <div>
                    <h3 class="list-card-title">${A}</h3>
                    <p class="list-card-subtitle">${k}</p>
                  </div>
                  <div class="shop-trash-bg js-test">
                    <svg class="shop-trash">
                      <use href="${B}"></use>
                    </svg>
                  </div>
                 </div>
                <div class="shop-text-flex">
                 <p class="list-card-text">${j}</p>
                  <div class="list-card-flex">
                    <p class="list-card-contributor">${x}</p>
                    <div class="list-card-icon-flex">
                      <a class="list-card-amazon-url" href="${q}"></a>
                      <a class="list-card-book-url" href="${$}"></a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </li>`).join("")}function n(l,a,e){const i=I(l,a,e);P.innerHTML=i,l.length===0?(f.classList.add("visually-hidden"),L.classList.remove("visually-hidden")):(f.classList.remove("visually-hidden"),L.classList.add("visually-hidden")),l.length<=e?f.classList.add("visually-hidden"):f.classList.remove("visually-hidden"),Math.ceil(l.length/e)<=2?(c.classList.add("visually-hidden"),o.classList.add("visually-hidden")):(c.classList.remove("visually-hidden"),o.classList.remove("visually-hidden"))}function b(l){const a=Math.ceil(l.length/d);y.innerHTML="";for(let e=1;e<=a;e+=1){const i=document.createElement("button");i.classList.add("bth-num"),i.textContent=e,y.appendChild(i),e===s&&i.classList.add("bth-active"),i.addEventListener("click",()=>{s=e,n(l,s,d),v(),h(),s===1?(r.disabled=!0,c.disabled=!0):(r.disabled=!1,c.disabled=!1),s===a?(u.disabled=!0,o.disabled=!0):(u.disabled=!1,o.disabled=!1)})}v(),h()}function h(){document.querySelectorAll(".bth-num").forEach((a,e)=>{e+1===s?(a.classList.add("bth-active"),a.disabled=!0):(a.classList.remove("bth-active"),a.disabled=!1)})}function v(){const l=document.querySelectorAll(".bth-num"),a=Math.ceil(t.length/d);l.forEach((e,i)=>{s===1?i+1<=3?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden"):s===a?i+1>a-3?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden"):i+1===s||i+2===s||i===s?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden")})}n(t,s,d);b(t);r.addEventListener("click",()=>{s>1&&(s-=1,n(t,s,d),v(),h()),s===1&&(r.disabled=!0,c.disabled=!0),u.disabled=!1,o.disabled=!1});u.addEventListener("click",()=>{const l=Math.ceil(t.length/d);s<l&&(s+=1,n(t,s,d),v(),h()),s===l&&(u.disabled=!0,o.disabled=!0),r.disabled=!1,c.disabled=!1});c.addEventListener("click",()=>{s=1,n(t,s,d),v(),h(),r.disabled=!0,u.disabled=!1,c.disabled=!0,o.disabled=!1});o.addEventListener("click",()=>{s=Math.ceil(t.length/d),n(t,s,d),v(),h(),u.disabled=!0,o.disabled=!0,r.disabled=!1,c.disabled=!1});function N(){s=Math.ceil(t.length/d),n(t,s,d),b(t)}P.addEventListener("click",C);function C(l){if(l.target.classList.value==="shop-trash-bg js-test"||l.target.classList.value==="shop-trash"){const e=l.target.closest(".js-trash").dataset.id;if(confirm("Remove book?")){const g=t.findIndex(({_id:m})=>m===e);t.splice(g,1),localStorage.setItem(S,JSON.stringify(t)),n(t,s,d),b(t);const p=Math.ceil(t.length/d);s>p?N():(n(t,s,d),b(t))}}}
//# sourceMappingURL=commonHelpers2.js.map
