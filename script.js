const categories = document.querySelectorAll('.categories');
const itemsContainer = document.querySelector('.items-container');

let str = "";

let images = [
    {
      category:"mobile",
     img:"images/iphone13.webp",
     title:"Iphone 13"
    },
    {
        category:"mobile",
        img:"images/mi12.webp",
        title:"Redmi 12"
    },
    {
        category:"mobile",
        img:"images/realme11pro.webp",
        title:"Realme 11 Pro"
    },
    {
        category:"mobile",
        img:"images/s22.webp",
        title:"Samsung S22 5G"
    },
    {
        category:"food",
        img:"images/f1.jpeg",
        title:"Burger"

    },
    {    category:"food",
        img:"images/pizza.webp",
        title:"Pizza"
    },
]

function showLists(images){
    str = "";
    images.forEach(image=>{
        str += `
                <div class="item-card">
                <h4 id="title">MI 12</h4>
                <img src=${image.img} alt="">
                <div class="categoryname">${image.category}</div>
                </div>
               `;
         itemsContainer.innerHTML = str;
    });
}
showLists(images)



categories.forEach(category=>{
    category.addEventListener('click',()=>{
       let targeted = category.id; 
       let newImages = images.filter(image=>image.category === targeted);
        showLists(newImages);
      
    })
})



