import React from 'react';
 
function EachCard({charity, onCharityClicked}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <h1>{charity.charityName}{/* charity name*/}</h1>
                            <img src={charity.currentRating.ratingImage.large} alt={charity.charityName} />
                        </div>
                        <div className="list"  onClick={ () => onCharityClicked(charity)}>Add To List</div>
 
                    </div>
                    <div className='right'>
                         <h1 className ='details'>{charity.mission}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default EachCard;