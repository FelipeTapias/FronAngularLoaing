export class Producto {
  _id?: number;
  producto: string;
  categoria: string;

  constructor(producto: string, categoria: string){
    this.producto = producto;
    this.categoria = categoria;
  }
}
