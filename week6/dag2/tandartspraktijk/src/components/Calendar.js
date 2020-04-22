import React, { Component } from "react";
import Week from "./Week"

class Calendar extends Component{
    render(){
        const { patients, dentists, assistents } = this.props;

        return(
            <div className="calendar">
                <Week 
                    className="week"
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                <Week 
                    className="week"
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                 <Week 
                    className="week"
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
                <Week 
                    className="week"
                    patients={patients}
                    dentists={dentists}
                    assistents={assistents}
                />
        </div>
        )
    }
}

export default Calendar;