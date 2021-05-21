import { useEffect, useState } from "react";
import "./styles.css";


function useWindowDimensions() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');


  useEffect(() => {

    const listener = () =>  {

      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  });

  return {
    width,
    height
  };
}



export default function App() {
  const {width, height} = useWindowDimensions();
  return (
    <div className="App">
      <h1>{`width: ${width}`}</h1>
      <h1>{`height: ${height}`}</h1>
      <p>Resize the window</p>
    </div>
  );
}
