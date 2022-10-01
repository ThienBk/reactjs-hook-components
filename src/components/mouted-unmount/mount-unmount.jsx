import React, { useState, useEffect } from "react";

export default function Mount_unmount() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    //clean up
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };
  return (
    <div>
      <input type="file" onChange={(e) => handlePreviewAvatar(e)} />
      {avatar && <img src={avatar.preview} alt="" />}
    </div>
  );
}
