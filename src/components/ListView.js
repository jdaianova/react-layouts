import ShopItem from "./ShopItem";

function ListView ({items}) {
    return (
       <div className="list-view">
        {items.map((item, id) => {
            return (
                <div key={id}>
                    <ShopItem item = {item}/>
                </div>
            )
        })}
       </div>
    )
}

export default ListView;