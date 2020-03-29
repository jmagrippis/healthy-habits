export enum Status {
  Pending = 'pending',
  Done = 'done',
}

export type Activity = {
  id: string
  label: string
  category: Category
  status: Status
}

export enum Category {
  Social = 'social',
  Physical = 'physical',
  Spiritual = 'spiritual',
  Intellectual = 'intellectual',
  Chores = 'chore',
  Fun = 'fun',
}

export type Pet = {
  id: string
  label: string
  image: string
}
