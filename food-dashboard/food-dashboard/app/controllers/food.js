import { Food } from '../models/Food.js';

document.getElementById('btnThemMon').onclick = () => {
    let food = new Food();

    let arrInput = document.querySelectorAll('form input, form textarea, form select');
    for (let input of arrInput) {
        let value = input.value;
        let id = input.id;
        food = { ...food, [id]: value };
    }
}