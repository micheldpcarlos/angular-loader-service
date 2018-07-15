
# angular-loader-service
Ready to use Angular service to control a global loader using Observable.

## How to use

- Download loader.service.ts
- Place it inside your project structure 
- Import and provide in your core module
- Control the exibition of your loader subscribing "showLoader" inside the service
- Call "enable()" and "disable()" methods.

enable() and disable() works with a counter to allow multiple calls in a easy way, so enable the loader in different places that runs asynchronously is possible.

Lets say that you have 3 different API calls that enable the loader, you simply call enable() before each of them and in case of response or error the disable() method and "showLoader" will be true until the counter is 0 again.

Any doubts I'm here, don't hesitate to ask! :D 
