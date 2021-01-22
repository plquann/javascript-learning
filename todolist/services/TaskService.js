import { BaseService } from "./BaseService.js";

export class TaskService extends BaseService {

    constructor() {
        super();
    }
    getAllTasks() {
        return this.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask');
    }
    addTask(task) {
        return this.post('http://svcy.myclass.vn/api/ToDoList/AddTask',task);
    }
    deleteTask(taskName) {
        return this.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`);
    }
    doneTask(taskName) {
        return this.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`);
    }
    rejectTask(taskName) {
        return this.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`);
    }
}