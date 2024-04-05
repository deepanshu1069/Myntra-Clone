let bagItems;
onLoad(); 

function onLoad(){
  let bagItemStr= localStorage.getItem('bagItems');
  bagItems= bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemsOnHomePage();
  displaybagIcon();
}

function displayItemsOnHomePage(){
  let itemContainerElement= document.querySelector('.items-container');
  if(!itemContainerElement){
    return;
  }
  let innerHTML='';
  items.forEach(item => {
    innerHTML +=  ` <div class="item-container">
    <img class="item-image" src="${item.image}" alt="ItemImage">
    <div class="rating">
    ${item.rating.stars}⭐|${item.rating.count}
    </div>
    <div class="company-name">
      ${item.company}
    </div>
    <div class="item-name">
     ${item.item_name}
    </div>
    <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="Add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  })
  itemContainerElement.innerHTML=innerHTML;
}

function addToBag(itemId){
  bagItems.push(itemId);
  
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displaybagIcon();

} 
function displaybagIcon(){
  let bagItemCountElement= document.querySelector('.bag_count');
  if(bagItems.length > 0){
    bagItemCountElement.innerHTML=bagItems.length;
    bagItemCountElement.style.visibility='visible';

  }
  else{
    bagItemCountElement.style.visibility='hidden';
  }

}


