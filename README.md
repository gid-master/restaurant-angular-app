# Restaurant Application

The idea behind this project is to cover some of the most important functionalities used in Angular creating a real PWA application.

![](doc/demo.gif)

## Quick Start

Firstly, clone and install all necessary packages, then start it locally.

```
> git clone https://github.com/gid-master/restaurant-angular-app.git

> npm install

> npm start
```

Initially the application will work normally because it's using mock data. However, if you want to connect to a backend API, you need to have the <strong>node.js</strong> project up running.

[Grab the NodeJs API Project right here](https://github.com/gid-master/restaurant-node-api)

Once you have the API running, you just need to change the environment variable to be able to listen to the endpoins, the variable can be found inside environment.ts file in the src/environments folder.

```
backendTarget: "api"
```

That's all, now you can also have the project listening to the backend API.

## Application Content

- [Devices Suport](#devices-support)
- [Angular 11 Approaches](#vue-3-approaches)
- [How to Run](#how-tu-run)
- [Using Mock](#using-mock)
- [Using API's](#using-api's)
- [Application Modules](#application-modules)
- [Structure & Flow](#structure-&-flow)
- [Progressive Web Application (PWA)](<#progressive-web-application-(pwa)>)
- [Firebase Deployment](#firebase-deployment)

## Devices Support

As this is a demo in order to show features of a specific framework, the application is not fully ready to support multiple screens sizes, browsers and devices. However, you can check this repositoty which contains the same application developed for this responsive purpose.

Check out the list of screens that can be used to play around with this demo.

#### Mobile Support Only

- Iphone 6/7/8
- Iphone 6/7/8 Plus
- Iphone X
- Pixe 2
- Pixe 2 XL
- Galax S5
- Moto G4

#### Browsers

- Chrome
- Safari

## Angular 11 Approaches

There are some of the Angular concepts that were approached in this application.\
I used standard eslint and prettier settings, but feel free to switch to the one you like the most.\
Some developers can feel annoyed working with a long line limit of 170 which is defined as default.

- Angular Json Config

  - Proxy settings (request API using same local port)
  - Global styles settings (access variables globally)
  - Style Preprocessor Options (import styles using name instead of relative path)
  - PWA to configure the service worker and manifest
  - Schemas to auto fix files created through CLI using lint rules

- Ngrx

  - Single source of truth
  - Organizing stores between global states and encapsulated module states
  - Store forRoot x forFeature
  - Initializer APP as provider to load data before initializing application
  - Using Effects to switch actions accessing services to request data (example of actions Load and LoadSuccess)
  - Effects mixing getters from different states to transform and prepera data before updating state
  - Logic to transform data inside getters

- Services

  - Centralize logic using services (specially httpClient to request API's)
  - Interceptor to handle responses and requests (header token and response status)
  - Jwt Authentication (cookie authentication)
  - Handling server issues and redirect to error pages
  - Interceptor to override server requests and return mock data instead
  - Examples providing services directly in the module and also using providedIn root
  - Services used in Ngrx effects or container components only

- Router

  - Authentication Guards using canActivate (protect authorized pages)
  - Scroll Position Restoration (scroll page back to the top for same route)
  - Lazy loading modules
  - Catch not found routes
  - Using extra router data to hide or show specific page content

- Modules

  - Export only the components that can be used in other modules
  - Shared module with components used across the entire project (button, grid, modal and layout)
  - Import shared or core modules only for modules that use it
  - Using third-party module (example of cookie Module)

- Components

  - Container x Presentational components (all logic in one place only)
  - Encapsulated styles using global variables to keep consistent
  - Each module in its folder using container component as start point to deal with the entire logic
  - Input and Output in order to communicate parent with child components
  - Input as setter to execute side effect function (avoid to use NgChange to watch changes)
  - Shared components used across the entire application
  - Change detection on push to improve detection performance
  - Pipes instead of typescript function to format data
  - ViewChild to manipulate DOM elements
  - NgContent to add dynamic content in the component
  - @HostListener to listen to window events (most used in PWA controller)

- Lifecycle Hook

  - AfterViewInit to execute methods that deal with DOM elements after binding the component
  - OnChages to watch for inputs changes detection
  - OnInit to prepare data when component is ready (react form is a good example)
  - OnDestroy to unsubscribe observables used to submit data

- Directives

  - Fallback images (load fallback image if path is not found)
  - NgLet used to async subscrible an observable in order to use in multiple template elements
  - Directives are exposed using module

- Pipes

  - Custom pipe to format capital letter (don't use typescript function to format componet data, it affects performance of change detection)
  - Standard pipes to format currency and date
  - Never use typescript function to format data, always use pipe to transform the data
  - Pipes are exposed using module

- Rxjs

  - Most of data are using async pipe to subscribe (Angular core unsubscribe it automatically)
  - Behaviour Subject to create custom observable, simple example using ConnectionService
  - Your own custom operator to use in the pipe chain (filterAdditionals inside checkout module)
  - Transform data before subscribing observables using different operators (map, filter, first, switchMap, of, etc...)
  - Using tap to execute side effect functions once data is subscribed
  - Manipulate opbservables using combine or switch observables
  - Most of operators can be visualized in the effect layers of store
  - There are plenty of operator and Rxjs functionalities, however, we used the basics in this project

- Utils Serives Storage

  - Save cart into local storage (can be recovered from offline mode)
  - Save token authentication in cookie (best practice because doesn't use session)

- Reactive form

  - Get rid of two ways data bind using ngModel (React Form is the right way to get it done)
  - Encapsulate entire logic inside the form (returns only after having a valid data)
  - FormGroup and FormBuilder to set up the reactive form
  - Validators to validate forms (standard, custom and mixed validations)
  - Custom validator using AbstractControl
  - Force submit form though parent component (when the submit button is in a different component)
  - valueChanges to catch form data after any user interaction
  - Disable and reset a reactive form

- PWA

  - Manifest with main settings for theme, images, orientation and name
  - Install home screen shortcut (delegating logic to the application)
  - Service Workers to work with offline data (caching products API to be able to work offline)
  - Cache assets (server images and local assets)
  - Request a new version update (if user agree app is reloaded, otherwise new version will be update in the background next time)
  - SwUpdate to subscribe when a service worker is updated
  - SwPush to request user permisssion to receive notifications and save it in database
  - Connection, online and offline notifications.
  - Push notification permission (this one has server interaction)

- Concepts

  - Most common functionalities
  - Directives to manipulate DOM elements
  - Pipe to format data
  - Input setter x Onchanges to watch inputs changes
  - Most used lifecycle to trigger actions (AfterViewInit, OnInit and OnDestroy)
  - ViewChild to use DOM element on typescript side
  - @HostListener to listen to window events
  - Also using pure javascript concepts as typescript function
  - Dependency Injection to use services (singleton concept)
  - Reactive Programming using observables and operators to transform data
  - Reactive form to collect user inputs
  - Input and Output to have the components communication
  - Custom service using BehaviorSubject (wrapper connection logic as example)
  - Guards and Interceptors to deal with router and server requests
  - State managment as single source of truth (Effect layers)
  - Async pipe instead of subscribing observables on the typescript side
  - Decorators (fundamental in Angular)
  - There are a lot of more concepts, but we have approced the most used ones to build an application.

- Styles
  - Scss structure
  - Encapsulated styles
  - Global typography
  - Global colors (palette of colors used in the applciaiton)
  - Consistent paddings and margins across all components
  - Bind classes using conditions

## How to Run

This is the frontend application only, however, you can run it using either mocked data (already in place) or API server.

In order to have it runing along with a backend API, you need to follow the steps for further settings.

<br/>

Install all necessary packages.

```
npm install
```

<br/>

Initialize the application

```
npm start
```

## Using Mock

There is a folder called mocks inside the project workspace, and this folder contains files with preset data that simulates the backend responses.

<b>interceptor mock</b> used to intercept http requests and return the mocked data.\
Check out the mock.interceptor.ts file inside the interceptors folder.

You can access environment file and enable or disable this option whenever you want, just change the <b>backendTarget</b> to mock, after that all data will come from the mock folder.

Keep in mind that once you have changed back the <b>backendTarget</b> to use api, then you need to run any of our backend API's in order to get responses.

However, the best part is that you don't need to do anything, it works automatically behind the scenes.

Ps: Clear your checkout storage to avoid product ids issue if you were using API project before.

## Using API's

The idea of this project is show how simple is having the same application working across different technologies.

There are a few different options of backend to test the application using API's.

- Node JS
- .Net Core
- Go Lang
- Python

<br/>

All backend projects are already pointing to the same port, however, if you need to use a different port for some reason, you also need to change the <b>proxy.config.json</b> file in order to keep the proxy settings working correctly.

Change the object <b>devServer</b> inside the file to point to the new API address. After it all your requests still go through the localhost port 8080 using the API route.

Notice that this proxy settings works only on development mode (Check the angular.json and see that the references was added in the dev block only), once you build the applciation for production all this devServer block is gone, and then you should define this settings on the server side.

<br/>

You can also have the same project using serverless.

- Firebase
- AWS

## Application Modules

The application was split up in different modules, such as:

- Login

  - Register a new user
  - Sign in using you account

- Error

  - Not found
  - Server
  - Unauthorized

- Account

  - Logout option
  - Orders Summary
  - Order details
  - Review orders

- Home

  - Welcome intro
  - Suggestions
  - Special Dishes
  - Promotions
  - Shortcut buttons
  - PWA intercept install button logic

- Menu

  - List all products
  - Search for product name
  - Filter product by category
  - Sort dishes for review, price, calories, name or price.

- Product

  - Product Details
  - Ingredients
  - Reviews summary
  - Additional items
  - Comments
  - Related products
  - Add to cart

- Checkout

  - Double check product added to cart
  - Edit or remove item form cart
  - Add payment method
  - Payment summary
  - Process payment
  - Add cart in local storage (can be recovered)

- Shared
  - Buttons icons, standard and increment
  - Layouts for wrappers, container and blocks
  - Modals using backdrop, bottom sheet and snack bar
  - Grids with scrollable row or vertical view
  - Cards that represent a macro view of the product
  - PWA control install app, update app and online / offline notification

## Structure & Flow

Short description about how the project folder structure works and how the data are connected.

#### Routers

Main Routers just point to the modules, it forces the lazy loading and the bundles are built in different file.
This is the place where we keep all load lazing logic and also the guards to prevent any unauthorized access.
Inside each module there is a child route that points to the container component (where we keep the entire logic).\

#### Modules

Each layer of the project is separated in modules, so the bundle will be laoded only after the user request the router.\
There is the shared module that exports components used across the entire application.

#### Components

Each module has the container components which handles the entire logic.\
The modules folder has all modules subfolders, and inside each module subfolder a structure followed by container and presentational components.\
The communication between container and presentational components should be done through inputs, outputs and store actions only.

#### Container Components

This component is responsible for dealing with the entire module logic.\
Here is the place where we dispatch events and get data from store, then we pass all information to the presentational components display on the screen.

#### Presentational Components

This component is responsible for showing data only, mostly to keep its logic encapsulated.\
Some presentational components has its own logic, such as, form validation or accordion, however, always using data loaded from container component.

#### Shared Components

This folder has all generic components used across the entire projects, such as, grid, card, wrapper and block layout. So, if you change any details in these components will affect the entire project.

#### Data Flow

The entire logic goes through the store to manage the application state.\
We simply use the dispatchers to request when some specific data should be processed.

Then inside the container components we use getters to listen to all states, and from there automatically load everything.

We dispatch 2 requests when the application is initialized, after that all dispatches are done inside the containers, and that's how the communication starts.

## Progressive Web Application (PWA)

This application fully supports PWA and we deal with all major functionalities.

The user is able to install the application and receive notification when the application is running offline.\
After the first access, the application works entirely offline, so the user can browser through the menu, visualize every single product details and also add ptoducts them to the cart. However, the checkout process can be done only after the connection is recovered.

In order to get the PWA working properly for this project, we need to customize only a few files.\

- Angular Json
- Manifest
- Service Workers
- PWA Controller
- Push notification using VAPID Key

#### Angular Json

Running the command <b>ng add @angular/pwa</b> angular set up all files that you need and create all references inside angular.json file.\
However, you can go inside the file and check the references pointing to service worker there.

#### Manifest

Manifest file is located inside src folder.\
The manifest.webmanifest file is responsible for personalizing your application, predefined settings like theme, icons, name and orientation.

#### Service Workers

We don't create the service worker file manually, it is generated once the application is bult based on the configuration define inside the ngsw-config.json file.\
This is the only file you need to set up the cache strategies, all options covers everything you need.

- ngsw-config.json\
  In this file we define application cache, internal and external assets and fonts, also API responses.\
  We also can define network or cache firts strategy, define what should be done in case of installing or updating the application and a lot more.

#### PWA Controler

The logic to deal with PWA is totally centralized in an unique component located inside modules/shared/pwa folder.

This component is responsible for listening to all events and observables and show interactive messages to the user.\
There is no PWA logic outside of this component.

In this component we deal with online / offline messages, a modal to show that there is a new version available and also the install application modal.

#### SwUpdates & SwPush

These are services used in Angular that already encapsulate the logic to interact with push notification, requesting user permission or buttons implemented in the notification message.\
Updates subscribe when a new version is available, then we can display a dialog message. So if the user doesn't update / reload the application, the new version is upgraded in the background and ready to the user when comes back to the page.

#### Push Notification

There are 3 simple steps in order to get the push notification working properly.\

Firstly, we need to generate the VAPID private and public key using the most common lib called web-push.\
Using the backend API, you can see scrit and a simple class that deal with it already.

The public key was added as vapid in the environment file, the applications uses this public key to convert it into Uint8Array in order to request user permission to receive notifications.\
There is a function inside the PwaController implementations that handles the permission dialog using this key. An endpoint and auth are generated once the user allows the application to interact with notifications.\
Then we grab this endpoint and save it into the user collection, from now all the time we need to send user notification the backend can use it to have the communication.

Accessing any of the backend examples you can check for web-push and simulate how we send messages, however, you can test it using the webtools / application / push notification.

#### Push Notification Tests

Use the chrome dev tools / applications / service workers to simulate push messages.\
Or you can also use this website to be able to test push notifications creating public / private key and also simulate push messages.

webpush doc: https://web-push-codelab.glitch.me/

Send message using this structure:

```
{
  "notification": {
    "title":"Restaurant",
    "icon":"assets/icons/pwa/favicon-32x32.png",
    "vibrate":[100, 50, 100],
    "body":"testing!!!"
  }
}
```

#### Support

Keep in mind that PWA works only when you build the project and host it somewhere.\
If you serve it direclly from the project you won't be able to test the functionalities.

I strongly recommend you to run the script defined in the package.json and access it using the defined port. However, you need to install the http-server package globaly.

```
npm install http-server -g
npm run pwa
```

Or you can build the project and use the web server for chorme to host the application easilly.

After that you will be able to double check everthing using the devtools / application (manifest, service worker and cache)

#### Generate Assets

There are plenty of libs out there that helps you to generate pwa assets based on the svg logo.\
We recommend have a look at the pwa-asset-generator package available in the NPM.

## Firebase Deployment

Firebase hosting is the easiest way to server a https application for zero cost.\
You can easily sign up Firebase using your Google account and follow the documentation to create your first project.

firebase doc: https://firebase.google.com/docs/hosting

Once you have created your project, just replace the project name inside the <b>.firebaserc</b> file located in the root folder.

After that you can simply use CLI commands to deploy your project.

<br />

Firstly, install the firebase tools globaly.

```
npm install -g firebase-tools
```

<br />

Secondly, authenticate the CLI using your user and password.

```
firebase login
```

<br />

Finally, use the script already in place to deploy your project.

```
npm run deploy
```
