import Rickroll from "./RickRoll";

import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto;

  align-items: center;
  justify-content: center;
`;

const ClickMe = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75vw;

  align-items: center;
  padding: 5em;
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    padding-bottom: 3em;
  }
`;

interface RickRollRollProps {
  muted: boolean;
  setMuted: (value: boolean) => void;
}

const RickRollRoll: React.FC<RickRollRollProps> = ({ muted, setMuted }) => {
  const [roll, setRoll] = useState<JSX.Element[]>([]);
  const [rickCounter, setRickCounter] = useState(0);

  const addRoll = useCallback(() => {
    setRickCounter(rickCounter + 1);
  }, [rickCounter]);

  useEffect(() => {
    if (roll.length < rickCounter) {
      setRoll([
        ...roll,
        <Rickroll muted={muted} setMuted={setMuted} addRoll={addRoll} />,
      ]);
    }
    if (roll.length > 0) {
      setMuted(false);
    }
  }, [roll, setRoll, rickCounter, setMuted, addRoll, muted]);

  return (
    <>
      {roll.length === 0 && (
        <ClickMe onClick={() => addRoll()}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/1280px-Mario_Series_Logo.svg.png"
            alt="Super mario"
          />
          Klikk her for å starte spillet!
        </ClickMe>
      )}
      <Layout onClick={() => setMuted(false)}>
        {roll.map((rick) => rick)}
      </Layout>
    </>
  );
};

export default RickRollRoll;
