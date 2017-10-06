### A React boilerplate with Redux.

Install with ```git clone https://github.com/binkpitch/reactor.git your-project-name && cd your-project-name && rm -rf .git && yarn install```. 
> To install ```yarn```, go to https://yarnpkg.com/en/docs/install.

Try at https://binkpitch.github.io/reactor.

To debug install chrome extension, [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

To work with an empty boilerplate, rename ```src-new``` to ```src```.

**Libraries**

1. **redux-devtools-extension**: Show dispatch actions and allow time travel.

2. **redux-immutable-state-invariant**: Throws error when trying to mutate redux state.

3. **standard && precommit**: Enforce standardJS (Standard Style) check when run ```git commit``` and ```git push```.

4. **semantic-ui-react**: An UI framework based on ```semantic-ui``` with modification to supports React.

5. **redux-form**: Auto-dispatch action to auto-created reducer (and many more) for form components. See ```textAreaComponent.js``` for working example with ```semantic-ui-react```.

6. **react-router-redux**: Dispatch action for navigation and keep redux state sync with router.

7. **redux-saga**: Middleware for redux that provides [side effects](http://redux.js.org/docs/faq/Actions.html#actions-side-effects).

8. **axios**: A promise-based HTTP client use for making server requests.

9. **jest && enzyme**: For react unit testing. Create file ```name.test.js``` and use ```yarn test``` to run all tests.

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
