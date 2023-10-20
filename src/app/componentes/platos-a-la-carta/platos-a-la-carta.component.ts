import { Component } from '@angular/core';

@Component({
  selector: 'app-platos-a-la-carta',
  templateUrl: './platos-a-la-carta.component.html',
  styleUrls: ['./platos-a-la-carta.component.css']
})
export class PlatosALaCartaComponent {

  platosCarta = [
    {
      imageUrl: 'assets/platos/bandeja-con-pollo.jpeg',
      title: 'BANDEJA CON POLLO',
      description: '1/4 de Pollo Asado, papa salada, yuca, patacón, arroz y ensalada',
      price: '17.000'
    },
    {
      imageUrl: 'assets/platos/arroz-con-pollo.jpg',
      title: 'ARROZ CON POLLO',
      description: 'Papa francesa, yuca y patacón',
      price: '18.500'
    },
    {
      imageUrl: 'assets/platos/bagre-frito.jpeg',
      title: 'BAGRE FRITO',
      description: 'Bagre 400gr, papa francesa, yuca, patacón, arroz y ensalada.',
      price: '18.500'
    },
    {
      imageUrl: 'assets/platos/mojarra.jpeg',
      title: 'MOJARRA',
      description: 'Mojarra 600gr, papa francesa, yuca, patacón, arroz y ensalada.',
      price: '27.000'
    },
    {
      imageUrl: 'assets/platos/trucha.jpeg',
      title: 'TRUCHA',
      description: 'Trucha 400gr, papa francesa, yuca patacón, arroz y ensalada',
      price: '27.000'
    }
  ]
}
