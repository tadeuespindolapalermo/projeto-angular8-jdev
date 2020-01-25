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
  nome : String;

  constructor(private usuarioSevice : UsuarioService) { }

  carregarUsuarios() {
    this.usuarioSevice.getStudentList().subscribe(data  => {
      this.students = data;
    });
  }

  ngOnInit() {
    this.carregarUsuarios();
  }

  deletarUsuario(id: Number) {
    if (confirm('Deseja mesmo remover?')) {
      this.usuarioSevice.deletarUsuario(id).subscribe(data => {
        console.log("Retorno do método delete: " + data);
        this.carregarUsuarios();
      });
    }
  }

  consultarUsuarioPorNome() {
    this.usuarioSevice.consultarUsuarioPorNome(this.nome).subscribe(data => {
      this.students = data;
    });
  }

}
