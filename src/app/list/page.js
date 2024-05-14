"use client"
import getList from "../api/getList/route"
import React, { useState,useEffect } from 'react';

export default function List() {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:3000/api/getList')
        .then((response) => response.json())
        .then((json) => { 
            setEvents(json)
            // console.log(json)
        });            
    }, []);  

    return (
        <div>
            <h1>Events</h1>
            {events.map((event)=>
                <div>
                    <p>ID: {event.id}</p>
                    <p>NAME: {event.titulo} </p>
                </div>
            )}
        </div>
    )
}