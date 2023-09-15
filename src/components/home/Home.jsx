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
            const isExist = selectedActors.find(item => item.id ==actor.id)
            const newSelectedActors = [...selectedActors,actor];
            let count = actor.salary;
            if(isExist){
                return alert('You have selected this actor');
            }
            selectedActors.forEach(item => {
                count += item.salary;
            });
            if(count > 20000){
                return alert('you are out of budget')
            }else{
                const remaining = 20000 - count;
                setSelectedActors(newSelectedActors);
                setTotalSalary(count);
                setRemainingBudget(remaining);
            }

        }


    return (
        <div className="home px-3 ">
            <h1 className=" text-4xl py-8">Make An Avengers Movie with a budget of $20000</h1>
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