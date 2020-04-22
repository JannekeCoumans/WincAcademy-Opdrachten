import React, { Component } from "react";
import Day from "./Day"

class Week extends Component{
    render(){
        const { patients, dentists, assistents } = this.props;
        return(
            <div className="week">
                <Day 
                    className="dayview" 
                    day={"Maandag"}
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                <Day 
                    className="dayview" 
                    day={"Dinsdag"}
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                <Day 
                    className="dayview" 
                    day={"Woensdag"}
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                <Day 
                    className="dayview" 
                    day={"Donderdag"}
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                <Day 
                    className="dayview" 
                    day={"Vrijdag"}
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
            </div>
        )
    }
}

export default Week;