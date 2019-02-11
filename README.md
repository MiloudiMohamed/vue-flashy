# vue-flashy

![](https://img.shields.io/npm/v/vue-flashy.svg?label=version&colorB=blue&style=flat)
![](https://img.shields.io/npm/dt/vue-flashy.svg?style=flat)
![](https://img.shields.io/npm/l/vue-flashy.svg?style=flat)


Beautiful alert component made with VueJs and Tailwindcss.

![alt text](/preview/flashy.gif)

## Important
The component themes are based on [Tailwindcss](https://tailwindcss.com/),
so make sure you are using it otherwise this won't work.

## Installation

#### Via YARN
```bash
yarn add vue-flashy
```

#### Via NPM
```bash
npm i vue-flashy
```

#### Step 2: Add it to Vue

Include plugin in your main.js file.

```js
import Flashy from 'vue-flashy'

Vue.use(Flashy)

```

## Usage
Now, for global usage inside your App.vue add the following tag
```js
<flashy></flashy>
```

then call it from anywhere in the app:

```js
this.$flashy.push('Lorem ipsum dolor sit.')
```

#### More Control
You may also change the default theme color, display delay, add title

```js
<flashy
    :delay="1000"
    font="font-semibold"
>
</flashy>
```
And
```js
this.$flashy.push(Message, Theme, Title);
```

#### Available props:

| Prop           | Type     | Value                                                     | Default | Required |
| -------------- | -------- | --------------------------------------------------------- | ------- | -------- |
| Message        | String   |        ---                                                |   ---   |  true    |
| Title          | String   |        ---                                                |   ---   |  false   |
| Theme          | String   | primary, success, danger, warning, light, grey            | primary |  false   |
| Delay          | Integer  |        ---                                                | 3000ms  |  false   |
| Font           | Integer  |        Any of tailwindcss font classe                     |   ---   |  false   |

## Issues and Contribution
If you find any bug or problem please open an issue or create a pull request, Thanks!.

## Licence
The MIT License (MIT). Please see License File for more information.
