import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eventsData from "../../events";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { ProgressBar } from "../progressBar/progressBar";
import { Title } from "../title/title";
import Event from "./event";
import "./events.scss";

export const Events = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const goTo = (index = 0) => {
        const total = 3;
        index = ((index % total) + total) % total;
        setCurrent(index);
    };

    const next = () => {
        goTo(current + 1);
    };

    return (
        <FadeIn delay={400}>
            <Header />
            <section className="events">
                <ProgressBar current={current} />
                <Title
                    title={
                        <>
                            {"JEREMIE"}{" "}
                            <span className="break_line">
                                <span>{"&"}{" "}</span>
                                <span>{"HODAYA"}</span>
                            </span>
                        </>
                    }
                    className={"event_title"}
                />
                {eventsData.map((event, index) => (
                    <Event
                        key={event.name}
                        event={event}
                        index={index}
                        next={next}
                        current={current}
                    />
                ))}
                <Button
                    className={"event_btn_desktop"}
                    text={"Invitation"}
                    onClick={() => navigate("/invitation")}
                />
            </section>
        </FadeIn>
    );
};
