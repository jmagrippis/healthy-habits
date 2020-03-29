import { Category, Activity } from 'types'

export const categoriesToActivities: {
  [category in Category]: Pick<Activity, 'label' | 'category' | 'badge'>[]
} = {
  [Category.Social]: [
    {
      label: 'video chat with a friend or family',
      category: Category.Social,
      badge: 'phone.png',
    },
    {
      label: 'call one of your friends or family',
      category: Category.Social,
      badge: 'phone.png',
    },
    {
      label: 'send a selfie to a friend or family',
      category: Category.Social,
      badge: 'phone.png',
    },
    {
      label: 'send a card or small gift to a loved one',
      category: Category.Social,
      badge: 'phone.png',
    },
  ],
  [Category.Physical]: [
    {
      label: 'cook a healthy meal',
      category: Category.Physical,
      badge: 'exercise.png',
    },
    {
      label: 'practice yoga',
      category: Category.Physical,
      badge: 'exercise.png',
    },
    {
      label: 'follow a workout video',
      category: Category.Physical,
      badge: 'exercise.png',
    },
  ],
  [Category.Spiritual]: [
    {
      label: 'write down something you’re grateful for',
      category: Category.Spiritual,
      badge: 'heart.png',
    },
    {
      label: 'listen to a new piece of music',
      category: Category.Spiritual,
      badge: 'heart.png',
    },
    {
      label: 'listen to your favourite song',
      category: Category.Spiritual,
      badge: 'heart.png',
    },
  ],
  [Category.Intellectual]: [
    {
      label: 'read a book',
      category: Category.Intellectual,
      badge: 'bulb.png',
    },
    {
      label: 'spend half an hour learning something new',
      category: Category.Intellectual,
      badge: 'bulb.png',
    },
    {
      label: 'solve a puzzle',
      category: Category.Intellectual,
      badge: 'bulb.png',
    },
    {
      label: 'listen to your favourite song',
      category: Category.Intellectual,
      badge: 'bulb.png',
    },
  ],
  [Category.Chores]: [
    {
      label: 'shop for groceries',
      category: Category.Chores,
      badge: 'house.png',
    },
    {
      label: 'clean your space',
      category: Category.Chores,
      badge: 'house.png',
    },
    {
      label: 'declutter your space',
      category: Category.Chores,
      badge: 'house.png',
    },
    {
      label: 'do some laundry',
      category: Category.Chores,
      badge: 'house.png',
    },
    {
      label: 'reassess your wardrobe',
      category: Category.Chores,
      badge: 'house.png',
    },
    {
      label: 'give away something you did not use last month',
      category: Category.Chores,
      badge: 'house.png',
    },
  ],
  [Category.Fun]: [
    {
      label: 'draw a picture of a puppy',
      category: Category.Fun,
      badge: 'notes.png',
    },
    {
      label: 'watch a movie',
      category: Category.Fun,
      badge: 'notes.png',
    },
    {
      label: 'play a game',
      category: Category.Fun,
      badge: 'notes.png',
    },
    {
      label: 'take a photo',
      category: Category.Fun,
      badge: 'notes.png',
    },
    {
      label: 'draw a picture of your favourite animal puppy',
      category: Category.Fun,
      badge: 'notes.png',
    },
  ],
}
