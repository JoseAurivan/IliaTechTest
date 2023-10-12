import Navbar from '@/components/Navbar'
import style from './Home.module.scss'
import classNames from 'classnames'
import NextLink from 'next/link';
export default function Home() {
  return (
    <div className="container">
      <div className="panel panel-default">        
        <h5 className="panel-heading" id='card-title'>Home Page</h5>
          <div className="panel-body">
            <h6 className="card-subtitle mb-2 text-muted">This is the home page of the project.</h6>
          </div>
          <div className="container px-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  CUSTOMER
                </div>
                <div className="card-body">
                  <h5 className="card-title">How it works?</h5>
                  <p className="card-text">The customers page works using Redux with Immer during its use.</p>
                  <p className="card-text">When you click the close night button you will send all of the Customers and Orders to our .NET backend.</p>
                  <p className="card-text">Then you will be albe to perform CRUD operations with that data when you click the Check Customers button.</p>
                </div>
                <div className="container mb-2">
                    <div className="row g-2">
                      <div className="col-6 g-2">
                        <span className="badge rounded-pill bg-primary">NEXT JS</span> 
                        <span className="badge rounded-pill bg-primary">.NET</span> 
                        <span className="badge rounded-pill bg-primary">REDUX</span> 
                        <span className="badge rounded-pill bg-primary">AXIOS</span> 
                      </div>
                    </div>
                </div>
                <div className="card-footer d-grid gap-2">
                  <NextLink href="/customer" className="btn btn-outline-primary"> Go to Customers</NextLink>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card">
                <div className="card-header">
                  PUBLIC API FETCHING
                </div>
                <div className="card-body">
                  <h5 className="card-title">How it works?</h5>
                  <p className="card-text">With the form on your left you will be able to select your params for the data fetch</p>
                  <p className="card-text">That data fetch is done by using the built in NextJS Route Handlers</p>
                  <p className="card-text">You can also see the api by checking the link: </p>
                </div>
                <div className="container mb-2">

                        <span className="badge rounded-pill bg-primary mr-2 ml-2">NEXT JS</span>
                        <span className="badge rounded-pill bg-primary mr-2 ml-2">ROUTE HANDLERS</span>

                </div>
                <div className="card-footer d-grid gap-2">
                  <NextLink href='/api' className="btn btn-outline-primary">Go to API</NextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
