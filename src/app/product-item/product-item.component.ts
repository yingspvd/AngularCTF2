import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  @Input()
  product: Product;
  
  @Output()
  OnSelected: EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit(this.product);
    }

}
