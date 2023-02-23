import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environment.ts/environment';
import { IEscolaridade } from './IEscolaridades';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
  return this.httpClient.get<IEscolaridade[]>(`${API_PATH}/escolaridade`).toPromise();
  //  return this.httpClient.get<IEscolaridade[]>(`${API_PATH}Escolaridade`).pipe(
  //    map(Response => Response)
  //  );
  }
}
