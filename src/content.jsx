import React from 'react';

const Content = (props) => { 
    const {id,imgUrl, title} = props;
    return (
        
                <div className="img-card">
                    <img src={imgUrl} alt="" />
                    <h6>{title}</h6>
                </div>
    )
}

export default Content;