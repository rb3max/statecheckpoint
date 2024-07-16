import React from 'react'
import Cards from './Cards'

const Products = () => {
    let products=[
        {
            image:"data:image/jpeg;base64,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",
            name:"game",
            price:120
            
        },
        {
            image:"https://m.media-amazon.com/images/I/71Liv-br3iL._AC_UF1000,1000_QL80_.jpg",
            name:"manette",
            price:70
        },
        {
            image:"data:image/jpeg;base64,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",
            name:"ps4",
            price:90
        },
    ]
  return (
    <div>
        <div className='list'>
        {products.map(el=><Cards el={el} />)}
        </div>
    </div>
  )
}

export default Products