const btnRate = document.querySelectorAll(".rate-btn");
const getRateCont = document.querySelector(".get-rate")
const thxMessage = document.querySelector(".thx-message")
const thxTittle = document.querySelector(".u-selected")
let ratePoint = 0;
for (const rateBtn of btnRate) {
    rateBtn.addEventListener("click", function () {
        ratePoint = rateBtn.innerText;
        console.log(ratePoint);
        btnRate.forEach(btn => btn.classList.remove('btn-selected'));
        rateBtn.classList.add("btn-selected");
    });
};

const btnSubmit = document.querySelector(".submit-btn");
btnSubmit.addEventListener("click" , function () {
    getRateCont.classList.add("div-disable");
    thxTittle.innerText = `You selecten ${ratePoint} of 5`
    thxMessage.classList.remove("div-disable")
});