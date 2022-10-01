import React, { useState } from "react";

export default function RandomGifts() {
  const [gift, setGift] = useState("");
  const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

  const handleOnClickBtn = (e) => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  return (
    <div className="p-4 text-center mt-5">
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button
        className="mt-5"
        type="button"
        onClick={(e) => handleOnClickBtn(e)}
      >
        Lấy thưởng
      </button>
    </div>
  );
}
