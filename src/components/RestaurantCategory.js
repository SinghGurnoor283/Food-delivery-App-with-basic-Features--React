import React from 'react'
import ItemList from './ItemList' 
import {useState} from 'react'

const RestaurantCategory = ({data, showItems, setshowIndex}) => {

    
    const handleExpansion = () => {
        setshowIndex(); 
    }
    
  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
       
        <div 
            className="flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors duration-200" 
            onClick={handleExpansion}
        >
           
            <span className="font-bold text-base md:text-lg">
                {data.title}
                ({data?.itemCards?.length ||
                (Array.isArray(data.categories)
                    ? data.categories.reduce(
                        (acc, cat) => acc + (cat?.itemCards?.length || 0),
                        0
                      )
                    : 0)})
            </span>
            <span>{showItems ? '⬆️' : '⬇️'}</span>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showItems ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            {showItems && ( 
                <ItemList itemCards={
                    data.itemCards ||
                    (Array.isArray(data.categories)
                        ? data.categories.flatMap((cat) => cat.itemCards || [])
                        : [])
                } />
            )}
        </div>
    </div>
  )
}

export default RestaurantCategory
