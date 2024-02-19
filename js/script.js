const allCard = document.getElementsByClassName("card");
let count = 0;
let totalPrice = 0;
let array = [];

for (const card of allCard) {
  card.addEventListener("click", function (e) {
    if (count === 4) {
      card.classList.add("disabled:opacity-75 ...");
    }

    card.classList.add("bg-green-400");
    count++;
    const a1 = e.target.innerText;

    setInnertextById("count-update", count);

    array.push(a1);

    console.log(array);

    var seatFare = getInnerTextNumberById("seat-fare");

    const x = document.getElementById("p1");
    const y = document.getElementById("p2");
    const z = document.getElementById("p3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = `${a1}`;
    p2.innerText = `ecomony`;
    p3.innerText = `${seatFare}`;
    x.appendChild(p1);
    y.appendChild(p2);
    z.appendChild(p3);
    console.log();
    // total price
    let price = parseFloat(p3.innerText);
    totalPrice += price;
    setInnertextById("total-price", totalPrice);

    const initialSeat = getInnerTextNumberById("initial-seat");
    let updatedSeat = initialSeat - 1;
    setInnertextById("initial-seat", updatedSeat);
    if (updatedSeat <= 0) {
      alert("No seat Available");
    }
    setInnertextById("update-seat", a1);

    // coupon btn
    const cpBtn = document.getElementById("cp-btn");

    if (count >= 4) {
      cpBtn.disabled = false;
    } else {
      cpBtn.disabled = true;
    }
  });
}

// coupon
const cpBtn = document.getElementById("cp-btn");
const input = document.getElementById("cp-input");
input.addEventListener("keyup", function (e) {
  console.log();
  const value = e.currentTarget.value.split(" ").join("").toLowerCase();
  if (value === 'new15' || value === 'couple20') {
    cpBtn.disabled = false;
  } else {
    cpBtn.disabled = true;
  }
  
});

cpBtn.addEventListener("click", function () {
  const grantTotal = document.getElementById("grand-total");
  const cpId = document.getElementById("cp-id");
  const cpInput = document.getElementById("cp-input").value.split(" ").join("");
  const newInput = cpInput.toLowerCase();

  if (newInput === "new15") {
    cpId.classList.add("hidden");
    let discount = totalPrice * 0.15;
    let m = document.getElementById("disp1");
    let n = document.getElementById("disp2");

    m.innerText = `Discount Price`;
    n.innerText = `${discount}`;

    grantTotal.innerText = `${totalPrice - discount}`;
  } else if (newInput === "couple20") {
    cpId.classList.add("hidden");
    let discount = totalPrice * 0.2;
    grantTotal.innerText = `${totalPrice - discount}`;
  } else {
    alert("please provide valid coupon code");
  }
});

// modal on
const nextBtn = document.getElementById("next-btn");
const phoneNumber = document.getElementById("phone-number");
phoneNumber.addEventListener("keyup", function (e) {
  const value = e.currentTarget.value;
  if (value === "") {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
});

nextBtn.addEventListener("click", function () {
  const main = document.getElementById("main-div");
  const modal = document.getElementById("modal");

  main.classList.add("hidden");
  modal.classList.remove("hidden");
});
