import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Telefone } from 'src/app/model/telefone';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  telefone = new Telefone();

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get("id");
    if (id != null) {
      this.usuarioService.getStudent(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  salvarUsuario() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.usuarioService.atualizarUsuario(this.usuario).subscribe(data => {
        this.novo();
        console.info("User atualizado: " + data);
      });
    } else {
      this.usuarioService.salvarUsuario(this.usuario).subscribe(data => {
        this.novo();
        console.info("Gravou user: " + data);
      });
    }
  }

  deletarTelefone(id: any, i: any) {
    if (id == null) {
      this.usuario.telefones.splice(i, 1);
      return;
    }
    if (id !== null && confirm("Deseja remover?")) {
      this.usuarioService.removerTelefone(id).subscribe(data => {
        this.usuario.telefones.splice(i, 1);
      });
    }
  }

  addFone() {
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }

  novo() {
    this.usuario = new User();
    this.telefone = new Telefone();
  }

}
