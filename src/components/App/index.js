import React from "react";
import Cake from "../Cake";
import Congratulations from "../Congratulations";

export default class App extends React.Component {
    state = {
        cakeClicked: false,
    };

    handleClick = () => {
        console.log("Clicked candle");
        this.setState({cakeClicked: true});
    };

    render() {
        const page = !this.state.cakeClicked ?
            <Cake clickHandler={this.handleClick} /> :
            <Congratulations />;

        return (
            page
        );
    }
}
