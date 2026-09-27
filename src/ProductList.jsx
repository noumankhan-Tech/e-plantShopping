
import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    { category: "Air Purifying Plants", plants: [{ name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" }, { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/42/plants-3524746_1280.jpg", cost: "$12" }, { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/peace-lilies-4268755_1280.jpg", cost: "$18" }]},
    { category: "Aromatic Fragrant Plants", plants: [{ name: "Lavender", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4268755_1280.jpg", cost: "$20" }, { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/07/11/06/42/plants-3524746_1280.jpg", cost: "$18" }]},
    { category: "Insect Repellent Plants", plants: [{ name: "Basil", image: "https://cdn.pixabay.com/photo/2020/10/30/10/29/basil-5600796_1280.jpg", cost: "$10" }]},
    { category: "Medicinal Plants", plants: [{ name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/07/11/06/42/plants-3524746_1280.jpg", cost: "$14" }]},
    { category: "Low Maintenance Plants", plants: [{ name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$22" }]}
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <div className="navbar">
        <h2>Paradise Nursery</h2>
        <button onClick={() => setShowCart(!showCart)}>Cart ({cartItems.length})</button>
      </div>
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h2>{category.category}</h2>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="product-card">
                  <img src={plant.image} alt={plant.name} style={{width: '100px', height: '100px'}}/>
                  <h3>{plant.name}</h3>
                  <p>{plant.cost}</p>
                  <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showCart && <CartItem onContinueShopping={() => setShowCart(false)} />}
    </div>
  );
}
export default ProductList;
