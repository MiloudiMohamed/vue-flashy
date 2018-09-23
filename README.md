# vue-flashy
Beautiful alert component made with VueJs and Tailwindcss.

## Important
The component themes are based on [Tailwindcss](https://tailwindcss.com/),
so make sure you are using it otherwise this won't work.

## Installation

### Via YARN
```bash
yarn add vue-flashy
```

### Via NPM
```bash
npm i vue-flashy
```

### Step 2: Add it to Vue

Include plugin in your main.js file.

```
import Flashy from 'vue-flashy'

Vue.use(Flashy)

```

## Usage
Now, for global usage inside your App.vue add the following tag
```
<flashy></flashy>
```

then call it from anywhere in the app:

```
this.$flashy.push('Lorem ipsum dolor sit.')
```

### More Control
You may also change the default theme color, display delay, add title

```
<flashy
    :delay="1000"
    font="font-semibold"
>
</flashy>
```
And
```
this.$flashy.push(Message, Theme, Title);
```

>**Message:** `String`

>**Title:** `String` (optional)

>**theme:**  `string` eg: `['primary', 'success', 'danger', 'warning', 'light', 'grey']` (optional)  | **Default:** `primary`

>**Delay:** `Integer (ms)` (optional) | **Default:** `3000ms`

>**font:** `Any of tailwindcss font classes` (optional)

## Issues and Contribution
If you find any bug or problem please open an issue or create a pull request, Thanks!.
