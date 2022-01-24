export const PROCESS_TAB_DEF = [
    {
      columnDef: 'index',
      header: 'Index',
      cell: (element: any) => element.zip_name
    },
    {
      columnDef: 'active',
      header: 'Attivo',
      cell: (element: any) => element.date
    },
    {
      columnDef: 'status',
      header: 'Stato',
      cell: (element: any) => element.validation
    },
    {
      columnDef: 'filename',
      header: 'Nome File',
      cell: (element: any) => 'active'
    },
    {
      columnDef: 'backupfilename',
      header: 'Backup Nome File',
      cell: (element: any) => element.zip_name
    },
    {
      columnDef: 'start importation',
      header: 'Inizio Importazione',
      cell: (element: any) => element.date
    },
    {
      columnDef: 'end importation',
      header: 'Fine Importazione',
      cell: (element: any) => element.validation
    },
    {
      columnDef: 'actions',
      header: 'Azioni',
      cell: (element: any) => 'active'
    }
  ];