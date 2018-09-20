import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.inteface';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    productos: Producto[] = [];
    productosCargados = false;
    productosFiltrado: Producto[] = [];

    constructor(private http: HttpClient) {
        this.cargarProductos();
    }

    private cargarProductos() {
        this.productosCargados = false;

        return new Promise((resolve, reject) => {
            this.http.get('https://porfolio-df0ac.firebaseio.com/productos_idx.json')
                .subscribe((data: Producto[]) => {
                    // console.log(data);

                    // setTimeout(() => {
                    this.productosCargados = true;
                    // }, 2000);
                    this.productos = data;

                    resolve();
                });

        });

    }

    public getProducto(id: string) {
        return this.http.get(`https://porfolio-df0ac.firebaseio.com/productos/${id}.json`);
    }

    public buscarProducto(texto: string) {

        if (this.productos.length === 0) {
            this.cargarProductos().then(() => {
                // Se ejecuta después
                this.filtrarProductos(texto);
            });
        } else {
            this.filtrarProductos(texto);
        }
    }

    private filtrarProductos(texto: string) {
        texto = texto.toLocaleLowerCase();

        this.productosFiltrado = this.productos.filter(producto => {
            return (producto.categoria.indexOf(texto) >= 0) || (producto.titulo.toLocaleLowerCase().indexOf(texto) >= 0);
        });

        // console.log(this.productosFiltrado);
    }

}
