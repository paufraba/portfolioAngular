import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styles: []
})
export class FooterComponent implements OnInit {

    year: number = new Date().getFullYear();

    constructor(public _ip: InfoPaginaService) { }

    ngOnInit() {
    }

}
