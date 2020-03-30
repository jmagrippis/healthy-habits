# Healthy Habits

Chrome extension that replaces the new tab, with a list of things to do!

## The Pitch

Hello, we're Healthy Habits and we want to help everyone make the most of their lockdown, and carry on healthy habits beyond it still!

Our app “gamifies” small things you could be doing to keep your mind and body healthy. Every day it will select one random activity from each category, and will wait for you to tick it off.

Categories include “Social”, “Physical” and “Intellectual”!

Ticking off multiple activities, rewards you with cute pets! This could be a web or native mobile app, but our primary delivery mechanism is via the browser extension, because we thought you'd want the pets to keep you company every time you open a new tab! As well as be reminded of the things you could do today, on your own time. And, of course, the things you've already accomplished!

This isn't an app to pressure you, it's an app to reward you.

We are inspired by Nook Miles+ from the recent Animal Crossing release, as well as extensions like Tabby Cat and Tabbagotchi.

Taking the concept further, instead of the pets appearing immediately, maybe you'd be getting an “egg” that will only “hatch” the next day, for further incentive to come back tomorrow!

Maybe completing activities and maintaining streaks will give you “points” to exchange for accessories for your pets at the store… so you may set your own goals: “I really want that hat for my cat, so I better keep the streak going!”

Thanks for reading, and please do get involved 😄

## The Tech

We are using [React] scaffolded with [Create React App]. [Styled Components] as our CSS-in-JS solution of choice.

[react]: https://reactjs.org/ 'A JavaScript library for building user interfaces'
[create react app]: https://github.com/facebook/create-react-app 'Set up a modern web app by running one command'
[styled components]: https://styled-components.com/ 'Use the best bits of ES6 and CSS to style your apps without stress'

To start the server for local development run:

```sh
yarn start
```

To build assets for distribution:

```sh
yarn build
```

The output in the build directory is what we'd be distributing as a chrome extension.
