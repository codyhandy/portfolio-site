import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { route } from "next/dist/next-server/server/router";
 
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(-1) - redirects back a single page
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div>
            <h1>404</h1>
            <h2>That page could not be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link> </p>
        </div>
    );
}
 
export default NotFound;