import RickRollRoll from "./modules/RickRollRoll";

import styled from "styled-components";
import { useState } from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

  background: red;
`;



function App() {
  const [muted, setMuted] = useState(true);

  return (
    <Layout onClick={() => setMuted(false)}>
      <RickRollRoll muted={muted} setMuted={setMuted}/>
    </Layout>
  );
}

export default App;
