import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import {SlBasket} from "react-icons/sl"

function Header() {
    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => {
        setCartOpen(!cartOpen);
    }
    return (
        <header id='header' className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 p-4 shadow-md ">
            <div className="mx-auto flex justify-between items-center ">
                <logo className="text-2xl font-bold italic text-white animate-pulse md:w-auto">Logo</logo>
                <div id='headerevent' className="hidden sm:block lg:flex items-center space-x-4">
                    <nav class="space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 relative group">
                            Etkinlikler
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group">
                            Konserler
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group">
                            Spor
                            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group">
                            Tiyatro
                            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group ">
                            Aile
                            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                    </nav>
                </div>
                <div id='searchbarheader' className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <div className="relative">
                            <input 
                                type="text"
                                placeholder="Etkinlik, sanatçı ya da mekan arayın..."
                                className="px-4 py-1 rounded-md border-2 border-solid border-white focus:outline-none w-96 placeholder:italic text-sm"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <button>
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div id='headerbuttons' className="flex items-center space-x-4">
                    <div className="relative">
                        <button onClick={openCart}>
                            <SlBasket className="text-white" size={24} />
                        </button>
                        {cartOpen && (
                            <div className="absolute bg-gray-800 text-white p-4 rounded-md top-12 right-0">
                                Sepet İçeriği Burada
                                {/* Sepet içeriği, sepetteki ürünlerin listesi, miktarı vs. */}
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-white hover:text-white relative group transform hover:scale-105 transition-transform">
                        Giriş Yap
                        <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </a>
                    <a href="#" className="bg-white text-blue-600 hover:bg-blue-700 hover:text-gray-300 py-2 px-4 rounded-md font-medium hover:ease-out duration-500 ">
                        Kayıt Ol
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header