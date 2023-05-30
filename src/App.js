import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './pages/Routing';
import { createContext, useState } from 'react';

const FirstName = createContext()
function App() {
  const [data, setdata] = useState(
    {
      name: 'selmon bhoi',
      age: 'still young',
      gender: 'male',
      service: 'destroying career available',
      vlog: 'mil mujhe kahi bahar',
      number: 5252552,
      help: 'thik hai bhai abb main chalta hun',
      hobby: 'play gta in real life',
      work: 'shaitan gali, khatra mahal, shamshan ke samne',
    }
  )
  return (
    <div>

      <FirstName.Provider value={data}>
        <Routing />
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName }
