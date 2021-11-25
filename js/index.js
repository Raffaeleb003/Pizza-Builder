const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}
function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((Onepepper) => {
    if (state.greenPeppers) {
      Onepepper.style.visibility = 'visible';
    } else {
      Onepepper.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
}
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crumb) => {
    if (state.glutenFreeCrust) {
      crumb.style.visibility = 'visible';
    } else {
      crumb.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  const btnPepperonni = document.querySelector('.btn.btn-pepperoni')
  const btnMushrooms = document.querySelector('.btn.btn-mushrooms')
  const btnPeppers = document.querySelector(".btn.btn-green-peppers")


  if(state.pepperoni) {
    btnPepperonni.classList.add('active')
  } else {
    btnPepperonni.classList.remove('active')
  }


  if(state.mushrooms) {
    btnMushrooms.classList.add('active')
  } else {
    btnMushrooms.classList.remove('active')
  }

  if(state.greenPeppers) {
    btnPeppers.classList.add('active')
  } else {
    btnPeppers.classList.remove('active')
  }
}

function renderPrice() {const totalPrice = document.querySelector("#priceTag")
  let initalPrice = 10
  if(state.pepperoni) {
    initalPrice += 1
  }
  if(state.mushrooms) {
    initalPrice += 1
  }
  if (state.greenPeppers) {
    initalPrice += 1
  }
  if (state.whiteSauce) {
    initalPrice += 3
  }
  if (state.glutenFreeCrust) {
    initalPrice += 5
  }
  totalPrice.textContent = initalPrice

}

renderEverything();
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});