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
            <span class="buttons text-right" style="cursor: pointer;" onclick="delTask('${task.taskName}')"><i class="fa fa-trash"></i></span>
            <span class="buttons" style="cursor: pointer;" onclick="doneTask('${task.taskName}')"><i class="fa fa-check"></i></span>
        </li>
        `
    }, ``);

    const contentCompleted = data.filter(task => task.status === true).reduce((content, task, index) => {
        return content += `
        <li>
            <span class = "w-75" style="cursor: pointer;">${task.taskName}</span>
            <span class="buttons" style="cursor: pointer;" onclick="delTask('${task.taskName}')"><i class="fa fa-trash"></i></span>
            <span class="buttons" style="cursor: pointer;" onclick="rejectTask('${task.taskName}')"><i class="fa fa-redo"></i></span>
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

window.delTask = async (taskName) => {
    try {
        const result = await taskService.deleteTask(taskName);
        getAllTasks();
    } catch (err) {
        console.log(err);
    }
}

window.doneTask = async (taskName) => {
    try {
        const result = await taskService.doneTask(taskName);
        getAllTasks();
    } catch (err) {
        console.log(err);
    }
}

window.rejectTask = async (taskName) => {
    try {
        const result = await taskService.rejectTask(taskName);
        getAllTasks();
    } catch (err) {
        console.log(err);
    }
}