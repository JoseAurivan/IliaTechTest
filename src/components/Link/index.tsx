import NextLink from 'next/link';

export default function Link({ children, href, ...props}
    :{children:React.ReactNode,href:string})
{
    return(
        <NextLink href={href} passHref {...props} className="nav-link">
            {children}
        </NextLink>
    )
}