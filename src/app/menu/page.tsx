"use client";
import { FC, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import useCartStore from '../../../src/app/store/cartstore';
import image1 from '../../../public/images/rr.jpg';
import image2 from '../../../public/images/ttss.jpg';
import offer1 from "../../../public/images/offer.jpg";
import offer2 from "../../../public/images/offer2.jpg";
import offer3 from "../../../public/images/offer3.jpg";
import pasta from "../../../public/images/pasta.jpg";
import pizza1 from "../../../public/images/pizza.png";
import pizza2 from "../../../public/images/pizza2.jpg";
import soup from "../../../public/images/offer.jpg";

// Define StaticImageData type if it's not recognized
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface MenuItem {
  title: string;
  price: string;
  category: string;
  image: StaticImageData;
  description?: string;
}

const MenuSection: FC<{ title: { category: string; name: string }; items: MenuItem[]; image: StaticImageData; reverse: boolean }> = ({ title, items, image, reverse }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="relative py-12 mt-20" style={{ backgroundColor: "rgba(255, 255, 255, .05)" }}>
      <h1 className='text-center text-3xl font-extrabold py-5'>ALL FOOD MENU </h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className={`w-full lg:w-1/2 ${reverse ? 'order-last lg:order-first' : 'order-first lg:order-last'}`}>
          <Image src={image} className="object-cover w-full h-full rounded-lg shadow-lg" alt={title.name} />
        </div>
        <div className="w-full lg:w-1/2 px-8 lg:px-16">
          <h5 className="uppercase tracking-widest text-gray-500 mb-2">{title.category}</h5>
          <h2 className="text-4xl font-bold mb-6">{title.name}</h2>
          
          {items.map((item, index) => (
            <div className="menu-item my-4" key={index}>
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium">
                  {item.title}<span className="block text-sm text-gray-500">{item.description}</span>
                </div>
                <div className="flex items-center">
                  <div className="mx-4 text-lg">{item.price}</div>
                  <button
                    className="px-4 py-2 bg-[#f14321] flex-wrap w-36 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <a href="/menu" className="btn-line border-b-2 border-gray-500 text-gray-500 hover:text-gray-700 transition-colors duration-300">View All Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Menu: FC = () => {
  const menuItems: MenuItem[] = [
    { 
      title: 'Special Faluda',
      price: '120 TK',
      category: 'Breakfast',
      image: offer1,
      description: 'Delicious chicken burger with fresh ingredients.'
    },
    { 
      title: 'Chicken Fried Rice',
      price: '160 TK',
      category: 'Lunch',
      image: offer2,
      description: 'Classic omelette made with farm-fresh eggs.'
    },
    
    { 
      title: 'Waffles',
      price: '100 TK',
      category: 'Breakfast',
      image: offer1,
      description: 'Crispy waffles topped with fresh fruits and whipped cream.'
    },
    { 
      title: 'Chicken Fried Rice',
      price: '160 TK',
      category: 'Lunch',
      image: offer2,
      description: 'Satisfying grilled sandwich with a variety of fillings.'
    },
    { 
      title: 'Chicken Big Burger',
      price: '100 TK',
      category: 'Lunch',
      image: offer3,
      description: 'Fresh Caesar salad with homemade dressing and croutons.'
    },
    { 
      title: 'Pasta',
      price: '120 TK',
      category: 'Breakfast',
      image: pasta,
      description: 'Authentic pasta dish cooked to perfection with your choice of sauce.'
    },
    { 
      title: 'Chicken Big Cheese Burger',
      price: '150 TK',
      category: 'Lunch',
      image: offer1,
      description: 'Juicy steak served with roasted vegetables and mashed potatoes.'
    },
    { 
      title: 'Big Chicken Pizza',
      price: '400 TK',
      category: 'Breakfast',
      image: pizza1,
      description: 'Tender roast chicken seasoned with herbs and spices.'
    },
    { 
      title: 'Pizza',
      price: '180 TK',
      category: 'Breakfast',
      image: pizza2,
      description: 'Classic spaghetti bolognese made with homemade sauce.'
    },
    { 
      title: 'Special Sandwitch',
      price: '70 TK',
      category: 'Dinner',
      image: soup,
      description: 'Exquisite seafood platter featuring a variety of fresh seafood.'
    },
    { 
      title: 'Crispy Chicken Fry',
      price: '100 TK',
      category: 'Dinner',
      image: offer2,
      description: 'Succulent lamb chops grilled to perfection and served with mint sauce.'
    },
    { 
      title: 'Hot Coffee',
      price: '70 TK',
      category: 'Drinks',
      image: offer2,
      description: 'A strong shot of coffee made by forcing steam through finely-ground coffee beans.'
    },
    { 
      title: 'Special Hot Coffee',
      price: '100 TK',
      category: 'Drinks',
      image: offer2,
      description: 'A coffee drink made with espresso and steamed milk.'
    },
    { 
      title: 'Cappuccino',
      price: '120 TK',
      category: 'Drinks',
      image: offer2,
      description: 'A coffee drink made with espresso and foamed milk.'
    },
    { 
      title: 'Special Lassi',
      price: '90 TK',
      category: 'Drinks',
      image: offer2,
      description: 'Chilled tea served over ice, perfect for hot summer days.'
    },
    { 
      title: 'Lemonade ',
      price: '50 TK',
      category: 'Drinks',
      image: offer2,
      description: 'A refreshing blended drink made with fresh fruits and yogurt.'
    },
    { 
      title: 'Cold Coffee',
      price: '90 TK',
      category: 'Drinks',
      image: offer2,
      description: 'A comforting and creamy chocolate drink, perfect for cold days.'
    },
  ];

  return (
    <>
      <Head>
        <title>Menu | Restaurant</title>
      </Head>
      <MenuSection
        title={{ category: 'Favorite', name: 'Drinks' }}
        items={menuItems.filter(item => item.category === 'Drinks')}
        image={image1}
        reverse={false}
      />
      <MenuSection
        title={{ category: 'Favorite', name: 'Foods' }}
        items={menuItems.filter(item => item.category !== 'Drinks')}
        image={image2}
        reverse={true}
      />
    </>
  );
};

export default Menu;
