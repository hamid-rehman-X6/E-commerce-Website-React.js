import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [sorted, setSorted] = useState([]);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        console.log(response.data);
        setProduct(response.data);
        setSorted(response.data);
      } catch (error) {
        console.log("Error Detecting While Fetching Api Data", error);
      }
    };
    fetchData();
  }, []);

  const filteredData = product.filter((items) => {
    return items.title.toLowerCase().includes(search.toLowerCase().trim());
  });

  const handlesorting = () => {
    const sortedData = [...product];
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
    setProduct(sortedData);
    console.log(sortedData);
  };
  const handleReverse = () => {
    const sortedData = [...product];
    sortedData.reverse((a, b) => a.title.localeCompare(b.title));
    setProduct(sortedData);
    console.log(sortedData);
  };

  return (
    <>
      <span className="searching-text">
        Search:{" "}
        <input
          className="input-search"
          placeholder="Search Products..."
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>

      <button className="Sorting-btn" onClick={handlesorting}>
        Sort A to Z
      </button>

      <h2 className="Feature-p">Featured Products</h2>
      <button className="ReverseSort-btn" onClick={handleReverse}>
        Sort Z to A
      </button>

      <div className="P-main-div">
        {filteredData.map((e, index) => (
          <div className="P-child-div" key={index}>
            <div className="P-child1-div">
              <Link to={`/product-details/${e.id}`}>
                <img className="p-img" src={e.image} alt="fake-img" />
              </Link>
            </div>

            <div className="P-child2-div">
              <h2>Price : ${e.price}</h2>
              <h3>Category : {e.category} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
