import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalle } from '../../interfaces/producto-detalle.interfaces';


@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styles: []
})
export class ItemComponent implements OnInit {

    productoCargado = false;
    producto: ProductoDetalle;
    id: string;

    constructor(private route: ActivatedRoute,
        public _producto: ProductosService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            // console.log(params['id']);

            this._producto.getProducto(params['id'])
                .subscribe((producto: ProductoDetalle) => {
                    // console.log(producto);

                    this.id = params['id'];
                    this.producto = producto;
                    this.productoCargado = true;
                });

        });
    }

}
