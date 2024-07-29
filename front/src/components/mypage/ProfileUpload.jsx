import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../../util/localStorage";

export default function ProfilePictureUpload() {
  const userId = getUser().userId;

  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const url = `http://localhost:8080/mypage/profileupload?userId=${userId}`;
        const result = await axios.get(url);
        if (result.data && result.data.profileImageUrl) {
          setProfileImageUrl(result.data.profileImageUrl);
        } else {
          console.error("Profile image URL is missing in the response");
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage();
  }, [userId]);

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file); // 서버에서 처리할 필드명
      formData.append("userId", userId);

      try {
        const response = await axios.post(
          "http://localhost:8080/mypage/upload-profile-image",
          formData
        );
        console.log("Image upload response:", response.data);
        if (response.data.profileImageUrl) {
          setProfileImageUrl(response.data.profileImageUrl);
          setSelectedImage(null);
        } else {
          console.error("Profile image URL is missing in the response");
        }
      } catch (error) {
        console.error("Error uploading profile image:", error);
      }
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
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <input
        type="file"
        accept="image"
        onChange={(e) => {
          onChangeImage(e); // 미리보기
          handleImageChange(e); // 서버에 업로드
        }}
      />
    </div>
  );
}
