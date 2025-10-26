import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}


type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: Product[];
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>('https://peticiones.online/api/products')
    );
  }
}

