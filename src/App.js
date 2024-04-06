import './App.css';

import {useEffect, useRef} from 'react';

export default function App() {
  const refContainer = useRef(null);

  useEffect(() => {
    // 👇️ This is reference to input element
    console.log(refContainer.current);

    refContainer.current.focus();
  }, []);

  return (
    <div>
      <input type="text" id="message" ref={refContainer} />
    </div>
  );
}
