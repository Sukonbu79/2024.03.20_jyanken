"use strict";

{
  // imgArea
  const imageArea = document.querySelector("#image-area");
  // imgBoxrelative
  const imageBox = document.querySelector("#image-box");
  // spans
  const erabe = document.querySelector("#erabe");
  const zawa = document.querySelector("#zawa");
  const zawazawa = document.querySelector("#zawazawa");
  const youbun = document.querySelector("#youbun");
  const jibun = document.querySelector("#jibun");
  // results
  const lose = document.querySelector("#lose");
  const win = document.querySelector("#win");
  const even = document.querySelector("#even");
  // select-buttons
  const gu = document.querySelector("#gu");
  const choki = document.querySelector("#choki");
  const pa = document.querySelector("#pa");
  // reset-buttons
  const resetLose = document.querySelector("#reset-lose");
  const resetWin = document.querySelector("#reset-win");
  const resetEven = document.querySelector("#reset-even");
  // counter
  const winCount = document.querySelector("#win-count");
  const loseCount = document.querySelector("#lose-count");
  const evenCount = document.querySelector("#even-count");
  // clear-buttons
  const clear = document.querySelector("#clear");

  // localStorage,getItem
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("winCount") === null) {
      localStorage.setItem("winCount", 0);
    }
    if (localStorage.getItem("loseCount") === null) {
      localStorage.setItem("loseCount", 0);
    }
    if (localStorage.getItem("evenCount") === null) {
      localStorage.setItem("evenCount", 0);
    }
    winCount.textContent = localStorage.getItem("winCount");
    loseCount.textContent = localStorage.getItem("loseCount");
    evenCount.textContent = localStorage.getItem("evenCount");
  });

  // save-counter
  const save = () => {
    localStorage.setItem("winCount", winCount.textContent);
    localStorage.setItem("loseCount", loseCount.textContent);
    localStorage.setItem("evenCount", evenCount.textContent);
  };

  // createRandom
  let random = () => {
    return Math.ceil(Math.random() * 3);
  };

  // zawa-remove.hide
  let zawaRemove = () => {
    erabe.classList.add("hide");
    zawa.classList.remove("hide");
    zawazawa.classList.remove("hide");
    youbun.classList.remove("hide");
    jibun.classList.remove("hide");
  };

  // select-disabled
  let selectDisabled = () => {
    gu.disabled = true;
    choki.disabled = true;
    pa.disabled = true;
    gu.classList.add("button-opacity");
    choki.classList.add("button-opacity");
    pa.classList.add("button-opacity");
  };

  // reset
  let reset = () => {
    // image-reset
    imageBox.classList.add("animation");
    imageBox.classList.remove("gu");
    imageBox.classList.remove("choki");
    imageBox.classList.remove("pa");
    imageBox.classList.remove("skew");
    // button-reset
    gu.disabled = false;
    choki.disabled = false;
    pa.disabled = false;
    gu.classList.remove("button-opacity");
    choki.classList.remove("button-opacity");
    pa.classList.remove("button-opacity");
    // result-reset
    win.classList.add("hide");
    lose.classList.add("hide");
    even.classList.add("hide");
    resetWin.classList.add("hide");
    resetLose.classList.add("hide");
    resetEven.classList.add("hide");
    // zawa-reset
    erabe.classList.remove("hide");
    zawa.classList.add("hide");
    zawazawa.classList.add("hide");
    youbun.classList.add("hide");
    jibun.classList.add("hide");
  };

  // gu
  gu.addEventListener("click", () => {
    let result = random();
    zawaRemove();
    selectDisabled();
    setTimeout(() => {
      imageBox.classList.remove("animation");
      switch (result) {
        case 1:
          imageBox.classList.add("choki");
          win.classList.remove("hide");
          resetWin.classList.remove("hide");
          winCount.textContent = Number(winCount.textContent) + 1;
          save();
          break;
        case 2:
          imageBox.classList.add("pa", "skew");
          lose.classList.remove("hide");
          resetLose.classList.remove("hide");
          loseCount.textContent = Number(loseCount.textContent) + 1;
          save();
          break;
        case 3:
          imageBox.classList.add("gu");
          resetEven.classList.remove("hide");
          even.classList.remove("hide");
          evenCount.textContent = Number(evenCount.textContent) + 1;
          save();
          break;
      }
    }, 8000);
  });

  // choki
  choki.addEventListener("click", () => {
    let result = random();
    zawaRemove();
    selectDisabled();
    setTimeout(() => {
      imageBox.classList.remove("animation");
      switch (result) {
        case 1:
          imageBox.classList.add("pa");
          win.classList.remove("hide");
          resetWin.classList.remove("hide");
          winCount.textContent = Number(winCount.textContent) + 1;
          save();
          break;
        case 2:
          imageBox.classList.add("gu", "skew");
          lose.classList.remove("hide");
          resetLose.classList.remove("hide");
          loseCount.textContent = Number(loseCount.textContent) + 1;
          save();
          break;
        case 3:
          imageBox.classList.add("choki");
          resetEven.classList.remove("hide");
          even.classList.remove("hide");
          evenCount.textContent = Number(evenCount.textContent) + 1;
          save();
          break;
      }
    }, 8000);
  });

  // pa
  pa.addEventListener("click", () => {
    let result = random();
    zawaRemove();
    selectDisabled();
    setTimeout(() => {
      imageBox.classList.remove("animation");
      switch (result) {
        case 1:
          imageBox.classList.add("gu");
          win.classList.remove("hide");
          resetWin.classList.remove("hide");
          winCount.textContent = Number(winCount.textContent) + 1;
          save();
          break;
        case 2:
          imageBox.classList.add("choki", "skew");
          lose.classList.remove("hide");
          resetLose.classList.remove("hide");
          loseCount.textContent = Number(loseCount.textContent) + 1;
          save();
          break;
        case 3:
          imageBox.classList.add("pa");
          resetEven.classList.remove("hide");
          even.classList.remove("hide");
          evenCount.textContent = Number(evenCount.textContent) + 1;
          save();
          break;
      }
    }, 8000);
  });

  // reset
  resetWin.addEventListener("click", () => {
    reset();
  });
  resetLose.addEventListener("click", () => {
    reset();
  });
  resetEven.addEventListener("click", () => {
    reset();
  });

  // clear-counter
  clear.addEventListener("click", () => {
    localStorage.removeItem("winCount");
    localStorage.removeItem("loseCount");
    localStorage.removeItem("evenCount");
    winCount.textContent = "0";
    loseCount.textContent = "0";
    evenCount.textContent = "0";
    reset();
  });
}
