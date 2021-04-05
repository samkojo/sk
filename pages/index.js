import Link from 'next/link'

function Home(){
    return (<div><h1>Home</h1>
    <Link href='/new'>
        <a>New</a>
    </Link></div>)
}

export default Home