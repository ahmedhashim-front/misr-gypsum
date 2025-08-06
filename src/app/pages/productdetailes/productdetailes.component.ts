import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';

@Component({
  selector: 'app-productdetailes',
  imports: [TranslateModule, AnimateOnViewDirective],
  templateUrl: './productdetailes.component.html',
  styleUrl: './productdetailes.component.css',
})
export class ProductdetailesComponent {
  productFilters = [
    { label: 'PRODUCTS_PAGE.FILTERS.ALL', value: 'all' },
    { label: 'PRODUCTS_PAGE.FILTERS.GYPSUM', value: 'gypsum' },
    { label: 'PRODUCTS_PAGE.FILTERS.CEILINGS', value: 'ceilings' },
    { label: 'PRODUCTS_PAGE.FILTERS.FINISHING', value: 'finishing' },
    { label: 'PRODUCTS_PAGE.FILTERS.INSULATION', value: 'insulation' },
    { label: 'PRODUCTS_PAGE.FILTERS.ALUMINUM', value: 'aluminum' },
    { label: 'PRODUCTS_PAGE.FILTERS.MARBLE', value: 'marble' },
    { label: 'PRODUCTS_PAGE.FILTERS.CEMENT', value: 'cement' },
  ];
  productStats = [
    {
      id: 1,
      icon: 'box-open',
      value: '+30',
      label: 'PRODUCTS_PAGE.STATS.PRODUCTS',
    },
    {
      id: 2,
      icon: 'project-diagram',
      value: '+120',
      label: 'PRODUCTS_PAGE.STATS.PROJECTS',
    },
    {
      id: 3,
      icon: 'smile',
      value: '97%',
      label: 'PRODUCTS_PAGE.STATS.SATISFACTION',
    },
    {
      id: 4,
      icon: 'certificate',
      value: '5',
      label: 'PRODUCTS_PAGE.STATS.CERTIFICATES',
    },
  ];

  products = [
    {
      id: 1,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT1.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT1.DESCRIPTION',
      image: './img/geps.webp',
      category: 'gypsum',
    },
    {
      id: 2,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT2.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT2.DESCRIPTION',
      image: './img/ai-generated-modern-styled-entryway.webp',
      category: 'ceilings',
    },
    {
      id: 3,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT3.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT3.DESCRIPTION',
      image: './img/Interior Finishing Putty.webp',
      category: 'finishing',
    },
    {
      id: 4,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT4.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT4.DESCRIPTION',
      image: './img/Thermal and Acoustic Insulation Boards.webp',
      category: 'insulation',
    },
    {
      id: 5,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT5.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT5.DESCRIPTION',
      image: './img/Aluminum Profiles for Windows & Doors.webp',
      category: 'aluminum',
    },
    {
      id: 6,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT6.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT6.DESCRIPTION',
      image: './img/Synthetic Marble for Walls and Floors.webp',
      category: 'marble',
    },
    {
      id: 7,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT7.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT7.DESCRIPTION',
      image: './img/Sulfate-Resistant Cement.webp',
      category: 'cement',
    },
    {
      id: 8,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT8.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT8.DESCRIPTION',
      image: './img/Decorative Gypsum for Columns and Molding.webp',
      category: 'gypsum',
    },
    {
      id: 9,
      title: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT9.TITLE',
      description: 'PRODUCTS_PAGE.PRODUCTS.PRODUCT9.DESCRIPTION',
      image: './img/Ceilings.webp',
      category: 'gypsum',
    },
  ];
  features = [
    { id: 1, icon: 'check-circle', text: 'PRODUCTS_PAGE.FEATURES.0' },
    { id: 2, icon: 'fire-extinguisher', text: 'PRODUCTS_PAGE.FEATURES.1' },
    { id: 3, icon: 'tools', text: 'PRODUCTS_PAGE.FEATURES.2' },
    { id: 4, icon: 'headset', text: 'PRODUCTS_PAGE.FEATURES.3' },
  ];

  activeFilter: string = 'all';

  get filteredProducts() {
    if (this.activeFilter === 'all') {
      return this.products;
    }
    return this.products.filter(
      (product) => product.category === this.activeFilter
    );
  }

  setActiveFilter(filterValue: string) {
    this.activeFilter = filterValue;
  }
}
