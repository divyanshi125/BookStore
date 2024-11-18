import React from 'react';
import Cards from "./Cards";
import list from "../../src/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (<>
    <div className='max w-screen-2x1 container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 class="text 2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span>
            </h1>
            <p clasName="mt-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolorum est ratione aut ipsum fugit officia! Possimus molestias totam facere ipsam animi? Temporibus, mollitia dolorem accusamus vero consequuntur doloremque corrupti?
            </p>
            <Link to ="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  );
}

export default Course