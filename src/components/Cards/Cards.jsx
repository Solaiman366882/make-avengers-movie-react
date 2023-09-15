import PropTypes  from "prop-types";
import Card from "./Card";


const Cards = ({allActors,handleSelectedActors}) => {


    return (
        <div className=" grid grid-cols-1 md:grid-cols-2  col-span-2 gap-5">
            {/* <h2 className=" text-center text-3xl font-bold text-white">All Cards will display here</h2> */}
            {
                allActors.map((card) => <Card 
                card={card}
                key={card.id}
                handleSelectedActors={handleSelectedActors}>
                </Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    allActors:PropTypes.array,
    handleSelectedActors:PropTypes.func
}

export default Cards;