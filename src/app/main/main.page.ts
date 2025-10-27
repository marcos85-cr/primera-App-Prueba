import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Product, ProductsService } from '../services/products.services';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, RouterLink]
   
  
})
export class ProductListPage implements OnInit {

  products: Product[] = [];

  productsService = inject(ProductsService);

  

  async ngOnInit() {
    const response = await this.productsService.getAll();
    this.products = response.results;
  }

}
