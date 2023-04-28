
const menus = [
    {
      url: "/",
      name: "Dashboard",
      slug: "dashboard",
      icon: "desktop",
      gate: undefined,
    },
    {
      navheader: "Modules",
    },
    {
      url: "#",
      name: "Customer",
      slug: "customers",
      icon: "users",
      gate: "passengers.index",
      submenu: [
        {
          url: "/users",
          name: "Passengers",
          slug: "clients",
          icon: "bx bx-right-arrow-alt",
          gate: "passengers.index",
        },
        {
          url: "/clients/add",
          name: "Add Passenger",
          slug: "register-clients",
          icon: "bx bx-right-arrow-alt",
          gate: "passengers.save",
        },
      ],
    },
    {
      url: "#",
      name: "Drivers",
      slug: "app-email",
      icon: "envelope-pull",
      gate: "providers.index",
      submenu: [
        {
          url: "/drivers",
          name: "Drivers",
          slug: "register",
          icon: "envelope-pull",
          gate: "providers.index",
        },
        {
          url: "/drivers/add",
          name: "Add Driver",
          slug: "providers",
          icon: "bx bx-right-arrow-alt",
          gate: "providers.save",
        },
        {
          url: "/stations",
          name: "Stations",
          slug: "stations",
          icon: "check-alt",
          gate: 'stations.index',
        },
      ],
    },
    // {
    //   url: "#",
    //   name: "Corporates",
    //   slug: "app-email",
    //   icon: "calendar",
    //   submenu: [
    //     {
    //       url: "/corporates",
    //       name: "Corporates",
    //     },
    //     {
    //       url: "/corporates/add",
    //       name: "Add Corporates",
    //     },
    //   ],
    // },
    {
      url: "#",
      name: "Managers",
      slug: "app-email",
      icon: "grid",
      gate: 'managers.index',
      submenu: [
        {
          url: "/managers",
          name: "Managers",
          slug: "managers",
          gate: 'managers.index',
        },
        {
          url: "/add-managers",
          name: "Add managers",
          slug: "add-managers",
          gate: 'managers.save',
        },
      ],
    },
    {
      url: "#",
      name: "Users",
      slug: "app-email",
      icon: "grid",
      gate: "sub_admins.index",
      submenu: [
        {
          url: "/users",
          name: "Users",
          slug: "sub-admins",
          gate: "sub_admins.index",
        },
        {
          url: "/users-add",
          name: "Add Users",
          slug: "add-sub-admins",
          gate: "sub_admins.save",
        },
      ],
    },
    {
      url: "/dispatchers",
      name: "Dispatchers",
      slug: "maps",
      icon: "map",
      gate: 'requests.active',
    },
  
    ///////// Booking Management ////////////////
    {
      navheader: "Booking Management",
      gate: 'bookings.dashboard',
    },
    {
      url: "/bookings/dashboard",
      name: "Booking Dashboard",
      slug: "bookings",
      icon: "notebook",
      gate: 'bookings.dashboard',
    },
    {
      url: "/orders",
      name: "Ride Requests",
      slug: "trips",
      icon: "check-alt",
      gate: 'requests.index',
    },
    {
      url: "#",
      name: "Reviews",
      slug: "app-reviews-types-menu",
      icon: "envelope-pull",
      gate: 'reviews.users',
      submenu: [
        {
          url: "/reports",
          name: "Passengers",
          slug: "passenger-ratings",
          icon: "check-alt",
          gate: 'reviews.users',
        },
        {
          url: "/dratings",
          name: "Drivers",
          slug: "driver-ratings",
          icon: "check-alt",
          gate: 'reviews.providers',
        },
      ],
    },
    {
      url: "#",
      name: "Service Types",
      slug: "app-service-types-menu",
      icon: "envelope-pull",
      gate: 'service_types.index',
      submenu: [
        {
          url: "/service-types",
          name: "Service Types",
          slug: "vehicle-types",
          icon: "envelope-pull",
          gate: 'service_types.index',
        },
        {
          url: "/service-types/add",
          name: "Add Service Types",
          slug: "add-vehicle-types",
          icon: "envelope-pull",
          gate: 'service_types.save',
        },
      ],
    },
    ///////// End Booking Management////////
  
    {
      navheader: "Revenue Management",
      gate: 'revenues.dashboard',
    },
    {
      url: "/revenues",
      name: "Revenue Dashboard",
      slug: "revenues",
      icon: "pulse",
      gate: 'revenues.dashboard',
    },
    {
      url: "#",
      name: "Promo Codes",
      slug: "app-promocodes-menu",
      icon: "check-alt",
      gate: 'promo_codes.index',
      submenu: [
        {
          url: "/promo-codes",
          name: "Promo Codes",
          slug: "promo-codes",
          icon: "check-alt",
          gate: 'promo_codes.index',
        },
        {
          url: "/add-promo-code",
          name: "Add Promo Code",
          slug: "add-promo-code",
          icon: "comments",
          gate: 'promo_codes.save',
        },
      ],
    },
    {
      url: "/transactions",
      name: "Transactions",
      slug: "transactions",
      icon: "check-alt",
      gate: 'payments.index',
    },
  
    ///////// Wallet Management ////////////////
    {
      navheader: "Wallets",
      gate: 'wallets.dashboard',
    },
    {
      url: "/passengers/wallets",
      name: "Passenger Wallets",
      slug: "passenger-wallets",
      icon: "envelope-pull",
      gate: 'wallets.user.index',
    },
    {
      url: "/driver/wallets",
      name: "Driver Wallets",
      slug: "driver-wallets",
      icon: "comments",
      gate: 'wallets.provider.index',
    },
    {
      url: "/wallets/payment",
      name: "Passenger Payments",
      slug: "passenger-wallets-payment",
      icon: "check-alt",
      gate: 'wallets.user.payments',
    },
    {
      url: "/dwallets/payments",
      name: "Driver Payments",
      slug: "driver-wallets-payments",
      icon: "check-alt",
      gate: 'wallets.provider.payments',
    },
    {
      url: "/redeems/passenger",
      name: "Passenger Redeems",
      slug: "clients-redeems",
      icon: "check-alt",
      gate: 'user.redeem_requests.index',
    },
    {
      url: "/dRedeems/redeems",
      name: "Driver Redeems",
      slug: "drivers-redeems",
      icon: "check-alt",
      gate: 'provider.redeem_requests.index',
    },
    ///////// End Wallet Management ////////////////
  
    ///////// Vehicle Management ////////////////
    {
      navheader: "Vehicle Management",
      gate: "vehicles.index"
    },
    {
      url: "/vehicles",
      name: "Vehicles",
      slug: "vehicles",
      icon: "car",
      gate: "vehicles.index",
    },
    {
      url: "/vehicles/add",
      name: "Add Vehicles",
      slug: "add-vehicle",
      icon: "check-alt",
      gate: "vehicles.create"
    },
    {
      url: "/vehicle-settings",
      name: "Vehicle Settings",
      slug: "vehicle-settings",
      icon: "settings",
      gate: "vehicles.settings"
    },
    ///////// End Vehicle Management////////
    {
      navheader: "Settings Management",
      gate: "settings.save"
    },
    {
      url: "#",
      name: "Documents",
      slug: "app-documents-menu",
      icon: "envelope-pull",
      gate: 'documents.index',
      submenu: [
        {
          url: "/documents",
          name: "Documents",
          slug: "documents",
          icon: "envelope-pull",
          gate: 'documents.index',
        },
        {
          url: "/add-document",
          name: "Add Document",
          slug: "add-document",
          icon: "comments",
          gate: 'documents.save',
        },
      ],
    },
    {
      url: "#",
      name: "Adverts",
      slug: "app-adverts-menu",
      icon: "comments",
      gate: 'ads.index',
      submenu: [
        {
          url: "/adverts",
          name: "Adverts",
          slug: "adverts",
          icon: "check-alt",
          gate: 'ads.index',
        },
        {
          url: "/add-adverts",
          name: "New Advert",
          slug: "add-adverts",
          icon: "check-alt",
          gate: 'ads.save',
        },
      ],
    },
    {
      url: "#",
      name: "Pages",
      slug: "app-pages-menu",
      icon: "check-alt",
      gate: 'static_pages.index',
      submenu: [
        {
          url: "/pages",
          name: "Pages",
          slug: "pages",
          icon: "calendar",
          gate: 'static_pages.index',
        },
        {
          url: "/add-pages",
          name: "Add Pages",
          slug: "add-pages",
          icon: "check-alt",
          gate: 'static_pages.save',
        },
      ],
    },
    {
      url: "/custom-push",
      name: "Custom push",
      slug: "send-push-notification",
      icon: "calendar",
      gate: 'push_notification.save',
    },
    {
      url: "/roles",
      name: "Roles Management",
      slug: "roles",
      icon: "grid",
      gate: 'roles.index',
    },
    // {
    //   url: "/user-permissions",
    //   name: "User Permissions",
    //   slug: "user-permissions",
    //   icon: "grid",
    // },
    {
      url: "/reports",
      name: "Reports",
      slug: "reports",
      icon: "line-chart",
      gate: undefined,
    },
    {
      url: "/settings",
      name: "Settings",
      slug: "settings",
      icon: "gears",
      gate: "settings.save"
    },
  ]
  
  export default menus