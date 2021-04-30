
export default async function roadsterdataPage(req, res) {
  try {
    const response = await fetch(`${process.env.NEXT_SPACEX_BASE_URL}/roadster`)
    const data = await response.json();
    // console.log('ROAD DATA', data)
    res.status(200).json(data)
    // res
    // res.status(200).setPreviewData(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
  // ...
  // res.setPreviewData({})
  // ...
}

// export default async function roadster(req, res) {
// }