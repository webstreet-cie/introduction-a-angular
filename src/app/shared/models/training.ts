import { Category } from './category';
import {Module} from './module';

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