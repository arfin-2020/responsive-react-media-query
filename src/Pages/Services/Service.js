import React from 'react';
import classes from './Service.module.css';
const Service = ({service}) => {
    return (
        <div className={classes.service}>
            <img src={service.img}  width='300px' alt=''/>
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p>{service.description}</p>
        </div>
    );
};

export default Service;