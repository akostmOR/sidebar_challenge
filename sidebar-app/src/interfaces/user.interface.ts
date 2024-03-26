export interface UserData {
  id: string;
  name: string;
}

export interface Employee {
  id: string;
  name: string;
}

export interface Team {
  name: string;
  items: Employee[];
}

export interface Company {
  name: string;
  items: (Employee | Team)[];
}

export interface Item {
  name: string;
  items?: Item[];
  id?: string;
}
