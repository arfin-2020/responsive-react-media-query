import React, { useEffect, useState } from 'react';
import Service from './Service';
import classes from './Service.module.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`./services.json`)
        .then(res=>res.json())
        .then(data =>setServices(data));
       
    },[])

    
    return (
        <div className={classes.servicesContainer}>
        
            {
                services.map((service)=><Service key={service.id} service={service}/>)
            }
        </div>
    );
};

export default Services;