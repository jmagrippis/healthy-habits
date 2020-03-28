export enum Status {
  Pending = 'pending',
  Done = 'done'
}

export type Activity = {
  id: string
  label: string
  badge: string
  value: number
  status: Status
}
