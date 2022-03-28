import React, { useState } from 'react';
import './style.css';
import Card from './MyCard';
import Grid from '@mui/material/Grid';
import MyMenu from './MyMenu';

export default function App() {
  const [data, setData] = useState([
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Fancy Product',
      price: '$40.00 - $80.00',
      rating: '',
      sale: false,
      viewOptions: true,
      previousprice: '',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Special Item',
      price: '$18.00',
      rating: '5star',
      sale: true,
      viewOptions: false,
      previousprice: '$20.00',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Sale Item',
      price: '$25.00',
      rating: '',
      sale: true,
      viewOptions: false,
      previousprice: '$50.00',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Popular Item',
      price: '$40.00',
      rating: '5star',
      sale: false,
      viewOptions: false,
      previousprice: '',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Sale Item',
      price: '$25.00',
      rating: '',
      sale: true,
      viewOptions: false,
      previousprice: '$50.00',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Fancy Product',
      price: '$120.00 - $125.00',
      rating: '',
      sale: false,
      viewOptions: true,
      previousprice: '',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Special Item',
      price: '$18.00',
      rating: '5star',
      sale: true,
      viewOptions: false,
      previousprice: '$20.00',
    },
    {
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      item: 'Popular Item',
      price: '$40.00',
      rating: '5star',
      sale: false,
      viewOptions: false,
      previousprice: '',
    },
  ]);
  return (
    <div className="App">
      <MyMenu />
      <div
        style={{ backgroundColor: 'black', height: '200px', margin: '15px' }}
        className="center"
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Shop in style</h1>
          <h3 style={{ color: 'grey', fontFamily: 'sans-serif' }}>
            With this shop hompeage template
          </h3>
        </div>
      </div>
      <Grid container spacing={15} className="center">
        {data.map((ele, i) => (
          <Grid item key={i}>
            <Card
              img={ele.img}
              item={ele.item}
              price={ele.price}
              sale={ele.sale}
              rating={ele.rating}
              viewOptions={ele.viewOptions}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
