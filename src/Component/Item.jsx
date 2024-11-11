import { useParams, Link, useOutletContext } from "react-router-dom"


function Item(){

const {id} = useParams()

const [inventory,setInventory] = useOutletContext();

const currentItem = inventory.find((item) => item.id == id)

const addItem = ()=> {
    let newInventory = inventory.map((item)=>{
        if (currentItem.id == item.id){
            item.selected = true;
            item.quantity ++;
            return item
        } else {
            return item
        }
    });
    setInventory(newInventory);
}

    return(
        <div>
        <p>I am the card of an item </p>
        {/* <img src={currentItem.image} alt="" /> */}
        <p>{currentItem.title} </p>
        <p>{currentItem.price}</p>
        <Link to="/shoplist">Go back</Link>
        <button
            onClick={addItem}
        >Add to cart</button>
        </div>
    )
}

export {Item}