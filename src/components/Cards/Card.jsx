import PropTypes from'prop-types'
const Card = ({card}) => {

    const{name,age,profession,role,actor_name,salary,powers,profile_img}=card;

    return (
        <div className="card">
            <div className="card-img">
                <img src={profile_img} alt="" />
            </div>
            <div className="card-body">
                <div className="title">
                    <h2 className="">{name}</h2>
                </div>
                <div className="details grid grid-cols-2 gap-2">
                    <p className="age">Age: {age}</p>
                    <p className="profession">Prof:{profession}</p>
                    <p className="salary">Salary:{salary}</p>
                    <p className="actor">Actor:{actor_name}</p>
                </div>
                <div className="powers">
                    <h3 className=" font-bold">Power:</h3>
                    {
                        powers.map((power,idx) => <p key={idx}>{power},</p>)
                        }
                </div>
                <button className="btn">Select</button>
            </div>
        </div>
    );
};


Card.propTypes = {
    card: PropTypes.object
}


export default Card;
