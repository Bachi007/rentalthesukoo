import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles:vehicle[]=[
    // Cars
    {
      vehicleId: 1,
      vehicleName: "Swift",
      vehicleCompany: "Maruti Suzuki",
      vehiclePrice: 1200,
      availableTime: "9:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/310x174/n/cw/ec/159231/swift-right-front-three-quarter.jpeg?isig=0&q=80",
      rating: 4.5
    },
    {
      vehicleId: 2,
      vehicleName: "City",
      vehicleCompany: "Honda",
      vehiclePrice: 2000,
      availableTime: "8:00 AM - 5:00 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80",
      rating: 4.7
    },
    {
      vehicleId: 3,
      vehicleName: "Creta",
      vehicleCompany: "Hyundai",
      vehiclePrice:1500,
      availableTime: "7:00 AM - 7:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 7,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80",
      rating: 4.6
    },
    {
      vehicleId: 4,
      vehicleName: "Fortuner",
      vehicleCompany: "Toyota",
      vehiclePrice: 3000,
      availableTime: "9:00 AM - 8:00 PM",
      fuelType: "Diesel",
      seatingCapacity: 7,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
      rating: 4.8
    },
    {
      vehicleId: 5,
      vehicleName: "Kwid",
      vehicleCompany: "Renault",
      vehiclePrice: 1200,
      availableTime: "8:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://www.cars24.com/new-cars/_next/image/?url=https%3A%2F%2Fcdn.cars24.com%2Fprod%2Fnew-car-cms%2FRenault%2FKwid%2F2024%2F04%2F09%2F0cb5ba8b-cf73-4a34-bfc5-40f47cccfb4e-Renault_Kwid_Fiery-Red.png&w=640&q=75",
      rating: 4.3
    },
    {
      vehicleId: 6,
      vehicleName: "Thar",
      vehicleCompany: "Mahindra",
      vehiclePrice: 3000,
      availableTime: "10:00 AM - 5:00 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80",
      rating: 4.9
    },
  
    // Bikes
    {
      vehicleId: 7,
      vehicleName: "Splendor Plus",
      vehicleCompany: "Hero",
      vehiclePrice: 400,
      availableTime: "7:00 AM - 9:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/127607/splendor-plus-xtec-right-side-view-2.jpeg?isig=0",
      rating: 4.2
    },
    {
      vehicleId: 8,
      vehicleName: "Pulsar 150",
      vehicleCompany: "Bajaj",
      vehiclePrice: 500,
      availableTime: "6:00 AM - 10:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/185667/pulsar-150-right-side-view-9.jpeg?isig=0",
      rating: 4.5
    },
    {
      vehicleId: 9,
      vehicleName: "FZ S V3",
      vehicleCompany: "Yamaha",
      vehiclePrice: 600,
      availableTime: "8:00 AM - 8:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/185667/pulsar-150-right-side-view-9.jpeg?isig=0",
      rating: 4.6
    },
    {
      vehicleId: 10,
      vehicleName: "Duke 250",
      vehicleCompany: "KTM",
      vehiclePrice: 800,
      availableTime: "9:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/185667/pulsar-150-right-side-view-9.jpeg?isig=0",
      rating: 4.7
    },
    {
      vehicleId: 11,
      vehicleName: "Bullet 350",
      vehicleCompany: "Royal Enfield",
      vehiclePrice: 900,
      availableTime: "10:00 AM - 7:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80",
      rating: 4.8
    },
    
  ];

  constructor() { }

  getAllVehicles(){
    return of(this.vehicles);
  }

  addvehicle(newvehicle:any){
    this.vehicles.push(newvehicle);
    return "added"
  }

  getVehicleById(id:any){
    return this.vehicles.find(vehicle=>vehicle.vehicleId==id);
  }

  deleteVehicle(id:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
    this.vehicles.splice(index,1);
    return "deleted";
  }

  updateVehicle(id:any,newvehicle:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
    this.vehicles.splice(index,1,newvehicle);
    return "updated"
  }

  getBikes(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Bike"));
  }

  getCars(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Car"));
  }

}
