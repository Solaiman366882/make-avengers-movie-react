// import React from 'react';
import PropTypes from'prop-types'

const Sidebar = ({selectedActors,totalSalary,remainingBudget}) => {
    console.log();
    return (
        <div className='side-bar'>
            <div className="remaining-budget">
                <h2>Remaining Budget : {remainingBudget}</h2>
            </div>
            <h1>Total Actors:{selectedActors.length}</h1>
            <div className="actors-name bg-white">
                {
                    selectedActors.map((actor,idx) => <p key={actor.id}>{idx+1} . {actor.name} : {actor.role}</p>)
                }
            </div>
            <div className="salary bg-white">
                <h2>Total Salary:{totalSalary}</h2>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    selectedActors:PropTypes.array,
    totalSalary:PropTypes.number,
    remainingBudget:PropTypes.number,
}

export default Sidebar;