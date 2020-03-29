export enum Status {
  Pending = 'pending',
  Done = 'done',
}

export type Activity = {
  id: string
  label: string
  badge: string
  value: number
  status: Status
}

export type Pet = {
  id: string
  label: string
  image: string
}
