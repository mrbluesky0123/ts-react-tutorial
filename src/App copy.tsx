import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Greetings from './Greetings'
import axios from 'axios'
import {AxiosPromise} from 'axios'

const requestApi = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  // transformRequest: (r: ServerResponse) => r.data
})

interface ServerResponse {
  config: string,
  data: TodoResponse[],
  headers: string,
  request: string,
  status: string,
  statusText: string,
  __proto__: string
}

interface TodoResponse {
  id: number,
  pgmSts: string,
  regDt: string,
  regrId: string,
  pgmPart: string,
  pgmId: string,
  pgmNm: string,
  pgmHnm: string,
  dvlprId: string,
  sprvsrDscrptn: string,
  dvlprDscrptn: string,
  actnReqDy: string,
  actnPsbDy: string,
  actnCmplDy: string,
}

function App_() {
  console.log(typeof(typeof(requestApi)))
  const ddd: AxiosPromise<TodoResponse[]> = axios.get(`http://127.0.0.1:8080/alltodolistnew?status=ALL&partName=ALL&developerId=ALL`)
  ddd.then((responses) => {
    console.log(responses)
    for(var i: number = 0; i < responses.data.length; i++) {
      console.log(responses.data[i])
    }
  })
  
  return (
    <div className="App">
      <Greetings name='KANG'/>
    </div>
  )
}

export default App_;