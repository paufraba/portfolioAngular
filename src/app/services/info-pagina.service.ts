import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;
    equipo: any;
    equipoCargado = false;

    constructor(private http: HttpClient) {
        this.cargarInfo();
        this.cargaEquipo();
    }

    private cargarInfo() {
        this.cargada = false;

        this.http.get('assets/datos/datos-globales.json')
            .subscribe((data: InfoPagina) => {
                // console.log(data);
                this.cargada = true;
                this.info = data;
            });

    }

    private cargaEquipo() {
        this.equipoCargado = false;

        this.http.get('https://porfolio-df0ac.firebaseio.com/equipo.json')
            .subscribe((data: any[]) => {
                console.log(data);
                this.equipoCargado = true;
                this.equipo = data;
            });
    }
}
