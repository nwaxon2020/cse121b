
document.addEventListener("DOMContentLoaded", function() {

  async function products(){
    let response = await fetch("https://fakestoreapi.com/products")
    
    if(response.ok){
      let data = await response.json();

      let items = "";
      data.map((values)=>{
        items +=`<div id="prodts">
        <div class="purchase-item">
          <div class="purchase">
            <div class="purchase-image">
              <img src=${values.image} alt="">
              <h4>Price: #<span class="price">${values.price}</span></h4>
            </div>
            <p id="purchase-detail">
              ${values.description}.
            </p>
          </div>
        
          <div class="button">
            <button class="select-button">Select</button>
            <button class="remove">Remove</button>
          </div>
        </div>
      </div>`;

      document.getElementById("prodts").innerHTML = items;
      })

      let totalAmount = 0;
    let numberOfItemsInCart = 0;
    let isRemoveClickable = false;
    let priceArr = [];
    let totals = document.getElementById("item-total");

    // Pop up the Total-Amount bar when user selects an item
    let totalItems = document.getElementById("inputs");
    totalItems.style.display = "none";

    // Pop up number of items selected
    function popUp(cartItemNumber) {
      document.querySelector("h4").setAttribute("id", "num");
      let numDisplay = document.getElementById("num");

      if (cartItemNumber > 0) {
        numDisplay.textContent = cartItemNumber;
        numDisplay.style.display = "block";
        totalItems.style.display = "flex";
      } 
      else {
        numDisplay.style.display = "none";
        totalItems.style.display = "none";
      }
    }

    // Select button event listener
    let selectButtons = document.querySelectorAll(".select-button");
    selectButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (!isRemoveClickable) {
          numberOfItemsInCart += 1;

          // Callback function of the POPUP
          popUp(numberOfItemsInCart);

          document.querySelector("h4").setAttribute("id", "num");
          document.getElementById("num").textContent = numberOfItemsInCart;
  
          // Access the associated .food-item and .price
          let foodItem = button.closest(".purchase-item");
          let itemPrice = parseFloat(foodItem.querySelector(".price").textContent.replace(/\D/g, ''));
          
          priceArr.push(itemPrice);
  
          totalAmount = priceArr.reduce((a, b) => a + b, 0); // Calculate the total amount
          totals.value = `${totalAmount}`;
        }
      });
    });
  
    // Remove button event listener
    let removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (numberOfItemsInCart > 0) {
          numberOfItemsInCart -= 1;
          popUp(numberOfItemsInCart);
  
          let foodItem = button.closest(".purchase-item");
          let itemPrice = parseFloat(foodItem.querySelector(".price").textContent.replace(/\D/g, ''));
  
          let out = priceArr.indexOf(itemPrice);
          if (out !== -1) {
            priceArr.splice(out, 1);
  
            totalAmount = priceArr.reduce((a, b) => a + b, 0); // Calculate the total amount
            totals.value = `${totalAmount}`;
          }
        }
        document.querySelector("h4").setAttribute("id", "num");
        document.getElementById("num").textContent = numberOfItemsInCart;
      });
    });
      // data.forEach(element =>{
      //   element.title = document.getElementById("food-detail").textContent;
      // })

      //   console.log(data)

    }
    else{
      alert(`${response.status} FILE NOT FOUND!`);
    }
  }

  products();
    
  });
  
