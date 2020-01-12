import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students : Observable<User[]>;

  constructor(private usuarioSevice : UsuarioService) { 

  }

  ngOnInit() {
    this.usuarioSevice.getStudentList().subscribe(data  => {
      this.students = data;
    });
  }

}
