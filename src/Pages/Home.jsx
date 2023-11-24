import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-page-main-div">
        <img
          className="Home-page-img"
          // src="https://www.w3schools.com/w3images/jeans.jpg"
          src="https://lsco.scene7.com/is/image/lsco/Levis/clothing/005174891-alt3-pdp.jpg?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800"
          alt="img"
        />

        <div className="image-overlay">
          <h1 className="page-heading">
            New Arrivals <br />
            <p style={{ fontSize: "42px" }}>Collection 2023</p>
          </h1>
          <Link to="/products">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      <h1
        style={{ textAlign: "center", marginTop: "60px", marginBottom: "30px" }}
      >
        Top Trending Products
      </h1>

      <div className="product-container">
        <div className="product-item">
          <img
            src="https://lsco.scene7.com/is/image/lsco/Levis/clothing/005174891-alt3-pdp.jpg?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Denim Jeans Levi's
            <br />
            <b>$24.99</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://m.media-amazon.com/images/I/61tmixPgoXL._AC_UF894,1000_QL80_.jpg"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Wool Jacket Polo
            <br />
            <b>$19.99</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://m.media-amazon.com/images/I/61CiKMUf6ML._AC_UY1100_.jpg"
            style={{ width: "200px", height: "200px" }}
          />

          <p>
            Casual Jacket blue
            <br />
            <b>$19.99</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqywK_xRfRQsTQ5ByVO4TumWBr-CZus-Gnmw&usqp=CAU"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Shirt BreakOut
            <br />
            <b>$20.50</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://i5.walmartimages.com/seo/Boys-School-Uniform-Short-Sleeve-Pique-Polo-Shirt-XS-2XL_0032cfff-2191-417d-9d2f-a5ac98466fcb.a5c84711ac18b8f1d4c04f25a0f789db.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Polo Ties
            <br />
            <b>$20.50</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300865901_059_1.jpg?v=1630089906"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Casual Trouser Cargo
            <br />
            <b>$14.99</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://www.shutterstock.com/image-photo/open-folded-image-mans-skinny-260nw-2213619013.jpg"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Skinny Jeans
            <br />
            <b>$14.99</b>
          </p>
        </div>

        <div className="product-item">
          <img
            src="https://apollosports.pk/wp-content/uploads/2022/11/apollo-men-micro-twill-upper-23M220-D-grey-side-300x300.jpg"
            style={{ width: "200px", height: "200px" }}
          />
          <p>
            Sports Jacket
            <br />
            <b>$24.99</b>
          </p>
        </div>
      </div>

      {/* footer */}

      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">CLASSYCLOTH CO.</h1>

          <h2>Contact [+92-31245632]</h2>
          <address>
            Gulberg 3, Main Market Saddique Trade Center
            <br />
            <a class="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Technology</h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
                <a href="#">Hardware Design</a>
              </li>

              <li>
                <a href="#">Software Design</a>
              </li>

              <li>
                <a href="#">Digital Signage</a>
              </li>

              <li>
                <a href="#">Automation</a>
              </li>

              <li>
                <a href="#">Artificial Intelligence</a>
              </li>

              <li>
                <a href="#">IoT</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>&copy; 2023 Something. All rights reserved BY Hamid Rehman</p>

          <div class="legal__links">
            <span>
              Powered By <b>Knowledge Stream </b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
