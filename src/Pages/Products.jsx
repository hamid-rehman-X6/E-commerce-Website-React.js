import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export function Products() {
  const [sorted, setSorted] = useState([]);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const param = useParams();
  console.log(param.category);
  if (!param.category) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products`);
          console.log(response.data);
          setProduct(response.data);
          setSorted(response.data);
          setLoading(false);
        } catch (error) {
          console.log("Error Detecting While Fetching Api Data", error);
        }
      };
      fetchData();
    }, []);
  } else {
    useEffect(() => {
      const categoryData = async () => {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${param.category}`
          );
          console.log(response.data);
          setProduct(response.data);
          setSorted(response.data);
          setLoading(false);
        } catch (error) {
          console.log("Error Detecting While Fetching Api Data", error);
        }
      };
      categoryData();
    }, []);
  }

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

  const handleLowToHigh = () => {
    const sortedData = [...product];
    sortedData.sort((a, b) => a.price - b.price);
    setProduct(sortedData);
    console.log(sortedData);
  };

  const handleHighToLow = () => {
    const sortedData = [...product];
    sortedData.reverse((a, b) => a.price - b.price);
    setProduct(sortedData);
    console.log(sortedData);
  };

  return (
    <>
      <span className="searching-text">
        <input
          className="input-search"
          placeholder=" Search Products..."
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>

      <div className="pricebtn-sorting">
        <div class="dropdown">
          <button class="dropbtn">Sort By</button>
          <div class="dropdown-content">
            <a onClick={handleLowToHigh}>Price Low To High</a>
            <a onClick={handlesorting}>Sort A to Z</a>
            <a onClick={handleHighToLow}>Price High To Low</a>
            <a onClick={handleReverse}>Sort Z to A</a>
          </div>
        </div>
      </div>

      {/* <div className="pricebtn-sorting">
        <button className="low-high" onClick={handleLowToHigh}>
          Price Low To High
        </button>
        <button className="Sorting-btn" onClick={handlesorting}>
          Sort A to Z
        </button>

        <button className="high-low" onClick={handleHighToLow}>
          Price High To Low
        </button>
        <button className="ReverseSort-btn" onClick={handleReverse}>
          Sort Z to A
        </button>
      </div> */}

      {loading ? (
        // style={{
        //   marginLeft: "50px",
        //   fontSize: "28px",
        //   fontWeight: "bolder",
        //   color: "darkred",
        // }}

        <div class="loader"></div>
      ) : (
        <h2 className="Feature-p"></h2>
      )}

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
