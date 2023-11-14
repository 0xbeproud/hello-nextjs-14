import React from "react";
import {FlexContainer, Summary, Title, Wrapper} from "./styled";
import {SlideContainer} from "../styled";
import BeProudImage from "@images/about/pfp7946.png";

const BeProud = () => {
    return <SlideContainer>
        <FlexContainer className="flex flex-row flex-wrap justify-start">
            <Title>Be:Proud</Title>
            <Summary>
                Self-esteem is the belief that you are a valuable person worthy of love and capable of accomplishing something.
            </Summary>
        </FlexContainer>
    </SlideContainer>
}

export default BeProud;