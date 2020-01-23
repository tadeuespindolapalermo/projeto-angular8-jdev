import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getStudentList() : Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  deletarUsuario(id: Number) : Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});
  }

  consultarUsuarioPorNome(nome: String) : Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

  getStudent(id: String) : Observable<any>  {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  salvarUsuario(user: any) : Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);
  }

  atualizarUsuario(user: any) : Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);
  }

  userAutenticado() {
    if (localStorage.getItem('token') !== null && 
        localStorage.getItem('token').toString().trim() !== null) {
          return true;
    }
    return false;
  }

}
