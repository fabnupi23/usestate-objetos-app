import React, { useState } from 'react'

const initialProduct = {
    title: "Titulo",
    description: "Descripcion"    
}

function ProductApp() {
    const [product, setProduct] = useState(initialProduct);

    const updateProduct = (property, value) => {
        setProduct({
            ...product,
            [property]: value
        })
    }
    
  return (
    <div>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
        <button onClick={() => updateProduct("title", "Nuevo titulo")}>Update</button>
        <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  )
}

export { ProductApp };