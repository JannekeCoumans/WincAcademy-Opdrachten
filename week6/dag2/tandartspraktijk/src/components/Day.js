import React from "react";
import Appointment from "./Appointment";

function Day({ day, patients, dentists, assistents }) {
    return(
    <div className="day">
        <h3>{day}</h3>
        <Appointment 
            className="appointment" 
            patients={patients}
            dentists={dentists}
            assistents={assistents}
        />
        <Appointment 
            className="appointment" 
            patients={patients}
            dentists={dentists}
            assistents={assistents}
        />
        <Appointment
            className="appointment" 
            patients={patients}
            dentists={dentists}
            assistents={assistents}
        />
        <Appointment 
            className="appointment" 
            patients={patients}
            dentists={dentists}
            assistents={assistents}
        />
        <Appointment 
            className="appointment" 
            patients={patients}
            dentists={dentists}
            assistents={assistents}
        />
    </div>
    )
}

export default Day;