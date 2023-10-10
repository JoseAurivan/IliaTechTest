import Navbar from '@/components/Navbar'
import style from './Home.module.scss'
import classNames from 'classnames'
export default function Home() {
  return (
    <div className={style.container}>
      <div className={classNames({'card':true},{[style.home]:true})}>        
        <h5 className="card-header">Home Page</h5>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">This is the home page of the project</h6>
            <p  className="card-text">This project consumes a public api and uses Redux to manage state.</p>
            <p className="card-text"> You can check the api fetch working on the API link.</p>
            <p className="card-text">You can check the Redux working on the Customer link</p>
        </div>
      </div>
    </div>
  )
}
