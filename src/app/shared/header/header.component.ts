import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent implements OnInit {

    constructor(public _ip: InfoPaginaService,
        public route: Router) { }

    ngOnInit() {
    }

    buscarProducto(texto: string) {
        // console.log(texto);

        if (texto.length > 0) {
            this.route.navigate(['/search', texto]);
        }
    }

}
