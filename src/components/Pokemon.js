import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
    render(){
        const {name, url, types} = this.props.poke;
        return(
            <div className="card__container">
                <img alt="poke__image" src={url}/>
                <h2 className="poke__name">{name}</h2>
                <ul className="poke__types">
                    {types.map((type,index2) => {
                    return(
                        <li className="type__item" key={index2}>{type}</li>
                    );
                    })}
                </ul>
            </div>
        );
    }
}

Pokemon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.array
}

export default Pokemon;