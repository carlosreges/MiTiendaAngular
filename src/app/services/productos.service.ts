import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos:Producto[]=[];
  productosFiltrado: Producto[]=[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://mitiendaangular-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp:any) => {
      this.productos = resp;

      setTimeout(() => {
        this.cargando = false;
      }, 3000);
    });
  }

  getProducto( id: String) {
    return this.http.get(`https://mitiendaangular-default-rtdb.firebaseio.com/productos/${ id }.json`);
    }

  buscarProducto(termino: string){

    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });
  }
}