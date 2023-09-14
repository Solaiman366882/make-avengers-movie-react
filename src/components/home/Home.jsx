import Cards from "../Cards/Cards";
import "./style.css"
const Home = () => {
    return (
        <div className="home px-3 ">
            <h1 className=" text-4xl">Make An Avengers Movie with a budget of $200000</h1>
            <main className="mx-auto max-w-screen-xl">
                <Cards></Cards>
            </main>
        </div>
    );
};

export default Home;