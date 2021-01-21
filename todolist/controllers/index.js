import { Task } from '../models/Task.js';
import { TaskService } from '../services/TaskService.js';

const taskService = new TaskService();

const getAllTasks = async () => {
    try {
        const result = await taskService.getAllTasks();
        console.log('result', result.data);
        renderTasks(result.data);
    } catch (error) {
        console.log(error);
    }
}

getAllTasks();

const renderTasks = (data) => {
    //render todo
    const contentToDo = data.filter(task => task.status === false).reduce((content, task, index) => {
        return content += `
        <li>
        <span class = "w-75" style="cursor: pointer;">${task.taskName}</span>    
            <a class="buttons text-right" style="cursor: pointer;"><i class="fa fa-trash"></i></a>
            <a class="buttons" style="cursor: pointer;"><i class="fa fa-check"></i></a>
        </li>
        `
    }, ``);

    const contentCompleted = data.filter(task => task.status === true).reduce((content, task, index) => {
        return content += `
        <li>
            <span class = "w-75" style="cursor: pointer;">${task.taskName}</span>
            <a class="buttons" style="cursor: pointer;"><i class="fa fa-trash"></i></a>
            <a class="buttons" style="cursor: pointer;"><i class="fa fa-redo"></i></a>
        </li>
        `
    }, ``);

    document.getElementById('todo').innerHTML = contentToDo;
    document.getElementById('completed').innerHTML = contentCompleted;
}

document.getElementById('addItem').onclick =async (event) => {
    const taskName = document.getElementById('newTask').value;

    const taskModel = new Task();
    taskModel.taskName = taskName;

    try {
        const result = await taskService.addTask(taskModel);
        getAllTasks();
    } catch (error) {
        console.log(error);
    }
}