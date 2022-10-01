import React, { useState, memo } from "react";


 function Memo() {
  console.log('re-render');
  return (
    <div>Memo</div>
  )
}
export default memo(Memo)
