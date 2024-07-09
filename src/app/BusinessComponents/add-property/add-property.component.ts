import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../Services/Property/property.service';
import { GetPropertyGeolocationService } from '../../Services/get-property-geolocation.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { Route } from '@angular/router';
import { finalize } from 'rxjs';
import { Console } from 'console';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  property: any = {
    type: '',
    location: '',
    parking: '',
    rooms: '',
    electricity: '',
    area:'',
    coordinates: {
      lat:0,
      lng:0,
    },
    bathroom: '',
    price: '',
    description: '',
    images: []
  };

  foundProperty:boolean = true

  UIPosition:number = 0;

  imageCount:number[] = [];

  constructor(
    private propertyService: PropertyService,
    private authService: AuthService,
    private router: Router,
    private propertyGeolocation:GetPropertyGeolocationService
  ) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  images:any = [];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

  

    this.property.images.push(event.target.files[0])
    
    reader.onload = async (event:any) => {
      this.images.push(event.target.result);
    };

    reader.readAsDataURL(file);

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.uploadProperty(form)
    }
    // alert("yess")
  }

  GetAccuratePropertyGeolocation(){
    
      
    if(this.property.location.trim()){
      this.propertyGeolocation.GetAddressGeolocation(this.property.location)
      .pipe(finalize(() => {
        // This will execute after a response is gotten whether an error or success. right place to hide a loader
      })).subscribe({
        next: (data) => {
          if(data){
            this.property.location = data.formatted_address
            this.property.coordinates = data.geometry.location
            this.property.area = data.address_components[2].long_name
    
            // setTimeout(()=>{
              this.foundProperty = false
            // }, 2000)
            
          }
        },
        error: (error) => {
          alert("We've encounter an error: " + error)
          console.error(error)
        }
      });
      
    }
    
  }

  uploadProperty(form: NgForm){
  
    const formData = new FormData();
    formData.append("type", this.property.type)
    formData.append("location", this.property.location)
    formData.append("parking", this.property.parking)
    formData.append("rooms", String(this.property.rooms))
    formData.append("electricity", String(this.property.electricity))
    formData.append("area", this.property.area)
    formData.append("coordinates", JSON.stringify(this.property.coordinates))
    formData.append("bathroom", String(this.property.bathroom))
    formData.append("price", String(this.property.price))
    formData.append("images", '')
    formData.append("description", this.property.description)

    for(let i = 0; i < this.property.images.length; i++){
      formData.append(`image-${i}`, this.property.images[i])
    }
     

    this.propertyService.createProperty(formData).pipe(finalize(() => {
      // This will execute after a response is gotten whether an error or success. right place to hide a loader
    })).subscribe({
      next: (message) => {
        console.log('Property added successfully:');
        // form.reset();
        // this.property.images = [];
        // this.router.navigate(['/homeview']);
      },
      error: (error) => {
        alert(error)
      }
    });
  }

  ControlPages(MoveTo:string){
    if(MoveTo == "next"){
      this.UIPosition +=1;
    }
    else{
      this.UIPosition -=1;
    }
    
  }

  AddImageCount(){
    this.imageCount.push((this.imageCount.length -1) + 1)
  }
}
