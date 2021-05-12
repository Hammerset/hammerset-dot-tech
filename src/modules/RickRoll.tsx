import React, { useRef, useState } from "react";

import ReactPlayer from "react-player";

import styled from "styled-components";

const ClickMeLol = styled.div`
  position: absolute;
  z-index: 100;
  width: 1080px;
  height: 630px;

  background: none;
`;

const RickWrapper = styled.div`
  max-width: 100vw;
`;

interface RickrollProps {
  muted: boolean;
  setMuted: (value: boolean) => void;
  addRoll: () => void;
}

const Rickroll: React.FC<RickrollProps> = ({ muted, setMuted, addRoll }) => {
  const [play, setPlay] = useState<boolean>(false);
  const ref = useRef<ReactPlayer | null>(null);

  const handleClick = (event: React.MouseEvent) => {
    console.log("HALLA BALLA");
    event.stopPropagation();
    setMuted(false);
    addRoll();
  };

  return (
    <RickWrapper onClick={(event) => handleClick(event)}>
      <ClickMeLol onClick={(event) => handleClick(event)} />
      <ReactPlayer
        ref={ref}
        url="https://www.youtube.com/embed/oHg5SJYRHA0"
        playing={play}
        muted={muted}
        onReady={() => {
          setPlay(true);
        }}
        controls={false}
        loop
        fullscreen
        width={"auto"}
        height={"auto"}
      />
    </RickWrapper>
  );
};

export default Rickroll;
