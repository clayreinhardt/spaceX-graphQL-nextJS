import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from '../apollo-client';
import getDragons from '../components/getDragonById'




export async function getStaticProps() {
    const query = getDragons
    console.log(query)
    const { data } = await client.query({
        query,
    });
    return {
        props: {
            data
        }
    }
}


const dragons = () => {
    return (
        <div>

        </div>
    )
}

export default dragons
