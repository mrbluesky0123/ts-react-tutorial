import React, { useState, useEffect } from 'react'
// import logo from './logo.svg'
import './App.css'
import Greetings from './Greetings'
// import axios from 'axios'
// import {AxiosPromise} from 'axios'
import Todo from './model/Todo'
import * as RESTAPI from './common/RestApi'
import { AxiosResponse } from 'axios'

function App() {
    
    const [singletodo, setTodo] = useState<Todo>()
    
    
    useEffect(() => {
        
        const getTodo = async (id: number) => {
            console.log("%%%%%%%%%%asdasdasdasd ")
            await RESTAPI.getTodo(id)
            .then((result) => {
                console.log("%%%%%%%%%% result: " + result)
                setTodo(result)
                console.log("%%%%%%%%%% " + singletodo?.actnCmplDy)
            })
            
        }
        getTodo(12)
        
    }, [])
    
    
    return (
        <div className="App">
        <Greetings name='KANG'/>
        {singletodo?.actnCmplDy}
        </div>
        )
    }
    
    export default App;