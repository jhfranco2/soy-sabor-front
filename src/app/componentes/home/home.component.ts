import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pollos = [
    {
      imageUrl: 'assets/platos/pollo-asado.jpeg',
      title: '1 POLLO ASADO',
      description: 'Con papa salada,arepa,salsas y ají',
      price: '32.000'
    },
    {
      imageUrl: 'assets/platos/pollo-asado.jpeg',
      title: '1/2 POLLO ASADO',
      description: 'Con papa salada,arepa,salsas y ají',
      price: '17.000'
    }, 
    {
      imageUrl: 'assets/platos/pollo-asado.jpeg',
      title: '1/4 POLLO ASADO',
      description: 'Pierna pernil con papa salada, arepa, salsas y ají',
      price: '9.500'
    }, 
    {
      imageUrl: 'assets/platos/pollo-asado.jpeg',
      title: '1/4 POLLO ASADO',
      description: 'Pechuga ala con papa salada, arepa, salsas y ají',
      price: '9.000'
    },
    {
      imageUrl: 'assets/platos/pollo-asado.jpeg',
      title: '1 1/2 POLLO ASADO',
      description: 'Con papa salada, arepa, salsas y ají',
      price: '49.000'
    }
    
  ]
}
