function ShopItem({ item }) {
    return (
        <div className="list-view-item">
            <div className="list-view-item-img">
                <img src={item.img}></img>
            </div>
            <div className="list-view-name">
                <h2>{item.name}</h2>
            </div>
            <div className="list-view-color">
                <p>{item.color}</p>
            </div>
            <div className="list-view-price">
                <p className="price">${item.price}</p>
            </div>
            <div className="list-view-cart-btn">
                <button className="cart-btn">add to cart</button>
            </div>
        </div>
    )
}

export default ShopItem;