import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from 'app/product';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Array<Product> = [];
  loading: boolean = true;
  first: boolean = true;
  sortOrder!: number;
  sortField!: string;
  sortOptions!: SelectItem[];
  sortKey!: string;
  layout: string = 'list';
  rowsPerPageOptions: Array<number> = [5, 10, 20];

  constructor(private ProductsService: ProductsService) {
    this.loading = true;
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe({
      next: (v) => {
        this.products = <Product[]>v;
        console.info(this.products);
      },
      error: (e) => console.error(e),
      complete: () => this.loading = false
    });
  }

  clear(table: any) {
    table.clear();
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };
}
