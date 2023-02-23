import { Component } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import { EscolaridadeService } from './escolaridade.service';
import { IEscolaridade } from './IEscolaridades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoAngular';
  escolaridades:Array<any> = new Array();

  constructor(private escolaridadeService: EscolaridadeService)
  {}  

  obterEscolaridade(){
    this.escolaridadeService.obterTodos()
       .then(escolaridades => {
        this.escolaridades.splice(0,this.escolaridades.length);
        if(escolaridades)
          escolaridades.forEach(value => this.escolaridades.push(value));
        console.log(escolaridades);
        })
       .catch(error => console.error(error));
  }

  //public async obterEscolaridade() {
  //  const escolaridade$ = this.escolaridadeservice.obterTodos();
  //  const escolaridade = await lastValueFrom(escolaridade$);
  //  console.log(escolaridade);
  //}
}
