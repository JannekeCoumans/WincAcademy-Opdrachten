import React, { Component } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import AddComponent from "./components/AddComponent";

class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            patients: [
                {"id":1,"first_name":"Chrissy","last_name":"Derrell","email":"cderrell0@ucoz.com","telephone":"979-952-0305","year":"2001"},
                {"id":2,"first_name":"Johna","last_name":"Sommersett","email":"jsommersett1@nature.com","telephone":"304-332-1605","year":"1980"},
                {"id":3,"first_name":"Ardene","last_name":"Dies","email":"adies2@imgur.com","telephone":"235-881-8107","year":"2001"},
                {"id":4,"first_name":"Lindsey","last_name":"Wittey","email":"lwittey3@oaic.gov.au","telephone":"504-909-5838","year":"1953"},
                {"id":5,"first_name":"Mathe","last_name":"Fryett","email":"mfryett4@princeton.edu","telephone":"246-360-2053","year":"1975"},
                {"id":6,"first_name":"Dudley","last_name":"Alston","email":"dalston5@auda.org.au","telephone":"940-257-5987","year":"1957"},
                {"id":7,"first_name":"Minnaminnie","last_name":"Gillimgham","email":"mgillimgham6@hostgator.com","telephone":"123-436-6453","year":"1983"},
                {"id":8,"first_name":"Iver","last_name":"Lyston","email":"ilyston7@qq.com","telephone":"546-494-4737","year":"1969"},
                {"id":9,"first_name":"Kermie","last_name":"Martinyuk","email":"kmartinyuk8@list-manage.com","telephone":"966-586-8235","year":"1986"},
                {"id":10,"first_name":"Ketti","last_name":"Laughton","email":"klaughton9@wikispaces.com","telephone":"479-245-1478","year":"1960"},
                {"id":11,"first_name":"Boycey","last_name":"Haldon","email":"bhaldona@smh.com.au","telephone":"891-684-1504","year":"1960"},
                {"id":12,"first_name":"Cullie","last_name":"Croce","email":"ccroceb@yelp.com","telephone":"925-356-2249","year":"1982"},
                {"id":13,"first_name":"Rhody","last_name":"Drakeley","email":"rdrakeleyc@vinaora.com","telephone":"188-350-9583","year":"1974"},
                {"id":14,"first_name":"Siobhan","last_name":"Henken","email":"shenkend@bandcamp.com","telephone":"875-166-2835","year":"1972"},
                {"id":15,"first_name":"Cindra","last_name":"Rizzolo","email":"crizzoloe@nymag.com","telephone":"602-733-4177","year":"1981"},
                {"id":16,"first_name":"Brandi","last_name":"Ritchings","email":"britchingsf@people.com.cn","telephone":"506-794-6663","year":"1955"},
                {"id":17,"first_name":"Elenore","last_name":"Tate","email":"etateg@sourceforge.net","telephone":"710-735-0222","year":"1967"},
                {"id":18,"first_name":"Karlis","last_name":"Addionizio","email":"kaddionizioh@statcounter.com","telephone":"137-112-2414","year":"1965"},
                {"id":19,"first_name":"Jodie","last_name":"Nannini","email":"jnanninii@patch.com","telephone":"256-545-0077","year":"1982"},
                {"id":20,"first_name":"Dawn","last_name":"Latchford","email":"dlatchfordj@google.pl","telephone":"455-637-8213","year":"1995"},
                {"id":21,"first_name":"Pansy","last_name":"Jewks","email":"pjewksk@bbc.co.uk","telephone":"896-601-8881","year":"1976"},
                {"id":22,"first_name":"Cornell","last_name":"Culver","email":"cculverl@nsw.gov.au","telephone":"280-894-1000","year":"1982"},
                {"id":23,"first_name":"Isaac","last_name":"Simounet","email":"isimounetm@cpanel.net","telephone":"732-785-6612","year":"1956"},
                {"id":24,"first_name":"Kelli","last_name":"Kinkade","email":"kkinkaden@uiuc.edu","telephone":"254-190-8048","year":"1957"},
                {"id":25,"first_name":"Susann","last_name":"Marikhin","email":"smarikhino@dropbox.com","telephone":"307-445-7128","year":"1979"},
                {"id":26,"first_name":"Jefferey","last_name":"Wylam","email":"jwylamp@icio.us","telephone":"487-460-4424","year":"1972"},
                {"id":27,"first_name":"Desiri","last_name":"Bartoszewski","email":"dbartoszewskiq@weather.com","telephone":"897-383-9799","year":"1998"},
                {"id":28,"first_name":"Carree","last_name":"Kitchinham","email":"ckitchinhamr@senate.gov","telephone":"160-631-8074","year":"1974"},
                {"id":29,"first_name":"Kevina","last_name":"Crutchley","email":"kcrutchleys@cargocollective.com","telephone":"252-814-5051","year":"1961"},
                {"id":30,"first_name":"Arturo","last_name":"Stedson","email":"astedsont@tuttocitta.it","telephone":"877-616-9816","year":"1970"},
                {"id":31,"first_name":"Isa","last_name":"Normanvill","email":"inormanvillu@paypal.com","telephone":"535-420-4905","year":"1986"},
                {"id":32,"first_name":"Andris","last_name":"Canton","email":"acantonv@wired.com","telephone":"415-621-5911","year":"1954"},
                {"id":33,"first_name":"Noland","last_name":"Le Brom","email":"nlebromw@archive.org","telephone":"257-834-6858","year":"1988"},
                {"id":34,"first_name":"Monique","last_name":"Panyer","email":"mpanyerx@last.fm","telephone":"934-296-4272","year":"1975"},
                {"id":35,"first_name":"Shirleen","last_name":"Ruddom","email":"sruddomy@washington.edu","telephone":"291-821-9641","year":"1950"},
                {"id":36,"first_name":"Florrie","last_name":"Broadway","email":"fbroadwayz@cmu.edu","telephone":"996-722-4416","year":"1995"},
                {"id":37,"first_name":"Gunar","last_name":"Greenhough","email":"ggreenhough10@soundcloud.com","telephone":"448-489-7572","year":"1982"},
                {"id":38,"first_name":"Rhiamon","last_name":"Hirtz","email":"rhirtz11@economist.com","telephone":"910-276-0164","year":"1990"},
                {"id":39,"first_name":"Sheri","last_name":"Corneil","email":"scorneil12@edublogs.org","telephone":"122-350-4888","year":"1955"},
                {"id":40,"first_name":"Hercule","last_name":"Alexsandrovich","email":"halexsandrovich13@amazonaws.com","telephone":"929-470-1349","year":"1976"},
                {"id":41,"first_name":"Rhiamon","last_name":"Russel","email":"rrussel14@angelfire.com","telephone":"409-204-8364","year":"1964"},
                {"id":42,"first_name":"Lionel","last_name":"Risen","email":"lrisen15@ox.ac.uk","telephone":"229-167-7368","year":"1954"},
                {"id":43,"first_name":"Georgie","last_name":"Giurio","email":"ggiurio16@statcounter.com","telephone":"479-600-6503","year":"1961"},
                {"id":44,"first_name":"Tedd","last_name":"Bispham","email":"tbispham17@ihg.com","telephone":"271-342-3852","year":"1970"},
                {"id":45,"first_name":"Danika","last_name":"Leat","email":"dleat18@storify.com","telephone":"561-686-7002","year":"1967"},
                {"id":46,"first_name":"Temp","last_name":"Crocket","email":"tcrocket19@themeforest.net","telephone":"483-957-0468","year":"1980"},
                {"id":47,"first_name":"Modesty","last_name":"Rowdell","email":"mrowdell1a@ow.ly","telephone":"934-693-3269","year":"1964"},
                {"id":48,"first_name":"Grier","last_name":"Rivallant","email":"grivallant1b@sourceforge.net","telephone":"784-186-0831","year":"1952"},
                {"id":49,"first_name":"Cosme","last_name":"Hugett","email":"chugett1c@bigcartel.com","telephone":"965-332-1794","year":"1987"},
                {"id":50,"first_name":"Ralf","last_name":"Fance","email":"rfance1d@google.it","telephone":"296-893-2696","year":"1988"}
            ],
            dentists: [
                {"id": 1,"first_name": "Claybourne","last_name": "Scragg","email": "claybourne.scragg@tandartspraktijkbvt.nl"}, 
                {"id": 2,"first_name": "Lazare","last_name": "Venditti","email": "lazare.venditti@tandartspraktijkbvt.nl"}, 
                {"id": 3,"first_name": "Leon","last_name": "Heinle","email": "leon.heinle@tandartspraktijkbvt.nl"}, 
                {"id": 4,"first_name": "Gray","last_name": "Le Gall","email": "gray.legall@tandartspraktijkbvt.nl"}
            ],
            assistents: [
                {"id": 1,"first_name": "Leora","last_name": "Girogetti"}, 
                {"id": 2,"first_name": "Llewellyn","last_name": "Bartusek"}
            ],
            appointments: [
                {"id": 1, "day": 5, "time": 14, "patientId": 5, "dentistId": 4, "assistentId": 2}
            ]
        }
    }

    render() {   

        const addDentist = (event) => {
            const generateId = this.state.dentists.length + 1;
            // const newDentist = event.target.getAttribute("value");
            const newDentist = {"id": {generateId},"first_name": "Jndjs","last_name": "Kjsad","email": "Jndjs.Kjsad@tandartspraktijkbvt.nl"}
            this.setState((prevstate) => {
                const updatedDentists = prevstate.dentists.concat(newDentist);
                return {
                    dentists: updatedDentists
                };
            });
        };

        const addPatient = () => {
            const generateId = this.state.patients.length + 1;
            // newPatient = event.target.getAttribute("value");
            const newPatient = {"id":generateId,"first_name":"Blabla","last_name":"Blabla","email":"rfance1d@google.it","telephone":"296-893-2696","year":"1988"}
            this.setState((prevstate) => {
                const updatedPatients = prevstate.patients.concat(newPatient);
                return {
                    patients: updatedPatients
                }
            })
        }

        const makeDentistSick = (idOfDentist) => {
            const sickDentist = this.state.dentists.find((dentist) => dentist.id === idOfDentist)
            return sickDentist
            // straks moet de achtergrondkleur nog veranderd worden
        }

        const addAppointment = (day, time, idOfPatient, idOfDentist) => {
            const generateId = this.state.appointments.length + 1;
            const dayNumber = day;
            const timeSlot = time;
            const patientId = this.state.patients.find((patient) => patient.id === idOfPatient)
            const dentistId = this.state.dentists.find((dentist) => dentist.id === idOfDentist)
            const newAppointment = {"id": generateId, "day": dayNumber, "time": timeSlot, "patientId": patientId.id, "dentistId": dentistId.id}
            this.setState((prevstate) => {
                const updatedAppointments = prevstate.appointments.concat(newAppointment);
                return {
                    appointments: updatedAppointments
                }
                //Nog toevoegen: een afspraak op een dag + tijdstip mag alleen toegevoegd worden als die tandarts en/of assistent op dat moment vrij is
            }) 
        }

        const addAppointmentWithAssistent = (day, time, idOfPatient, idOfDentist, idOfAssistent) => {
            const generateId = this.state.appointments.length + 1;
            const dayNumber = day;
            const timeSlot = time;
            const patientId = this.state.patients.find((patient) => patient.id === idOfPatient)
            const dentistId = this.state.dentists.find((dentist) => dentist.id === idOfDentist)
            const assistentId = this.state.assistents.find((assistent) => assistent.id === idOfAssistent)
            const newAppointment = {"id": generateId, "day": dayNumber, "time": timeSlot, "patientId": patientId.id, "dentistId": dentistId.id, "assistentId": assistentId.id}
            this.setState((prevstate) => {
                const updatedAppointments = prevstate.appointments.concat(newAppointment);
                return {
                    appointments: updatedAppointments
                };
                //Nog toevoegen: een afspraak op een dag + tijdstip mag alleen toegevoegd worden als die tandarts en/of assistent op dat moment vrij is
            }); 
        };

        const removeAppointment = (appointmentId) => {
            const updatedAppointments = this.state.appointments.filter(
                appointment => appointment.id !== appointmentId).map(
                    appointment => { return appointment });
            this.setState({
                appointments: updatedAppointments
            });
        };

        const makePatientSick = (idOfPatient) => {
            const appointmentsOfSickPatient = this.state.appointments.find(appointment => appointment.patientId === idOfPatient)
            const appointmentToRemove = appointmentsOfSickPatient.id;
            removeAppointment(appointmentToRemove)
        }

        const moveAppointment = (apointmentId) => {
            const appointmentToMove = this.state.appointment.find(appointment => appointment.id === apointmentId)
            const updatedAppointments = [...this.state.appointments];
            // let changeAppointment = {updatedAppointments[]}
        }

        // - verplaats een afspraak
        //     - `newState = moveAppointment(state, appointmentId, newDayNumber, newTime)`
        //     - let op de beschikbaarheid van de tandarts of assistent, ze kunnen niet twee afspraken tegelijk doen

        return(
            <div>
                <Header />
                <Calendar 
                    patients={this.state.patients}
                    dentists={this.state.dentists}
                    assistents={this.state.assistents}
                />
                <button onClick={addDentist}>add Dentist</button>
                <button onClick={addPatient}>add Patient</button>
                <button onClick={makeDentistSick}>makeDentistSick</button>
                <button onClick={addAppointment}>addAppointment</button>
                <button onClick={addAppointmentWithAssistent}>addAppointmentWithAssistent</button>
                <button onClick={removeAppointment}>removeAppointment</button>
                <button onClick={makePatientSick}>makePatientSick</button>
                <button onClick={moveAppointment}>moveAppointment</button>
                <AddComponent />
            </div>
        )
    }
}

export default Container