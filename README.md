# notify-browser

promisified wrapper for the browser notification api

## install

```
npm install -s notify-browser
```

## use it

```
var notifyBrowser = require('notify-browser');
var options = {
    icon: 'https://pbs.twimg.com/profile_images/717988253203300352/68HyMFny.jpg'
}
notifyBrowser.push('message', options);
```


