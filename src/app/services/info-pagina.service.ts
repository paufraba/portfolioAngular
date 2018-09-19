import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    constructor(private http: HttpClient) {
        this.cargada = false;

        this.http.get('assets/datos/datos-globales.json')
            .subscribe((data: InfoPagina) => {
                console.log(data);
                this.cargada = true;
                this.info = data;
            });
    }
}
