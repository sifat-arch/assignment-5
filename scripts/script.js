// getId
function getId(id) {
  return document.getElementById(id);
}

// Heart Icons

const heartDivs = document.getElementsByClassName("heart");

for (const heartButton of heartDivs) {
  heartButton.addEventListener("click", function () {
    const heartIcon = Number(getId("inHeart").innerText);
    let heartIconValue = heartIcon + 1;
    getId("inHeart").innerText = heartIconValue;
  });
}

// Call Buttons

const callBtn = document.getElementsByClassName("call-btn");

for (const btn of callBtn) {
  btn.addEventListener("click", function (e) {
    const targetedBtn = e.currentTarget;

    const title =
      targetedBtn.parentNode.parentNode.children[1].children[0].innerText;
    const contactNumber = Number(
      targetedBtn.parentNode.parentNode.children[2].children[0].innerText
    );

    const iconNumber = Number(getId("icon").innerText);
    const newIconNumber = iconNumber - 20;

    if (newIconNumber < 0) {
      alert("You don’t have enough coins. A call requires 20 coins.");
      getId("icon").innerText = 0;
      return;
    }
    alert(`calling ${title} ${contactNumber}....`);

    getId("icon").innerText = newIconNumber;

    const cardContainer = getId("card-container");

    const div = document.createElement("div");

    div.innerHTML = `
       
         <div
            class="bg-[#fafafa] flex justify-between items-center p-4 runded-lg mb-4"
          >
            <div>
              <h1 class="text-[18px] font-semibold">${title}</h1>
              <p class="text-gray-500">${contactNumber}</p>
            </div>

            <p class="text-[18px]"><span>${new Date().toLocaleTimeString()}</span></p>
          </div>
     
    `;

    cardContainer.appendChild(div);
  });
}

// clearing dynamic cards

document.querySelector(".clear-btn").addEventListener("click", function () {
  getId("card-container").innerHTML = "";
});
