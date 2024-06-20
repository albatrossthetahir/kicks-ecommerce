import React from 'react';
import SingleCard from "./SingleCard";

const productData = [
    {
      id: '1',
      img: '/shoes-img.jpg',
      title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      price: '$125',
      href: '/',
      newProduct: true
    },
    {
      id: '2',
      img: '/shoes-img1.jpg',
      title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      price: '$125',
      href: '/',
    },
    {
      id: '3',
      img: '/shoes-img2.jpg',
      title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      price: '$125',
      href: '/',
    },
    {
      id: '4',
      img: '/shoes-img3.jpg',
      title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      price: '$125',
      href: '/',
      newProduct: true
    }
  ]

const productList = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4">
          {
            productData ?
            productData.map((res, index)=>
              {
                return(
                  <SingleCard 
                  key={index}
                  productImg={res.img}
                  productTitle={res.title}
                  productPrice={res.price}
                  href={res.href}
                  newProduct={res.newProduct}
                />
                )
              }
            )
            :<p>Product Not Found</p>
          }
        </div>
  )
}

export default productList