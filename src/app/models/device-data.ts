export interface Devicedata {
    username: string;
    devices: Device[];
};

// se ho campi static uso type
export type Device = {
  id: number;
  version: string;
  device: string;
};
