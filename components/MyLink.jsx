import Link from 'next/link'
import { useRouter } from 'next/router'
import useUser from '../hooks/useUser';


export default function MyLink({to, children: text, needLogged = false, needLogout = false}){
    const {isLogged} = useUser()
    const {pathname} = useRouter();
    if((pathname == to && to != '/') ||( needLogged && !isLogged) || (needLogout && isLogged)) return null
    return <Link href={to}>{text}</Link>

}