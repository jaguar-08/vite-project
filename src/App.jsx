import React, { useState } from 'react';
import Nav from './components/Nav';



const App = () => {
  let data = [
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00-$80.00"

    }
    ,
    {
      name: "Indusrial Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$90.00"

    },
    {
      name: "Electronics Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$100.00"

    },
    {
      name: "Phone BackCase",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$15"

    },
    {
      name: "Laptop",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$80.00-$1000.00"

    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00"
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$25.00"
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00"
    },
    {
      name: "Book of Life",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$20.00"
    }
  ]
  
 
  
  
  return (
    <div>
      
      
      <Nav data={data} />
      
      
    </div>
  );
};

export default App;