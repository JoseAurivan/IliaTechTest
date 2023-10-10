import Link from "../Link/index"

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/customer'>Customers</Link></li>
                <li><Link href='/api'>Api</Link></li>
            </ul>
        </nav>
    )
}