import React from "react";
import {Content, MenuBar, Menu, Summary, Title, Wrapper} from "./styled";
import {SlideContainer} from "../styled";
import BeProudImage from "@images/about/pfp7946.png";

const BeProudSlide = () => {
    return <SlideContainer bgImage={BeProudImage}>
        <Wrapper>
            <MenuBar>
                <Menu className="flex-none">home</Menu>
                <Menu className="flex-none ml-auto">menu2</Menu>
                <Menu className="flex-none ml-2">menu3</Menu>
            </MenuBar>
            <Content>
                <Title className="text-4xl md:text-6xl lg:text-8xl">Be:Proud</Title>
                <Summary className="text-base md:text-2xl lg:text-3xl">
                    Self-esteem is the belief that you are a valuable person worthy of love and capable of accomplishing
                    something.
                </Summary>
            </Content>
        </Wrapper>
    </SlideContainer>
}

export default BeProudSlide;