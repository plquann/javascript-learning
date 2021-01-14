import {Glasses} from './Glasses.js';

export class Model {
    glassesDetail = new Glasses();

    constructor(){

    }

    changeGlasses(newGlasses){
        this.glassesDetail = newGlasses;
    }
};