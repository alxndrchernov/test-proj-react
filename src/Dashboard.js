import React from "react";
import Calendar from "./calendar/Calendar";
// import data from './data/data.json'
import {getEventsApi} from "./API/api";
import {getCookie} from "./common/cookie";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]}
    }

    handleClick = () => {
        const {handleLoginClick} = this.props;
        handleLoginClick(false);
    }

    async componentDidMount() {
        const auth = getCookie('auth')
        await getEventsApi(auth).then(async res => {
            const events = await res.json()
            this.setState({data:events})
        })
    }

    render() {
        return (
            <div className="dashboard">
                <button onClick={this.handleClick}> Выйти</button>
                <h2> Календарь </h2>
                <Calendar eventsData={this.state.data ?? []}/>
            </div>
        );
    }
}

export default Dashboard;
