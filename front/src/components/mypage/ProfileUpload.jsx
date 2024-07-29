import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function ProfilePictureUpload() {
  const userId = getUser().userId;

  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8080/mypage/profileupload?userId=${userId}`;
    axios
      .get(url)
      .then((result) => {
        console.log("API response:", result.data);
        if (result.data && result.data.profileImageUrl) {
          setProfileImageUrl(result.data.profileImageUrl);
        } else {
          console.error("Profile image URL is missing in the response");
        }
      })
      .catch((error) => {
        console.error("Error fetching profile image:", error);
      });
  }, [userId]);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);
      formData.append("userId", userId);

      axios
        .post("http://localhost:8080/mypage/upload-profile-image", formData)
        .then((res) => {
          console.log("Image upload response:", res.data);
          if (res.data.profileImageUrl) {
            setProfileImageUrl(res.data.profileImageUrl);
            setSelectedImage(null); // Reset selected image
          } else {
            console.error("Profile image URL is missing in the response");
          }
        })
        .catch((error) => {
          console.error("Error uploading profile image:", error);
        });
    }
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <img
        src={
          selectedImage
            ? selectedImage
            : profileImageUrl
            ? `http://localhost:8080${profileImageUrl}`
            : "./images/profile.png"
        }
        alt="프로필"
        style={{ width: "100px" }}
      />
      <input type="file" accept="image/*" onChange={onChangeImage} />
    </div>
  );
}
