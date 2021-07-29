import React ,{useEffect} from 'react';


function Nav(){
       useEffect(()=>{
        const burger = document.getElementById('burger');
        const menu = document.getElementById('menu');
        burger.addEventListener('click', (e) => {
        if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        } else {
        menu.classList.add('hidden');
        }
         });
       });
    return(
        <div class="grid md:grid-cols-3">
            <div class="md:col-span-1 md:flex md:justify-left">
                <nav class="text-right">
                <div class="flex justify-between items-center">
                    <h1 class="font-bold uppercase p-4 border-b border-gray-100">
                        <a href="/" class="hover:text-gray-700">Food Junction</a>
                    </h1>
                    <div class="px-4 cursor-pointer md:hidden" id="burger">
                        <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </div>
                    <ul class="text-md mt-4 hidden md:block" id="menu">
                        <li class="text-gray-700 py-4" class="block px-4 flex justify-end border-r-4 border-primary">
                            <a href="#">
                            <span>Home</span>
                            <svg class="w-5 ml-2 inline"  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </a>
                        </li>
                        <li class="py-1" class="block px-4 flex justify-end border-r-4 border-primary">
                            <a href="#">
                            <span>About</span>
                            <svg class="w-5 ml-2 inline" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                            </a>
                        </li>
                        <li class="py-1" class="block px-4 flex justify-end border-r-4 border-primary">
                            <a href="#">
                            <span>Contact</span>
                            <svg class="w-5 ml-2 inline" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

      </div>
    )
}
export default Nav;