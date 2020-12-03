import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { UseContext } from './storage/UseContext'


export const App = () => {
    const [carrito, setCarrito] = useState({
        id:'1',
        name:'Laptop',
        price:'2000',
        cantidad:'1',
        total:'2000'
    })

    return (
        <UseContext.Provider value={{carrito,setCarrito}}>
            <AppRouter/>
        </UseContext.Provider>
        
    )
}
