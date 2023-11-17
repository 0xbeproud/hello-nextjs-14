import tw, { css, styled } from 'twin.macro';
import { StaticImageData } from 'next/image';

export const Page = styled.div`
  ${tw`flex flex-col items-center`}

  background: lightblue;
`;
export const Container = styled.div`
  ${tw`flex flex-col`}
  ${tw`w-[640] md:w-1/3 lg:w-1/2`}

  min-width: 640px;
  height: 100vh;

  background: lightgrey;
`;

export const NavigationBar = styled.div`
  ${tw`flex flex-row justify-center items-center`}

  width: 100%;

  height: 50px;
  background: white;
  border: 1px solid lightcoral;
`;

export const NavigationTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

export const VideoSection = styled.div``;

export const VideoBox = styled.video``;

export const AboutReplaceSection = styled.div`
  ${tw`flex flex-col xl:flex-row flex-wrap gap-6`}
`;
export const AboutReplaceSectionItem = styled.div`
  ${tw`flex-1`}

  color: black;
`;

export const StyledImage = styled.div<{ image?: StaticImageData }>`
  ${props =>
    props.image
      ? css`
          background-image: url(${props.image.src});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        `
      : undefined});

  ${tw`h-60 xl:h-96 w-full`}
`;
