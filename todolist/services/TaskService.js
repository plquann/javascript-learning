export class TaskService {
    
    constructor(){

    }
    getAllTasks(){
        return axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        });
    }
    addTask(task){
        return axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: task,
        });
    }
    deleteTask(taskName){
        return axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
        }); 
    }

}