import {SlideContainer} from "@/app/about/styled";
import React from "react";
import {Summary, Title, Wrapper} from "./styled";
import SuperDesireImage from "@images/about/super-desire.jpg";

const SuperDesire = () => {
    return <SlideContainer image={SuperDesireImage}>
        <Wrapper className="flex flex-row flex-wrap justify-start">
            <Title>Super:Desire</Title>
            <Summary>
                To desire is to be in a particular state of mind. <br/>
                It is a state of mind familiar to everyone who has ever wanted to drink water <br/>
                or desired to know what has happened to an old friend, <br/>
                but its familiarity does not make it easy to give a theory of desire. <br/>
            </Summary>
        </Wrapper>
    </SlideContainer>
}

export default SuperDesire;