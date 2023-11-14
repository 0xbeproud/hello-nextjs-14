import styled, {css} from "styled-components";

export const Title = styled.div.attrs(props => ({
    className: "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
}))`
  color: white;
  font-size: 140px;
  font-weight: bold;
`;

export const Summary = styled.h1`
  color: grey;
  font-size: 30px;
  font-weight: bold;
`;

export const BigTitle = styled.h1`
  color: white;
  font-size: 140px;
  font-weight: bold;
`;

export const MainTitle = ({text}: {text: string}) => {
    return (
        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {text}
        </div>
    )
}