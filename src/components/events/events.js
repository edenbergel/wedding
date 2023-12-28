import React, { useState } from "react";
import eventsData from "../../events";
import { FadeIn } from "../animations/fadeIn";
import { PageTransition } from "../animations/pageTransition";
import { ProgressBar } from "../progressBar/progressBar";
import Event from "./event";
import "./events.scss";

export const Events = () => {
    const [current, setCurrent] = useState(0);
    const goTo = (index = 0) => {
        const total = 3;
        index = ((index % total) + total) % total;
        setCurrent(index);
    }

	const next = () => {
		goTo(current + 1);
	};

    return (
        // <PageTransition>
            <FadeIn delay={400}>
                <section className="events">
                    <ProgressBar current={current} />
                    {eventsData.map((event, index) => (
                        <Event 
                            key={event.name} 
                            event={event} 
                            index={index} 
                            next={next} 
                            current={current}
                        />
                    ))}
                </section>
            </FadeIn>
        // </PageTransition>
    );
};
