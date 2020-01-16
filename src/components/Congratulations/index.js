import React from "react";
import "./index.css";
// import PropTypes from "prop-types";

export default class Congratulations extends React.Component {
    handleCalendarClick() {
        window.location = "https://calendly.com/boodyvo/let-s-have-a-drink";
    }

    render() {
        return (
            <div className="congratulations-page">
                {/*width="560" height="315"*/}
                <div className="congratulations-page__balloons" />
                <div className="congratulations-page__text">
                    <p> Надеюсь, что оно исполнится! </p>

                    <p> Поздравляю тебя с Днем рождения) </p>
                </div>
                <div className="columns__column-inner">
                    <iframe className="columns__video" src="https://www.youtube.com/embed/fvDueU2M5ZY" frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
                    {/*<div className="intro-cta">*/}
                    {/*    <button onClick={this.handleCalendarClick} className="intro-cta__button"> Получить чашечку чая ☕️ </button>*/}
                    {/*    /!*<div className="intro-cta__cup"/>*!/*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}
