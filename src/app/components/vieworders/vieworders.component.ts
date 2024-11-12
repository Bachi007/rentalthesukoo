import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {

  orders:any;
  constructor(private order:OrderService){}


  ngOnInit(){
    this.order.getOrders().subscribe((res)=>{
      this.orders=res;
      console.log(this.orders)
    }
    )}
}
