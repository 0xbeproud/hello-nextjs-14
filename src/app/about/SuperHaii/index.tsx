import {SlideContainer} from "../styled";
import React from "react";
import {Summary, Title, Wrapper} from "./styled";
import HaiiImage from "@images/about/haai.jpg";

const SuperHaiiSlide = () => {
    return <SlideContainer bgImage={HaiiImage}>
        <Wrapper className="flex flex-row flex-wrap justify-start">
            <Title>Super:Haii</Title>
            <Summary>
                Artificial intelligence (AI) is a fundamental form of intelligence that mimics human intelligence <br/>
                by creating and applying algorithms embedded in a dynamic computing environment. <br/>
                In short, AI seeks to create computers that think and act like humans. <br/>
            </Summary>
        </Wrapper>
    </SlideContainer>
}

export default SuperHaiiSlide;