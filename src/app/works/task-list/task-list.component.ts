import { Component, OnInit } from '@angular/core';
import { ITask } from "./task.interface";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskList: Array<ITask> = [
    {
      content: 'HTML5',
      done: true,
    },
    {
      content: 'CSS3',
      done: false,
    },
    {
      content: 'SCSS',
      done: false,
    },
    {
      content: 'Javascript',
      done: false,
    },
    {
      content: 'Typescript',
      done: false,
    },
    {
      content: 'Angular',
      done: false,
    },
  ];
  public newTask: ITask = {
    content: '',
    done: false,
  };
  public isEdit = false;
  public edited!: string;
  public editIndex!: number | null;

  ngOnInit(): void {}

  public addTask(): void {
    if (this.newTask.content) {
      this.taskList.push(this.newTask);
    }
  }

  public editTask(index: number): void {
    this.isEdit = true;
    this.edited = this.taskList[index].content;
    this.editIndex = index;
  }

  public updateTask(): void {
    if (this.edited) {
      this.taskList[this.editIndex as number].content = this.edited;
      this.isEdit = false;
    }
  }
  
  public cancelUpdate(): void {
    this.isEdit = false;
  }

  public deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

}
