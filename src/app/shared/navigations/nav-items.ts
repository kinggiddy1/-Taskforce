export const NAV_ITEMS: Record<string, Array<{ label: string; link: string; icon: string }>> = {
    Admin: [
      { label: 'Dashboard', link: '/dashboard', icon: 'house-check-fill' },
      { label: 'Orders', link: '/orders', icon: 'list-ol' },
      { label: 'Users', link: '/users', icon: 'people' },
      { label: 'Products', link: '/products', icon: 'grid' },
      { label: 'Customers', link: '/customers', icon: 'person-square' },
    ],
    User: [
      { label: 'Home', link: '/user-dashboard', icon: 'house' },
      { label: 'Orders', link: '/orders', icon: 'list-ol' },
      { label: 'Transactions', link: '/transactions', icon: 'database' },
    ],
  };
  