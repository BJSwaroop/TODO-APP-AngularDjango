import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentserviceService } from '../contentservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todoapi',
  templateUrl: './todoapi.component.html',
  styleUrls: ['./todoapi.component.scss']
})
export class TodoapiComponent implements OnInit {
  
  todos$: any;
  inputText :string = "I am sample text";
  task$ !: string;
  
  getData(){
    return this.todos$ = this.contentService.FetchTodos();
  }

  constructor(private contentService: ContentserviceService) { 
    this.getData();
  }

  data:any;
  ngOnInit(): void {
  }
  newElement(){
    this.data = {
      "task" : this.task$,
      "completed": "false"
    }
    this.contentService.CreateTodo(this.data).subscribe(
      {
        next: (n) =>{
          this.getData();
          // console.log(n)
        }
      }
      );
  }
  checkUncheck(event:any,todo:any){
    this.data = {
      "task" : todo.task,
      "completed": "true"?!todo.completed:"false"
    }
    this.contentService.UpdateTodo(this.data,todo.id).subscribe({
      next: (n) =>{
        this.getData();
        // console.log(n)
      }
    }
    );
  }
  deleteTask(event:any,id:any){
   console.log(id)
    this.contentService.delete(id).subscribe({
      next: (n) =>{
        this.getData();
        // console.log(n)
      }
    }
    );
  }
}
