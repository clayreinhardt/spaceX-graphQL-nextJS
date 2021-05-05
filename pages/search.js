import { useState, useEffect, useCallback } from 'react'
import Search from '../components/search/Search'
import client from '../apollo-client'
import recentLaunches from '../components/recentLaunches';
const query = recentLaunches;

export async function getStaticProps() {
    const { data: { launchesPast } } = await client.query({
        query,
    });
    const minifiedLaunchesPast = launchesPast.map((launch, i) => {
        return { missions: launch.mission_name }
    })
    return {
        props: {
            minifiedLaunchesPast
        },
        revalidate: 1
    }
}

const search = ({ minifiedLaunchesPast }) => {

    console.log(minifiedLaunchesPast)

    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState("launchName")
    const [orderBy, setOrderBy] = useState("asc")



    const filteredLaunches = minifiedLaunchesPast.filter(
        item => {
            return (
                item.missions.toLowerCase().includes(query.toLowerCase())
            )
        }
    )



    return (
        <div className='min-h-screen justify-center'>
            <Search query={query}
                onQueryChange={myQuery => setQuery(myQuery)}
                orderBy={orderBy} />

            <ul className='divide-y divide-white' >
                {filteredLaunches.map((launch, i) => {
                    return <li key={i}>
                        {launch.missions}
                    </li>

                })}
            </ul>
        </div>
    )
}

export default search
