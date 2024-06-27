"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import offer1 from "../../../public/images/offer.jpg";
import offer2 from "../../../public/images/offer2.jpg";
import offer3 from "../../../public/images/offer3.jpg";
import pasta from "../../../public/images/pasta.jpg";
import pizza1 from "../../../public/images/pizza.png";
import pizza2 from "../../../public/images/pizza2.jpg";
import soup from "../../../public/images/offer.jpg";
import useCartStore from '../store/cartstore';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

interface MenuItem {
  title: string;
  price: string;
  category: string;
  image?: StaticImageData;
  description: string;
}

const FoodMenu = () => {
  const [activeTab, setActiveTab] = useState<string>('Breakfast');
  const addToCart = useCartStore((state) => state.addToCart);

  const foodItems: MenuItem[] = [
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
      title: 'Chicken Basmati',
      price: '890 TK',
      category: 'Lunch',
      image: offer3,
      description: 'Fluffy pancakes served with maple syrup and butter.'
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
      title: 'pizza1',
      price: '250',
      category: 'Breakfast',
      image: pizza1,
      description: 'Tender roast chicken seasoned with herbs and spices.'
    },
    { 
      title: 'pizza2',
      price: '200',
      category: 'Breakfast',
      image: pizza2,
      description: 'Classic spaghetti bolognese made with homemade sauce.'
    },
    { 
      title: ' Platter',
      price: '220',
      category: 'Dinner',
      image: soup,
      description: 'Exquisite seafood platter featuring a variety of fresh seafood.'
    },
    { 
      title: 'Briyani',
      price: '200',
      category: 'Dinner',
      image: offer2,
      description: 'Succulent lamb chops grilled to perfection and served with mint sauce.'
    }
  ];

  const drinkItems: MenuItem[] = [
    
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
      title: 'Hot Coffee',
      price: '70 TK',
      category: 'Drinks',
      image: offer2,
      description: 'A strong shot of coffee made by forcing steam through finely-ground coffee beans.'
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

  const allItems: MenuItem[] = [
    ...foodItems,
    ...drinkItems.map(item => ({ ...item, category: 'Breakfast' })),
    ...drinkItems.map(item => ({ ...item, category: 'Lunch' })),
    ...drinkItems.map(item => ({ ...item, category: 'Dinner' }))
  ];

  const filteredMenuItems = allItems.filter(item => item.category === activeTab);

  return (
    <div className="container mx-auto py-5 bg-[#111827] text-white">
      <div className="text-center animate-fadeInUp">
        <h5 className="font-secondary py-3 text-2xl font-normal uppercase tracking-widest text-[#F14321]">Food Menu</h5>
        <h2 className="mb-5 text-4xl font-bold">Most Popular Items</h2>
      </div>
      <div className="text-center animate-fadeInUp">
        <ul className="flex justify-center border-b border-gray-600 mb-5">
          {['Breakfast', 'Lunch', 'Dinner'].map((category) => (
            <li key={category} className="nav-item">
              <button
                className={`flex items-center text-start mx-3 pb-3 cursor-pointer transition-transform transform ${
                  activeTab === category ? 'text-[#F14321] scale-110 text-xl' : 'text-white scale-100'
                }`}
                onClick={() => setActiveTab(category)}
              >
                <span>{category}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          <div className={`tab-pane block p-0`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredMenuItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-item bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl justify-center items-center hover:bg-gray-700 flex flex-col md:flex-row"
                >
                  <div className='flex justify-center items-center'>
                    <Image className="w-72 h-72 object-cover transition-transform duration-500 hover:scale-110" src={item.image!} alt={item.title} />
                  </div>
                  
                  <div className="menu-item-details text-left p-4">
                    <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                    <p className="text-gray-300 mb-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-lg font-semibold">{item.price}</span>
                      <button
                        className="ml-4 px-4 py-2 bg-[#F14321] text-white rounded-lg hover:bg-red-600 transition duration-300"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
        <Link href="/menu">
          <button className="text-lg bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300">
            Browse Full Menu
          </button>
        </Link>
      </div>
      <div className='flex justify-center items-center mt-8'>
        <Link href="/cart">
          <button className="text-lg bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300">
            Go to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodMenu;
