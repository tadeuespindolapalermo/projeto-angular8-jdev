import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Array<User[]>;
  nome: String;
  total: number;
  p: number;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data.content;
      this.total = data.totalElements;
    });

  }


  deleteUsuario(id: Number, index) {

    if (confirm('Deseja mesmo remover?')) {

      this.usuarioService.deletarUsuario(id).subscribe(data => {
        //console.log("Retorno do método delete : " + data);

        this.students.splice(index, 1); /*Remover da tela*/

        // this.usuarioService.getStudentList().subscribe(data => {
        //  this.students = data;
        // });

      });
    }
  }

  consultarUser() {

    if (this.nome === '') {
      this.usuarioService.getStudentList().subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }


  carregarPagina(pagina) {


    if (this.nome !== '') {
      this.usuarioService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.usuarioService.getStudentListPage(pagina - 1).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }

  }

}
