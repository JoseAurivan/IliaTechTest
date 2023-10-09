import Link from "../Link";

export default function CustomerList()
{
    // get customer list from redux 
    const customers = []
    return(
        <aside>
            <ul>
                <li>Nome: lorem</li>
                <li>Email: ipsum</li>
                <Link href="/">See orders</Link>
            </ul>
        </aside>
    )
}