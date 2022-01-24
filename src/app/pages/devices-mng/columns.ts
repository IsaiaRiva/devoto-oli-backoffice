export const DEVICE_TAB_DEF = [
    {
      columnDef: 'bceid',
      header: 'BCE Id',
      cell: (element: any) => element.username
    },
    {
      columnDef: 'user account',
      header: 'Utente',
      cell: (element: any) => element.devices.length
    },
    {
      columnDef: 'browser id',
      header: 'BrowserId',
      cell: (element: any) => element.devices
    },
    {
      columnDef: 'browser info',
      header: 'BrowserInfo',
      cell: (element: any) => element.devices
    },
    {
      columnDef: 'operation system',
      header: 'O.S.',
      cell: (element: any) => element.devices
    },
    {
      columnDef: 'first access',
      header: 'Primo Utilizzo',
      cell: (element: any) => element.devices
    },
    {
      columnDef: 'last access',
      header: 'Ultimo Utilizzo',
      cell: (element: any) => element.devices
    },
    {
      columnDef: 'action',
      header: 'Azioni',
      cell: (element: any) => element.devices
    }
  ];