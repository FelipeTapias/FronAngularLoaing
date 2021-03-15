import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;
  loading = false;
  PRODUCTOS:Array<Producto> = [
  ];

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  agregarProducto(){

    this.loading = true;

    let PRODUCTO:Producto = {
      producto: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value
    }

    setTimeout(() => {
      this.PRODUCTOS.push(PRODUCTO);
      this.toastr.success('El usuario fue registado con éxito', 'Usuaio registrado!');
      this.loading = false;
    }, 2000);

    this.productoForm.reset();
    console.log(PRODUCTO);
    this.router.navigate(['/']);
  }

}
