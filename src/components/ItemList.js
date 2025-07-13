import React from 'react'
import {addItem} from './cartSlice'

import {useDispatch} from 'react-redux'
const ItemList = ({itemCards}) => {
    console.log(itemCards)
     if (!Array.isArray(itemCards)) return null; 

    const dispatch = useDispatch()
    const handleaddItem=(items)=>(
      // Dispatch an Item
      dispatch(addItem(items))
    )

  return (
    
    <div>
      {itemCards.map((items,index)=>{
         
        return(
            <div key={`${items.card.info.id}-${index}`} className="p-4 m-4 border-b-1 text-left flex justify-between items-start">
                
                <div className="w-9/12 pr-4">
                    <div className="py-1">
                        <span className="font-semibold">{items.card.info.name}</span>
                        <span className="font-medium"> - ₹{items.card.info.price / 100 || items.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs text-gray-500">{items.card.info.description}</p>
                </div>
                <div className="w-3/12 relative">
                    <img
                      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + items.card.info.imageId}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-1 right-2">
                      <button className="bg-white border border-gray-300 rounded-md px-3.5 py-0.9 text-green-600 font-bold hover:shadow-md"
                      onClick={()=>handleaddItem(items)}>
                        ADD
                      </button>
                    </div>
                </div>
            </div>
        )
      })}
      
    </div>
  )
}

export default ItemList
