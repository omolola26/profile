import React from "react";
import image from "../../images/image.jpg";
const ProfilePhoto = () => {
  return (
    <div>
      <img src={image} className="profile" alt="images" />
    </div>
  );
};

export default ProfilePhoto;
