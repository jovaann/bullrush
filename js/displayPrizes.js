"use strict";

const displayPrizes = async function () {
  try {
    const res = await fetch(`https://bullrush.com/wp-content/themes/playerx-child/data/data.json`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const prizes = data.data;
    const prizeContainer = document.querySelector(
      ".slider-prize .swiper-wrapper"
    );

    prizes.forEach((prize) => {
      const {
        rank,
        username,
        flag,
        return: returnPct,
        pct: pctBackFromLeader,
        prize: prizeAmount,
      } = prize;

      const prizeMarkup =
        typeof prizeAmount === "number"
          ? `<span class="prize__info--num">$${prizeAmount.toFixed(2)}</span>`
          : `<span class="prize__info--txt">${prizeAmount}</span>`;

      const markup = `
        <div class="swiper-slide">
          <div class="prize">
            <span class="prize__rank">${rank}</span>
            <img class="prize__flag" src="${flag}" alt="Flag" />
            <span class="prize__username">${username}</span>

            <div class="prize__info">
              <span>Return Pct.</span>
              <span class="prize__info--return">${returnPct.toFixed(2)}%</span>
            </div>
            <div class="prize__info prize__info--pbf-leader">
              <span>Pct. Back From Leader</span>
              <span>${pctBackFromLeader.toFixed(2)}%</span>
            </div>
            <div class="prize__info">
              <span>Prize</span>
              ${prizeMarkup}
            </div>
          </div>
        </div>
      `;

      prizeContainer.insertAdjacentHTML("beforeend", markup);
    });

    const swiper = new Swiper(".slider-prize", {
      direction: "vertical",
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 0,
      },
      speed: 2000,
      allowTouchMove: false,
    });
  } catch (err) {
    console.error(`${err.message}`);
  }
};

displayPrizes();