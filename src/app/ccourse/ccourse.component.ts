import { Component } from '@angular/core';

@Component({
  selector: 'app-ccourse',
  templateUrl: './ccourse.component.html',
  styleUrl: './ccourse.component.css'
})


export class CcourseComponent {
  //declaracion de propiedades o atributos

  private courses!:string[];
  private response:string|boolean;//union de tipos
  title:string = "Formulario de registro";
  dir:string = "Uniempresarial";

  constructor(){
    this.courses = ['JAVA','PYTHON','JAVASCRIPT','TYPESCRIPT','C#'];
    this.response = "";
  }

  //metodos
  public getCourses():string[]{
    return this.courses;
  }

  public getResponse():string|boolean{
    console.log(this.response);
    return this.response;
  }

  public registerCourse(name:string,age:string,courses:string){
    return this.response=`Se ha inscrito en el Curso: ${courses} el estudiante: ${name} de edad: ${age}`;
  }

  public getRegisterCourse(name:string,age:string,courses:string){
    this.registerCourse(name,age,courses);
  }

}
