import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.inteface';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    productos: Producto[] = [];
    productosCargados = false;

    constructor(private http: HttpClient) {
        this.cargarProductos();
    }

    private cargarProductos() {
        this.productosCargados = false;

        this.http.get('https://porfolio-df0ac.firebaseio.com/productos_idx.json')
            .subscribe((data: Producto[]) => {
                console.log(data);

                // setTimeout(() => {
                this.productosCargados = true;
                // }, 2000);
                this.productos = data;
            });
    }
}
