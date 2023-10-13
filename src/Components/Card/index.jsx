import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Card() {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("error occurs", error);
      }
    };
    fetchData();
  }, []);

  const filteredData = product.filter((items) => {
    return items.title.toLowerCase().includes(search.toLowerCase().trim());
  });

  return (
    <div>
      Search bar:{" "}
      <input
        placeholder="Enter here..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredData.map((products, index) => (
        <div key={index}>
          <h2>Title : {products.title}</h2>
          <h2>Price : {products.price}</h2>
          <h3>Category : {products.category}</h3>
          <img className="img-1" src={products.image} alt="fake-img" />
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
