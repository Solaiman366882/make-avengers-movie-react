import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css"
const Home = () => {

    const[allActors,setAllActors] = useState([]);
    const[selectedActors,setSelectedActors] = useState([]);
    const[totalSalary,setTotalSalary] = useState(0);
    const[remainingBudget,setRemainingBudget] = useState(20000)

    useEffect(() => {
        fetch('heroes.json')
        .then(res => res.json())
        .then(data => setAllActors(data.heroes))
    },[])

    const handleSelectedActors = (actor) => {
        const newSelectedActors = [...selectedActors,actor];
        const newSalary = totalSalary + actor.salary;
        const newRemainingBudget = remainingBudget - actor.salary;
        setRemainingBudget(newRemainingBudget)
        setTotalSalary(newSalary)
        setSelectedActors(newSelectedActors);
        console.log(selectedActors);
    }

    return (
        <div className="home px-3 ">
            <h1 className=" text-4xl">Make An Avengers Movie with a budget of $200000</h1>
            <main className="mx-auto max-w-screen-xl md:grid md:grid-cols-3 gap-4">
                <Cards
                 allActors={allActors}
                 handleSelectedActors={handleSelectedActors}>
                 </Cards>
                <Sidebar 
                selectedActors={selectedActors}
                 totalSalary={totalSalary}
                  remainingBudget={remainingBudget}>
                  </Sidebar>
            </main>
        </div>
    );
};

export default Home;