import Navbar from '@/components/Navbar'
import style from './Home.module.scss'
import classNames from 'classnames'
import NextLink from 'next/link';
export default function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron jumbotron-fluid">
        <div className="container bg-light">
          <h1 className="display-4">CUSTOMER-ORDER DOMAIN</h1>
          <p className="lead">To operate within this domain this project uses Redux at its first stage then connects to the API with AXIOS. The backend in .NET handles all of the Calls.</p>
          <p className="lead">
            <NextLink href={"/customers"} className="btn btn-primary btn-lg" role="button">GO TO CUSTOMERS</NextLink>
          </p>
          <div className="container px-4">
            <div className="row gx-2">
              <div className="col">
              <div className="p-3">
                <div className={classNames({"card":true},{[style.card]:true})}>
                  <div className="card-body">
                    <h5 className="card-title" id="card-title">Redux IMMER</h5>
                    <p className="card-text">In this project was used Redux Immer. A tool that helps us deal with state mutability</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div className={classNames({"card":true},{[style.card]:true})}>
                    <div className="card-body">
                      <h5 className="card-title">AXIOS</h5>
                      <p className="card-text">Axios is a promise based HTTP client for the browser that helps us make API calls</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div className={classNames({"card":true},{[style.card]:true})}>
                    <div className="card-body">
                      <h5 className="card-title">.NET Backend</h5>
                      <p className="card-text">The backend for this application was built from scratch using .NET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid mt-4">
        <div className="container bg-light">
          <h1 className="display-4">API FETCHING</h1>
          <p className="lead">In this project you can fetch a public API - https://jsonplaceholder.typicode.com/todos . You can check the api being fetched by the built-in NextJS Router on this link: <NextLink href="/api/todo" className='link-info'> Consume</NextLink>
          </p>
          <p className="lead">
            <NextLink href={"/api"} className="btn btn-primary btn-lg" role="button">GO TO API</NextLink>
          </p>
        </div>
      </div>
    </div>
  )
}
