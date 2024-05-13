import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../ThereSection/ThereSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className={style.product}>
        <div className={style.containerProduct}>
          <div className={style.containerProductTop}>
            <div className={style.containerProductTopp}>
              <h1>PRODUCT OVERVIEW</h1>
            </div>
            <div className={style.containerProductTopNavbar}>
              <div className={style.containerProductTopNavbars}>
                <nav>
                  <ul>
                    <li>
                      <a href="">All</a>
                    </li>
                    <li>
                      <a href="">Products</a>
                    </li>
                    <li>
                      <a href="">Women</a>
                    </li>
                    <li>
                      <a href="">Men</a>
                    </li>
                    <li>
                      <a href="">Bag</a>
                    </li>
                    <li>
                      <a href="">Shoes</a>
                    </li>
                    <li>
                      <a href="">Watches</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={style.containerProductTopNavbarIcons}>
                <div className={style.ProductIcons}>
                  <FontAwesomeIcon icon={faFilter} />
                  <p>Filter</p>
                </div>
                <div className={style.ProductIcons}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <p>Search</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.Products}>
            {products.map((product, index) => (
              <div key={index} className={style.ProductItem}>
                <img src={product.image} alt={product.name} />
                <div className={style.cartTitle}>
                  <p>{product.title}</p><FontAwesomeIcon icon={faHeart} className={style.faHeart} />
                </div>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;