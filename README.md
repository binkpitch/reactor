### A React boilerplate with Redux.

Install with ```git clone https://github.com/binkpitch/reactor.git your-project-name && cd your-project-name && rm -rf .git && yarn install```

To debug install chrome extension, [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

**Libraries**

1. **redux-devtools-extension**: Show dispatch actions and allow time travel.

2. **redux-immutable-state-invariant**: Throws error when trying to mutate redux state.

3. **standard && precommit**: Enforce standardJS (Standard Style) check when run ```git commit``` and ```git push```.

4. **material-ui**: UI framework based on Material Design. *Suggestion,* import component using ```import ComponentName from 'material-ui/ComponentName'``` for faster and smaller build.

5. **redux-form && redux-form-material-ui**: Auto-dispatch action to auto-created reducer (and many more) for form components with material-ui supports. *Suggestion*, use ```import { ComponentName } from 'redux-form-material-ui'``` if [```redux-form-material-ui```](https://github.com/erikras/redux-form-material-ui)'s component is available, this allow easy integration with ```redux-form```. 

6. **react-jss**: Activate inline CSS in any components using ```injectSheet(styles)(component)```. It also come with ```jss-preset-default``` which add functions like vendor prefixer, css with camel case, and [many more](https://github.com/cssinjs/jss-preset-default)

7. **react-router-redux**: Dispatch action for navigation and keep redux state sync with router.

8. **redux-saga**: Middleware for redux that provides [side effects](http://redux.js.org/docs/faq/Actions.html#actions-side-effects).

9. **axios**: A promise-based HTTP client use for making server requests.

10. **jest && enzyme**: For react unit testing. Create file ```name.test.js``` and use ```yarn test``` to run all tests.

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
