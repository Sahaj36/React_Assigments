import React from 'react';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  width: 100%;
  text-align: center;
`;

const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  max-width: 300px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

function HomePage() {
  return (
    <HomePageWrapper>
      <Header>
        <h1>Welcome to Our Shopping Site</h1>
      </Header>
      <div>
        <ProductCard>
          <h2>Product 1</h2>
          <p>Description of Product 1</p>
          <p>Price: $19.99</p>
          <button>Add to Cart</button>
        </ProductCard>
        <ProductCard>
          <h2>Product 2</h2>
          <p>Description of Product 2</p>
          <p>Price: $29.99</p>
          <button>Add to Cart</button>
        </ProductCard>
      </div>
      <Footer>
        &copy; {new Date().getFullYear()} Shopping Site. All Rights Reserved.
      </Footer>
    </HomePageWrapper>
  );
}

export default HomePage;
