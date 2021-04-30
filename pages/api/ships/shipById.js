export default async function shipById(req, res) {
  const { shipId } = req.params;
  try {
    const response = await fetch(`${process.env.SPACEX_BASE_URL}/ships/${shipId}`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}