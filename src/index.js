import "./style/style.scss";

const api = "https://6718988a7fc4c5ff8f4a1f17.mockapi.io/person";

const person__all = document.querySelector(".person__all");

fetch(api)
  .then((data) => data.json())
  .then((value) => get__data(value))
  .catch((error) => console.log(error.message));

function get__data(data) {
  data.forEach((element) => {
    person__all.innerHTML += `

  <div class="person">
    <p>${element.ID}</p>
    <button>${element.car__Nomer}</button>
    <span class="person_name">
    <img src="person1.svg" alt="" />
     <p>${element.Name}</p>
    </span>
    <div class="pending">
    <div class="pending__color"></div>
     <p>${element.status}</p>
     </div>

    <p>$ ${element.earn}</p>

    <div class="btn">
     <button
     data-bs-toggle="modal"
    data-bs-target="#exampleModal"
     class="person__btn">
    Details
    </button>
    </div>
    </div>
    `;
  });
}

// Modal

function addEventToButtons() {
  const person__btns = document.querySelectorAll(".person__btn");

  person__btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const personId = e.target.getAttribute("data-id");
      console.log("Bosilgan tugma ID:", personId);
      showPersonData(personId);
    });
  });
}

// fetch(api)
//   .then((data) => data.json())
//   .then((value) => modal(value))
//   .catch((error) => console.log(error.message));

// function modal(data) {}
