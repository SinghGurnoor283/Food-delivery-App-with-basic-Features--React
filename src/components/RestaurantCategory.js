import React from 'react'
import ItemList from './ItemList' // Assuming ItemList component exists
import {useState} from 'react' // useState is already imported in the original snippet, keeping it for completeness

const RestaurantCategory = ({data, showItems, setshowIndex}) => {
    // console.log(data) // Keeping console.log from original snippet

    // The setshowIndex prop is expected to be a function that updates the parent's state
    // to control which category is expanded.
    const handleExpansion = () => {
        setshowIndex(); // This will toggle the showItems state in the parent
    }
    
  return (
    // Main container for the category, responsive width and shadow
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
        {/* Category Header - Clickable area */}
        <div 
            className="flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors duration-200" 
            onClick={handleExpansion}
        >
            {/* Category Title and Item Count */}
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
            {/* Expansion Icon - Changes based on showItems state */}
            <span>{showItems ? '⬆️' : '⬇️'}</span>
        </div>

        {/* Item List Container - Conditionally rendered and animated */}
        {/* max-h-0 and overflow-hidden for collapse, max-h-screen for expand with transition */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showItems ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            {showItems && ( // Render ItemList only when showItems is true for performance
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
