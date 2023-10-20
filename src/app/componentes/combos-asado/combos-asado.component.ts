import { Component } from '@angular/core';

@Component({
  selector: 'app-combos-asado',
  templateUrl: './combos-asado.component.html',
  styleUrls: ['./combos-asado.component.css']
})
export class CombosAsadoComponent {

  combo_asado = [
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO 1',
      description: '1/2 Pollo Asado, papa salada, plátano y arepa',
      price: '20.000'
    },
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO 2',
      description: '1 Pollo Asado, papa salada, plátano y arepa',
      price: '36.000'
    },
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO 3',
      description: '1 Pollo Asado, papa salada, plátano y arepa y gaseosa 1.5L',
      price: '40.000'
    },
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO 4',
      description: '1 1/2 Pollo Asado, papa salada, plátano y arepa',
      price: '50.000'
    },
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO 5',
      description: '1 1/2 Pollo Asado, papa salada, plátano y arepa y gaseosa 1.5L',
      price: '54.000'
    },
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO 6',
      description: '2 Pollos Asados,papa  salada, plátano,arepa y gaseosa 1.5L',
      price: '73.000'
    },
    {
      imageUrl: 'assets/platos/combo-1.jpeg',
      title: 'COMBO PERSONAL',
      description: '1/4 de Pollo (Pechuga-Ala), media sopa con porción de arroz y 1 gaseosa 250 ml',
      price: '16.500'
    }
  ]
}
