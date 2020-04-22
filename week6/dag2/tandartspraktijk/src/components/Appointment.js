import React from "react";

function Appointment({ patients, dentists, assistents }) {
    
    const getRandomPatient = () => {
        const patient = patients[Math.floor(Math.random() * 50)];
        return `${patient.first_name} ${patient.last_name}`;
    };

    const getRandomDentist = () => {
        const dentist = dentists[Math.floor(Math.random() * 4)];
        return `${dentist.first_name} ${dentist.last_name}`;
    };

    const getRandomAssistent = () => {
        const assistent = assistents[Math.floor(Math.random() * 2)];
        const addAsistent = Math.random() < 0.5;
        return (addAsistent ? `Assistent: ${assistent.first_name} ${assistent.last_name}` : "");
    };

    const getRandomTime = () => {
        let goodTime = false;
        let hour;
        while (goodTime === false) {
          hour = Math.floor(Math.random() * 24);
          if (hour > 7 && hour < 19) {
            goodTime = true;
          }
        }
        return `${hour}:00u`;
    };
    
    return(
        <ul>
            <li className="tijdstip">Tijdstip: {getRandomTime()}</li>
            <li>Patient: {getRandomPatient()}</li>
            <li>Tandarts: {getRandomDentist()}</li>
            <li>{getRandomAssistent()}</li>
            <br />
        </ul>
    )
};

export default Appointment;