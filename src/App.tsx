
// true means open, false means closed

import { useState } from "react";
import Intro from "./components/Intro";
import TelescopingRun from "./components/TelescopingRun";

function App() {
  const [tel, setTel] = useState<boolean>(false);

  return !tel ? (
    <Intro onClick={() => setTel(true)} />
  ) : (
    <TelescopingRun />
  )
}

export default App
