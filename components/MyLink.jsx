import Link from 'next/link'
import { useRouter } from 'next/router'


export default function MyLink({to, children: text}){
    const {pathname} = useRouter();
    if(pathname == to && to != '/') return null
    return <Link href={to}>{text}</Link>

}