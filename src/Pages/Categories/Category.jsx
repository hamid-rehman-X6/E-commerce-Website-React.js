import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export function Category() {
  const [category, setCategory] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/categories`
        );
        console.log(response.data);
        setCategory(response.data);

        const productresponse = await axios.get(
          `https://fakestoreapi.com/products/categories/electronics`
        );
        setProducts(productresponse.data);
      } catch (error) {
        // console.log("Error Detecting While Fetching Api Data", error);
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
      <h1 className="Category-text">Best Product Categories:</h1>

      <div className="Category-links">
        {category.map((c, index) => (
          <Link
            to={`/products/${c}`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <h2>{c}</h2>
          </Link>
        ))}
        <Outlet />
      </div>

      <div className="Product-list">
        {/* <h1>Products in {selectedCategory} Category:</h1> */}
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
