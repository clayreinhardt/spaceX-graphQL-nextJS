export default async function fairings(req, res) {
  try {
    const response = await fetch(`${process.env.SPACEX_BASE_URL}/fairings`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}