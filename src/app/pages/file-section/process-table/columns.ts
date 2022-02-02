import { Dictionary } from './dictionary-data';

export const PROCESS_TAB_DEF = [
    {
      columnDef: 'index',
      header: 'Index',
      cell: (element: Dictionary) => element.id
    },
    {
      columnDef: 'active',
      header: 'Attivo',
      cell: (element: Dictionary) => element.active
    },
    {
      columnDef: 'status',
      header: 'Stato',
      cell: (element: Dictionary) => element.status
    },
    {
      columnDef: 'filename',
      header: 'Nome File',
      cell: (element: Dictionary) => element.originalFilename
    },
    {
      columnDef: 'backupfilename',
      header: 'Backup Nome File',
      cell: (element: Dictionary) => element.backupFilename
    },
    {
      columnDef: 'start importation',
      header: 'Inizio Importazione',
      cell: (element: Dictionary) => element.importStartDate
    },
    {
      columnDef: 'end importation',
      header: 'Fine Importazione',
      cell: (element: Dictionary) => element.importEndDate
    },
    {
      columnDef: 'actions',
      header: 'Azioni',
      cell: (element: Dictionary) => `<button>Attiva</button>`
    }
  ];
