export default async function pastLaunches(req, res) {
  try {
    const response = await fetch(`${process.env.SPACEX_BASE_URL}/launches/past`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}