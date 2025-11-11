import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient)

  autenticar(username: string, password: string): Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, 
      { username, password });
  }

  //Token gerado no Postman: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlkIjoxLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NjI4NjgwNTgsImV4cCI6MTc2Mjg2ODE3OH0.bIYynKP7JAo7v4m95iCMl9gzBAuJ2xYulJ1qaWDrX1s

}
