import { Category } from './category.model';
import {Module} from './module.model';

export class Training {
    constructor(
     category: Category,
      title: String, 
      description:String, 
      goals:String[], 
      practicalWork: String, 
      pedagogicalMethods: String, 
      modules: Module[],
      durationInHours: Number,
      reference: String,
      price?: Number, 
      
      ) {
    }



  }