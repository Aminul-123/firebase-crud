//import { useState } from 'react';
import './App.css';
import Storage from './components/Storage';
//import FireStore from './components/FireStore';

import FireAuth from './components/FireAuth';

function App() {
 
  return (
   <>
 
<FireAuth/>
{/* <FireStore/> */}
<Storage/>
   </>
  );
}

export default App;
