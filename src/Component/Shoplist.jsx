import { useState } from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"
import { Item } from "./Item"

function Shoplist(){

 const [inventory,setInventory] = useOutletContext();

    return (
        <>
        <section>
            {inventory.map(item=> {
                let path = `${item.id}`
                return (
                    <div key={item.id}>
                        {/* <img src={item.image} alt="This is item img" /> */}
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <Link to={path}>Detail</Link>
                    </div>
                )
            })}
        </section>
        </>
    )
}

export {Shoplist}