import React from "react";
import {MainTitle, Summary, Title} from "./styled";
import {SlideContainer, Wrapper} from "../styled";

const BeProud = () => {
    return <SlideContainer>
        <Wrapper>
            <Title>Be:Proud</Title>
            <MainTitle text={"이 텍스트는 화면 크기에 따라 크기가 변경됩니다."}/>
            <Summary>The race is on</Summary>
        </Wrapper>
    </SlideContainer>
}

export default BeProud;