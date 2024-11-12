import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  cars:any;

  constructor(private service:VehicleService,private router:Router,private wish:WishlistService){}

  ngOnInit(){
    this.service.getCars().subscribe((data)=>{
      this.cars=data;
      console.log(this.cars);
    });
  }

  openvehicle(id:any){
    console.log(id);
      this.router.navigateByUrl('/user/view/'+id);
  }


}
