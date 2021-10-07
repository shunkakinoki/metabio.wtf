export interface PoapAccount {
  accounts?: AccountsEntity[] | null;
}

export interface AccountsEntity {
  tokens?: Poap[] | null;
}
export interface Poap {
  event: Event;
  id: string;
}
export interface Event {
  id: string;
}
