import Rickroll from "./RickRoll";

import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  align-items: center;
  justify-content: center;
`;

const ClickMe = styled.div`
  font-size: 36px;

  &:hover {
    font-size: 48px;
    cursor: pointer;
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
