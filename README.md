## We have to create two separate bundles using webpack
- One for server which bundles the server app + react app [Run this on browser]. It is in build folder
- Second for client which only bundles the client app [Ship this to browser along with the HTML]. It is in public folder


## NOTE
 - BrowserRouter cannot be used on the server side as it looks at the URL in the address bar. For the server side, there is no such
 address bar present.

 - So, for server, we need to use StaticRouter. StaticRouter has been made so as to be used for the server side rendering.

 - Server will use StaticRouter, whereas Browser will use BrowserRouter

 - StaticRouter needs context to be passed as prop. Context is used to handle redirects and some error handling. StaticRouter has no access to the browser link so we need to tell the path it has to consider which is present in the express request object. Whereas BrowserRouter has direct access to the browser addressbar.


## Challenges for redux in SSR
 - Redux needs different configuration on browser vs server. We are going to have two different store - one for the browser bundle and for the server bundle.
 - Aspects of authentication needs to be handled on server. Normally this is done on browser.
 - Need some way to detect all initial data load action creators are completed on server. So that we can render the content to string and send it back to the browser - **BIGGEST CHALLENGE IN SSR**
 - Need state rehydration on the browser








