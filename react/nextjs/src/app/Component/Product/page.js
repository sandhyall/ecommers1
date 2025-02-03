// 'use client'
// import React from 'react';
// import data_product from '../Assest/page'; // Ensure correct import
// import Item from '../Item/page';  // Import the Item component

// const Popular = () => {
//   // Check if data_product is an array before mapping
//   if (!Array.isArray(data_product) || data_product.length === 0) {
//     return <div>No products available</div>;
//   }

//   return (
//     <div>
//       <h1>POPULAR IN WOMEN</h1>
//       <br />
//       <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
//         {data_product.map((item, i) => (
//           <Item
//             key={i}
//             id={item.id}  // Pass the correct prop to Item
//             name={item.name}  // Pass the correct prop to Item
//             images={item.imgSrc}  // Pass the correct prop to Item
//             new_price={item.new_price}  // Pass the correct prop to Item
//             old_price={item.old_price}  // Pass the correct prop to Item
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;

'use client';
import React from 'react';
import { data_product } from '../Product/data'; // Ensure correct path to data
import { Button, Card, CardBody, CardHeader, Image, CardFooter, Link } from '@nextui-org/react';
import { Link as RouterLink } from 'react-router-dom'; // Import the router link from react-router-dom

const Product = () => {
  return (
    <div className="container bg-slate-50 text-black py-8 px-4">
      <h1 className='text-center font-semibold text-lg text-gray-900 hover:font-bold hover:underline hover:text-red-400'>
        POPULAR WOMEN COLLECTION
      </h1>
      <br /><br />

      {/* Responsive grid for displaying products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((product, index) => (
          <Card key={index} className="py-4 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
            {/* Card Body: Product Image */}
            <CardBody key={product.id} className="overflow-hidden p-2">
              {/* <RouterLink to={`/product/${product.id}`} className="relative w-full h-64 md:h-72"> */}
              <Link to='{`/product/${product.id}`}'>
                <Image
                  alt={product.title || 'Product image'}
                  className="object-cover rounded-lg" // Ensures the image covers the area and stays within the container
                  src={product.image || 'https://heroui.com/images/hero-card-complete.jpeg'} // Fallback image if no image exists in data
                />
              </Link>
            </CardBody>

            {/* Card Header: Product Details */}
            <CardHeader className="pt-4 pb-2 px-4 flex flex-col items-start">
              <h4 className="font-semibold text-lg text-gray-900">{product.title || 'Product Title'}</h4>
              {product.id && <p className="text-sm text-gray-500">ID: {product.id}</p>}
              
              {/* Price Section */}
              <div className="flex space-x-4 mt-2">
                <h4 className="font-semibold text-lg text-green-500">${product.price}</h4>
                {product.old_price && (
                  <h4 className="font-semibold text-lg text-gray-400 line-through">${product.old_price}</h4>
                )}
              </div>

              {/* Product Status */}
              <p className="mt-2 text-sm text-gray-500">{product.status || 'Status: Available'}</p>
            </CardHeader>

            {/* Card Footer: Button */}
            <CardFooter className="mt-4">
              <div className="mt-4 p-2 bg-blue-500 rounded-lg text-center hover:bg-blue-600">
                <Button
                  color="primary"
                  className="w-full text-white hover:text-black"
                >
                  ADD To Cart
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
