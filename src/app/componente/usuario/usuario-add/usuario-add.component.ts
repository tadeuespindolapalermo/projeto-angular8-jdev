import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

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
    console.info(this.usuario);
  }

}
