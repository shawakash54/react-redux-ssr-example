## We have to create two separate bundles using webpack
- One for server which bundles the server app + react app [Run this on browser]. It is in build folder
- Second for client which only bundles the client app [Ship this to browser along with the HTML]. It is in public folder


## NOTE
 - BrowserRouter cannot be used on the server side as it looks at the URL in the address bar. For the server side, there is no such
 address bar present.

 - So, for server, we need to use StaticRouter. StaticRouter has been made so as to be used for the server side rendering.

 - Server will use StaticRouter, whereas Browser will use BrowserRouter




