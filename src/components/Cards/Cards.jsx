
import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {

    const[cards,setCards] = useState([]);

    useEffect(() => {
        fetch('heroes.json')
        .then(res => res.json())
        .then(data => setCards(data.heroes))
    },[])

    console.log(cards);

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* <h2 className=" text-center text-3xl font-bold text-white">All Cards will display here</h2> */}
            {
                cards.map(() => <Card></Card>)
            }
        </div>
    );
};

export default Cards;