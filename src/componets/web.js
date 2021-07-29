import React from 'react'

function Web(){
    return(
        <div>
            <div className="bg-gray-400 text-xl max-h-full">
                <ul className="flex flex-col md:flex-row md:space-x-16">
                    <li >
                        Home
                    </li>
                     <li >
                        About
                    </li>
                    <li >
                        Contact Us
                    </li>
                </ul>
            </div>
            <div class="mt-5 md:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:flex-shrink-1">
                        <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319946.png" alt="Man looking at item at a store"/>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Web;