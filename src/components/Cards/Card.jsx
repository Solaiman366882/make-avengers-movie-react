import image from"../../assets/background.png"
const Card = () => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <div className="title">
                    <h2 className="text-2xl">Tony Stark</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;