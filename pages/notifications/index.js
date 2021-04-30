export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/api/notifications`)
    const data = await res.json()

    return {
        props: {
            data,
        }
    }

}

const notifications = ({data}) => {
    return (
        <div className='min-h-screen'>
            <div className=" max-w-[600px] w-full mx-auto mt-10 backdrop-filter bg-transparent backdrop-blur-sm backdrop-opacity-70 h-[200px] flex justify-center items-center text-white">
                <div className=" w-max p-4 text-2xl flex flex-col gap-4">
                    <div className=" text-5xl">Sorry!</div>
                    <div className=" italic">{data.message}</div>
                </div>
            </div>
        </div>
    )
}

export default notifications;