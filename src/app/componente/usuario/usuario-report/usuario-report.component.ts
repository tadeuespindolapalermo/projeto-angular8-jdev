import { UserReport } from './../../../model/UserReport';
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }


  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }


}


@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/'; // 18/10/1987



  parse(value: string): NgbDateStruct | null {

    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct): string | null {

    return date ? validarDia(date.day) + this.DELIMITER + validarDia(date.month) + this.DELIMITER + date.year : '';
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

}


function validarDia(valor) {
  if (valor.toString !== '' && parseInt(valor) <= 9) {
    return '0' + valor;
  } else {
    return valor;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './usuario-report.component.html',
  styleUrls: ['./usuario-report.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
  { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class UsuarioReportComponent  {

  userReport = new UserReport();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) {
  }

  imprimirRelatorio() {
    this.userService.downloadPdfRelatorioParam(this.userReport);
  }


  ngOnInit() {


  }








}

