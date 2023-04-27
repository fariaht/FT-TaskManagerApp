import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getTasks() {
    return this.http.get<Itask[]>("http://localhost:3000/tasks");
  }
}
