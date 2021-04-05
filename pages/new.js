import Link from 'next/link'

function New(){
    return (<div>
    <h1>New</h1>
    <Link href='/'>
        <a>Home</a>
    </Link>
    </div>)
}

export default New