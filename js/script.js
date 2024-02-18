const allCard = document.getElementsByClassName("card");
let count = 0;
let totalPrice = 0;

for (const card of allCard) {
  // console.log(card);

  card.addEventListener("click", function (e) {
      if (count===4) {
          card.classList.add("disabled:opacity-75 ...");
    }
    card.classList.add("bg-green-400");
    count++;

    setInnertextById("count-update", count);
    // console.log();
    const a1 = e.target.innerText;
    var seatFare = getInnerTextNumberById("seat-fare");
    // const totalPrice = getInnerTextNumberById("total-price");
    // console.log(seatFare);

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
    // console.log(totalPrice);
    setInnertextById("total-price", totalPrice);

    const initialSeat = getInnerTextNumberById("initial-seat");
    let updatedSeat = initialSeat - 1;
    setInnertextById("initial-seat", updatedSeat);
    if (updatedSeat <= 0) {
      alert("No seat Available");
    }
    setInnertextById("update-seat", a1);
    // count

    // setInnertextById("update-seat", a1);
    // coupon
  });
}

// coupon
// const coupon = getInnerTextById('coupon1').toLocaleLowerCase();
const cpBtn = document.getElementById("cp-btn");

cpBtn.addEventListener("click", function () {
  const grantTotal = document.getElementById("grand-total");
  const cpId = document.getElementById("cp-id");
  console.log(cpId);
  const cpInput = document.getElementById("cp-input").value.split(" ").join("");
  const newInput = cpInput.toLowerCase();
  // console.log(newInput);
  if (newInput === "new15") {
    cpId.classList.add("hidden");
    let discount = totalPrice * 0.15;
    grantTotal.innerText = `${totalPrice - discount}`;
    // console.log(discount);
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
// console.log(nextBtn);
nextBtn.addEventListener('click',function() {
    const main = document.getElementById("main-div");
    const modal = document.getElementById("modal");
    console.log(main);
    console.log(modal);
    main.classList.add('hidden');
    modal.classList.remove('hidden');

})
