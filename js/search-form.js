var modalSearch = document.querySelector(".search-button");
var popup = document.querySelector(".modal");
var form = popup.querySelector(".search-hotel-form");
var arrivalDate = popup.querySelector("#arrival-date");
var departureDate = popup.querySelector("#departure-date");
var adultsAmount = popup.querySelector("#adults-amount");
var childrenAmount = popup.querySelector("#children-amount");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

  try {
    storageAdults = localStorage.getItem("adultsAmount");
    storageChildren = localStorage.getItem("childrenAmount");
  } catch (err) {
    isStorageSupport = false;
  }

modalSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  arrivalDate.focus();
  if (storageAdults || storageChildren) {
    adultsAmount.value = storageAdults;
    childrenAmount.value = storageChildren;
  }
});

form.addEventListener("submit", function(evt) {
  if (!arrivalDate.value || !departureDate.value || adultsAmount.value == 0) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("adultsAmount", adultsAmount.value);
    localStorage.setItem("childrenAmount", childrenAmount.value);
    }
  }
});

