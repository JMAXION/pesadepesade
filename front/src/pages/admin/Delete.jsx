import SubTitle from "../../components/SubTitle";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/admin/delete.css";
import { Link } from "react-router-dom";

export default function DeleteProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post("http://localhost:8080/product", {
          type: "all",
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (pid) => {
    try {
      await axios.delete(`http://localhost:8080/admin/delete/${pid}`);
      setProducts(products.filter((product) => product.pid !== pid));
      alert("상품 삭제 완료 !");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("상품 삭제 실패 !");
    }
  };

  console.log("tk", products);
  return (
    <div className="content">
      <SubTitle title="상품삭제" />
      <Link to="/admin" className="admin-back-button">
        돌아가기
      </Link>
      <ul className="delete-ul">
        {products.map((product) => (
          <li key={product.pid} className="delete-li">
            <Link to={`/shop/detail/${product.pid}`}>
              <img
                src={`http://localhost:8080/${product.pimage}`}
                alt={product.pname}
                width="150"
                className="delete-img"
              />
            </Link>
            <p className="delete-p">{product.pname}</p>
            <button
              onClick={() => handleDelete(product.pid)}
              className="delete-button"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
