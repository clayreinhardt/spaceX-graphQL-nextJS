import Link from "next/link"

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/notifications`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }

}

const notifications = ({ data }) => {
    console.log(data)
    return (
        <div className='min-h-screen'>

        </div>
    )
}

export default notifications