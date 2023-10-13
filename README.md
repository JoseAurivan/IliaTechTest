
# Ília tech test




## Autors

- [@JoseAurivan](https://www.github.com/JoseAurivan)


## About
This project fetches a public API and uses a Domain with:
- Customers
- Orders

## Domain
The domain is managed using Redux and when the user clicks on the "Clear all customers and Orders" button all the data that is stored in Redux is sent to a Postgres Database using an API made from scratch with .NET.
You can see the redux and its reducers unde /src/store


## API FETCH
There you can acess then using API requests done with Axios by clicking on the See customers button.


## Perks

- Integration .NET Backend
- Real time state management with Redux and Redux Immer
- Responsive Layout
- Next Js 13
- Next JS built in Route Handler
- Unit Tests with JEST
- .NET Backend Tested With xUnit
- Typescript
- ESlint


## Running

If is necessary to change the api port go to src/utils/axios.ts currently is set to the port 5149

Before all

```bash
    npm install
```

To run on dev mode

```bash
  npm run dev
```

To run on production mode
```bash
  npm run build
  npm run start
```


## Running tests

To run tests use the following command

```bash
  npm run test
```


## Stack

**Front-end:** React, Redux, Bootstrap, SASS

**Back-end:** .NET


## BackEnd Project

 - [.NET Backend](https://github.com/JoseAurivan/IliaTechTestBackEnd)


