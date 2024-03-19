import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'products',
    labels: {
      en: "Products",
      fr: "Produits"
    },
    link: '/products'

  },
  {
    id: 'admin-products',
    labels: {
      en: "Products administration",
      fr: "Administration produits"
    },
    link: '/admin/products'

  }

];