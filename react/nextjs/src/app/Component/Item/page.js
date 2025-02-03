
import React from 'react';
import {data_product} from '../Item/data'
 // Ensure correct path to data
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';

const Item = () => {
  return (
    <div className="container bg-slate-50 text-black py-8 px-4">
    <h1 className='text-center font-semibold text-lg text-gray-900 hover:font-bold hover:underline hover:text-red-400'>
  NEW COLLECTION
</h1><br/><br/>
      {/* Responsive grid for displaying products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((product, index) => (
          <Card key={index} className="py-4 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
            {/* Card Body: Product Image */}
            <CardBody className="overflow-hidden p-2">
              <div className="relative w-full h-64 md:h-72"> {/* Image container with fixed height */}
                <Image
                  alt={product.title || 'Product image'}
                  className="object-cover rounded-lg w-full h-full" // Ensures the image covers the area and stays within the container
                  src={product.image || 'https://heroui.com/images/hero-card-complete.jpeg'} // Fallback image if no image exists in data
                  // width={400} // Medium image size for better layout
                  // height={300} // Medium image size, fixed height
                />
              </div>
            </CardBody>

            {/* Card Header: Product Details */}
            <CardHeader className="pt-4 pb-2 px-4 flex flex-col items-start">
              {/* Product Name */}
              <h4 className="font-semibold text-lg text-gray-900">{product.title || 'Product Title'}</h4>

              {/* Product ID */}
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
              <div className="mt-4 p-2 bg-blue-500 rounded-lg text-center hover:bg-blue-600">
              <Button 
              color="primary" 
              className="w-full text-white hover:text-black">
    ADD To Card
  </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Item;

