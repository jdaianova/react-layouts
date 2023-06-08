import ShopCard from "./ShopCard";

function CardsView ({cards}) {

    return (
       <div className="cards-view">
        {cards.map((card, id) => {
            return (
                <div key={id}>
                   <ShopCard cardItem = {card}/>
                </div>
            )
        })}
       </div>
    )
}

export default CardsView;