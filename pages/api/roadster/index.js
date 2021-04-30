
export default async function handler(req, res) {
  try {
    const response = await fetch(`${process.env.SPACEX_BASE_URL}/roadster`)
    const data = await response.json();
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