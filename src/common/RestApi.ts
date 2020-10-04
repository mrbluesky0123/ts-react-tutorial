import axios, { AxiosError, AxiosResponse } from 'axios'
import Todo from '../model/Todo'

const baseUrl: string = 'http://127.0.0.1:8080'

const getTodolist = (status: string, partName: string, developerId: string) => {
    
    let url: string = baseUrl + `/alltodolistnew?status=${status}&partName=${partName}&developerId=${developerId}`
    let todolist: Todo[] = new Array<Todo>()
    
    axios.get(url)
         .then((response: AxiosResponse<Todo[]>) => {
             console.log(response)
             todolist = response.data
         })
         .catch((reject: AxiosError) => console.log('##### ' + reject.message))
    
    for(var i: number = 0; i < todolist.length; i++) {
        console.log('@@@@ ' + todolist[i])
    }
    
    return todolist

}

export const getTodo = (id: number) =>{

    let url: string = baseUrl + `/todo/${id}`
    // return axios.get(url)
    return new Promise<Todo>((resolve, reject) => {
        axios.get(url)
             .then((response: AxiosResponse<Todo>) => {
                resolve(response.data)
                console.log(response.data)
             })
             .catch((reject: AxiosError) => console.log('##### ' + reject.message))
    })
    
}

export {getTodolist}