import SubTitle from "../../components/SubTitle";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [scentDetail, setScentDetail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [notice, setNotice] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [mainImages, setMainImages] = useState([]);
  const [detailImages, setDetailImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(
          "http://localhost:8080/categories"
        );
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  // const handleMainImagesChange = (e) => {
  //   setMainImages([...mainImages, ...Array.from(e.target.files)]);
  // };

  const handleDetailImagesChange = (e) => {
    setDetailImages([...detailImages, ...Array.from(e.target.files)]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("scentDetail", scentDetail);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("info", info);
    formData.append("notice", notice);
    formData.append("categoryId", categoryId);
    formData.append("mainImage", mainImage);

    // mainImages.forEach((image, index) => {
    //   formData.append("mainImages", image);
    // });

    detailImages.forEach((image, index) => {
      formData.append("detailImages", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:8080/admin/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        alert("상품이 성공적으로 업로드되었습니다.");
      } else {
        alert("업로드 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("업로드 중 오류 발생:", error);
      alert("업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="content">
      <SubTitle title="업로드" />
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>상품명</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </li>
            <li>
              <label>상품 디테일</label>
              <input
                type="text"
                name="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                required
              />
            </li>
            <li>
              <label>상품 향 설명</label>
              <input
                type="text"
                name="scentDetail"
                value={scentDetail}
                onChange={(e) => setScentDetail(e.target.value)}
                required
              />
            </li>
            <li>
              <label>상품 설명</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </li>
            <li>
              <label>상품 가격</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </li>
            <li>
              <label>상품 정보</label>
              <textarea
                name="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                required
              ></textarea>
            </li>
            <li>
              <label>공지</label>
              <textarea
                name="notice"
                value={notice}
                onChange={(e) => setNotice(e.target.value)}
                required
              ></textarea>
            </li>
            <li>
              <label>브랜드</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">브랜드를 선택하세요</option>
                {categories.map((category) => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.category_name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <label>대표 이미지</label>
              <input
                type="file"
                name="mainImage"
                onChange={(e) => setMainImage(e.target.files[0])}
                required
              />
            </li>
            {/* <li>
              <label>메인 이미지들</label>
              <input
                type="file"
                name="mainImages"
                onChange={handleMainImagesChange}
                multiple
                required
              />
              <div>
                {mainImages.map((image, index) => (
                  <p key={index}>{image.name}</p>
                ))}
              </div>
            </li> */}
            <li>
              <label>상세 이미지들</label>
              <input
                type="file"
                name="detailImages"
                onChange={handleDetailImagesChange}
                multiple
                required
              />
              <div>
                {detailImages.map((image, index) => (
                  <p key={index}>{image.name}</p>
                ))}
              </div>
            </li>
            <li>
              <button type="submit">등록완료</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
