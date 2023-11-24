import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Category() {
  const [category, setCategory] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/categories`
        );
        console.log(response.data);
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = async (category) => {
    // setSelectedCategory(category);
    const productsResponse = await axios.get(
      `https://fakestoreapi.com/products/categories/${category}`
    );
    setProducts(productsResponse.data);
  };
  return (
    <>
      <h1 style={{ color: " #f8f8f8" }}>Categories</h1>
      <h1 style={{ color: " #f8f8f8" }}>Categories</h1>
      <div className="Category-links">
        {category.map((c, index) => (
          <Link
            to={`/products/${c}`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="Category-item">
              {/* You can replace the placeholder URL with the actual URL for your category images */}
              {index === 0 && (
                <img
                  src="https://img.freepik.com/premium-photo/abstract-background-electronic-circuit-board-technological-orange-red-generative-ai_807028-57.jpg"
                  alt={c}
                />
              )}

              {index === 1 && (
                <img
                  src="https://cdnb.artstation.com/p/assets/images/images/024/495/977/large/ankur-aggarwal-jewel1.jpg?1582619594"
                  alt={c}
                />
              )}
              {index === 2 && (
                <img
                  src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80068452/80068452.jpg"
                  alt={c}
                />
              )}
              {index === 3 && (
                <img
                  src="https://as1.ftcdn.net/v2/jpg/01/44/91/76/1000_F_144917660_FpuNP28xAO1CKNvHoujugLx2fr3SwyN2.jpg"
                  alt={c}
                />
              )}

              <h2 style={{ fontSize: "20px" }}>
                {c}
                <button>Shop Now</button>
              </h2>
            </div>
          </Link>
        ))}
        <Outlet />
      </div>
    </>
  );
}
