import tw, { css, styled } from 'twin.macro';
import { StaticImageData } from 'next/image';

export const Page = styled.div`
  ${tw`flex flex-col items-center`}
`;
export const Container = styled.div`
  ${tw`flex flex-col`}
  ${tw`w-[640] md:w-1/3 lg:w-1/2`}
  min-width: 640px;
  height: 100vh;
`;

export const NavigationBar = styled.div`
  ${tw`flex flex-row justify-center items-center`}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.6;

  height: 80px;
  background: white;
  z-index: 2;
`;

export const NavigationTitle = styled.div`
  color: black;
  font-weight: 900;
  font-size: 40px;
`;

export const VideoSection = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const VideoBox = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
    filter: alpha(opacity=80);
  }
`;

export const AboutReplaceSection = styled.div`
  ${tw`flex flex-col xl:flex-row flex-wrap gap-6`}
`;
export const AboutReplaceSectionItem = styled.div`
  ${tw`flex-1`}
`;

export const StyledImage = styled.div<{ image?: StaticImageData }>`
  ${props =>
    props.image
      ? css`
          background-image: url(${props.image.src});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        `
      : undefined});

  ${tw`h-40 xl:h-80 w-full`}
`;
