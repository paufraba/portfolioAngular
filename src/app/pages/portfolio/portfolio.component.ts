import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styles: []
})
export class PortfolioComponent implements OnInit {

    constructor(public _productos: ProductosService) { }

    ngOnInit() {
    }

}
