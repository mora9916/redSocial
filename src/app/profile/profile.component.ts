import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  //Atributos
  user= {
  firstName: "Luis",
  lastName: "Mora",
  email: "luisedumr@hotmail.com",
  username: "lu.mora9916",
  pasatiempo: "Billar",
  imageUrl: "/chico.jpg",
  };

  //Métodos
  //Cambio de imagen
  onImageChange(event: Event){
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload=()=>{
        this.user.imageUrl=reader.result as string;
      };

      reader.readAsDataURL(file);
    }//fin del if
  }//fin del método
  
}
