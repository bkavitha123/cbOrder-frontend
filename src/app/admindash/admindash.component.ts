import { Component, OnInit } from '@angular/core';
import { Delivery } from '../_model/delivery';
import { Product } from '../_model/product';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private service: RestService) { }
  products: Product[] = [];
  product = new Product();
  orders: Delivery[] = []
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(d => { console.log(d); this.products = d }, f => console.log(f));
    this.service.getAllDeliveries().subscribe(d => { console.log(d); this.orders = d }, f => console.log(f));
  }

  updateProductPrice(id: number, price: string) {
    if (price != "") {
      this.service.updateProductPrice(id, parseInt(price)).subscribe(d => { alert("Updated"); this.ngOnInit() }, f => console.log(f));
    } else {
      alert("Please Mention the Price")
    }

  }
  savegame(a: string, b: string, d: string) {
    this.product.productName = a;
    this.product.productImage = b;
    this.product.price = parseInt(d);
    this.service.addproduct(this.product).subscribe(d => { console.log(d); alert("Added Product SuccessFully"); this.ngOnInit() }, f => console.log(f));
  }

}
