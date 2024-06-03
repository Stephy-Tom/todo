import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Listtodo from './components/Listtodo';
import { useState } from 'react';

function App() {
  const [uploadStatus,setUploadStatus]=useState();
  return (
    <div className='d-grid justify-content-center align-items-center'>
       <Addtodo setUploadStatus={setUploadStatus} ></Addtodo>
     <Listtodo uploadStatus={uploadStatus}></Listtodo>
    </div>
  );
}

export default App;
