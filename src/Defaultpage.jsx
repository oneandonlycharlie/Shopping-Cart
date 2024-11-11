import { Link, useOutletContext } from "react-router-dom"

function DefaultPage(){

  const [inventory,setInventory] = useOutletContext();

  const featuredItems = inventory.slice(0,4)

  console.log(featuredItems)

    return(
        <div>
        <img src="" alt="This is background img" />
        <h1>The Best Collactions with Exclusive Deal </h1>
        <section>
          <h2>Featured Items</h2>
          <div> {featuredItems.map(item => {
              return (
                <div key={item.id}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
            )})}
          </div> 
        </section>
        </div>
    )

}
export {DefaultPage}