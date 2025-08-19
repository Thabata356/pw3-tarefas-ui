import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core'; // inject -> Injetar um objeto
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl ='http://localhost:8080/tarefas'
  private http = inject(HttpClient)

  findAll(): Observable<Task[]>{ // Observable permite a espera pelodado, para não rodar enquanto não receber a lista
    return this.http.get<Task[]>(this.apiUrl); // Acessa a Api pela variável, especifica o método get e qual o retorno
  }

  constructor() { }
}
