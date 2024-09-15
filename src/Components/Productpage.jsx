import React, { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";
function ProductPage(){
    const[products,setProducts]=useState([])
        useEffect(()=>{
            console.log("use effet enabled ")
            fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                setProducts(responseJson.products)


            })

        },[])
    

    return(
        < div>
        This is product Page
        {/* {JSON.stringify(Products)} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {products.map(
                (product)=>{
                    return(
                        <Product key={product.id} product={product} />
                    )
                }
            )}
   
            </div>
            </div>
            )
            }
            
    

export default ProductPage