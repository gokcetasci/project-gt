import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";



function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold italic text-white animate-pulse">Logo</div>
                <div id='events' class="flex items-center space-x-4">
                    <nav class="space-x-4">
                        <a href="#" class="text-white hover:text-gray-300 relative group">
                            Etkinlikler
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-300 relative group">
                            Konserler
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-300 relative group">
                            Spor
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-300 relative group">
                            Tiyatro
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" class="text-white hover:text-gray-300 relative group">
                            Aile
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
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
                <div className="flex items-center space-x-4">
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