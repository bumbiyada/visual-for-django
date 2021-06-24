import React, { useState, useEffect } from 'react';
import ButtonFunction from './buttons/Butons';
import axios from 'axios';

function App() {

    const [state, setState] = useState([]);

    useEffect(()=> {
    axios
        .get('http://localhost:8000/api/v1/mainapp/list')
        .then(response => {setState(response.data)})
        }, [])
    //console.log(response.data)
    console.log(state[0])
    console.log(typeof(state))
  return (
    <div className='wrapper'>
      <h1>Visual</h1>
      <ButtonFunction></ButtonFunction>

            {state.map((p) => (
            <ul>
                <li>{p.id} id</li>
                <li>{p.Foiv} Foiv</li>
                <li>{p.Document_type} doc type</li>
                <li>{String(p.Is_aborted)} is aborted</li>
                <li>{String(p.Is_done)} is done</li>
                <li>{String(p.Marked_on_delete)} marked on 'delete'</li>
            </ul>
            ))}

    </div>



    );
}

export default App;
