fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore");
    }
  })

  .then((bookData) => {
    console.log(bookData);

    const rowBooks = document.getElementById("rowBooks");

    bookData.forEach((book) => {
      const cont = document.createElement("div");
      cont.classList.add("col-3", "mb-4");

      const card = document.createElement("div");
      card.classList.add("card");
      card.style = "min-height: 100%";

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = book.img;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerText = book.title;

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerText = "Prezzo: " + book.price + " " + "$";

      const btnCont = document.createElement("div");
      btnCont.classList.add("d-flex", "justify-content-center");

      const btnDel = document.createElement("button");
      btnDel.classList.add("btn", "btn-danger", "px-4");
      btnDel.innerText = "Scarta";
      btnDel.addEventListener("click", () => {
        card.remove();
      });

      const btnAdd = document.createElement("button");
      btnAdd.classList.add("btn", "btn-success", "px-5");
      btnAdd.innerText = "Compra Ora";
      btnAdd.addEventListener("click", () => {
        addCart(book);
      });

      card.appendChild(img);
      cardBody.appendChild(title);
      cardBody.appendChild(price);
      card.appendChild(cardBody);
      btnCont.appendChild(btnDel);
      btnCont.appendChild(btnAdd);
      card.appendChild(btnCont);
      cont.appendChild(card);
      rowBooks.appendChild(cont);

      function addCart(book) {
        cart.push(book);
        renderCart();
      }

      function renderCart() {
        const cartCol = document.getElementById("cart-col");
        cartCol.innerHTML = "";
        const h2 = document.createElement("h2");
        h2.innerText = "CART";
        cartCol.appendChild(h2);

        cart.forEach((book) => {
          const cartUl = document.createElement("ul");
          const cartElement = document.createElement("li");

          cartElement.innerText = book.title;

          const deletBook = document.createElement("button");
          deletBook.classList.add("btn", "btn-danger", "px-4");
          deletBook.innerText = "Scarta";
          deletBook.addEventListener("click", () => {
            cartElement.remove();
          });

          //   .appendChild(deletBook);
          cartCol.appendChild(cartElement);
        });
      }
    });
  })

  .catch((error) => console.log(error));
const cart = [];
