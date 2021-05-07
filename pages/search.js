import { useState, useEffect, useCallback } from 'react'
import Search from '../components/search/Search'
import client from '../apollo-client'
import recentLaunches from '../components/recentLaunches';
import getRockets from '../components/getRockets';
const launchesQuery = recentLaunches;
const rocketQuery = getRockets;

export async function getStaticProps() {
    const { data: { launchesPast } } = await client.query({
        query: launchesQuery,
    });
    const { data: { rockets } } = await client.query({
        query: rocketQuery,

    });
    const minifiedLaunchesPast = launchesPast.map((launch, i) => {
        return { missions: launch.mission_name, launchId: launch.id, launchType: launch.__typename }
    })
    const minifiedRockets = rockets.map((rocket, i) => {
        return { name: rocket.name, rocketId: rocket.id, description: rocket.description }
    })

    //check to see what is rendered when launches past also is console logged with everyhting else
    // console.log(launchesPast)
    return {
        props: {
            minifiedLaunchesPast, minifiedRockets
        },
        revalidate: 1
    }


}

const search = ({ minifiedLaunchesPast, minifiedRockets }) => {


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

    // const filteredRockets = minifiedRockets.filter(
    //     item => {
    //         return (
    //             item.rockets.toLowerCase()
    //         )
    //     }
    // )


    // resolve bug with adding more items to the search listing for the database


    return (
        <div className='min-h-screen justify-center'>
            <Search query={query}
                onQueryChange={myQuery => setQuery(myQuery)}
                orderBy={orderBy} />

            {/* <ul className='divide-y divide-red-500' >
                {filteredRockets}
            </ul> */}
            <ul className='divide-y divide-red-300' >
                {filteredLaunches.map((launch, i) => {
                    return <li key={i}>
                        Mission: {launch.missions}<br></br>
                        Id: {launch.launchId}

                    </li>

                })}
            </ul>
        </div>
    )
}

export default search
