import { Link,useOutletContext } from "react-router-dom";

function ShoppingCart(){

 const [inventory,setInventory] = useOutletContext();

    const selectedItems = inventory.filter((item) => item.selected == true )

    let subTotal = 0;

    return (
        <>
        <p>Welcome to the check out page</p>
        <div>
            {selectedItems.map(item => {
                subTotal += item.price * item.quantity
                return (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                )
            })}
        </div>
        <p>{subTotal}</p>
        <button>Delete</button>
        <Link to="/shoplist">Back to shopping</Link>
        <button>Check out</button>
        </>
    )

}

export {ShoppingCart}