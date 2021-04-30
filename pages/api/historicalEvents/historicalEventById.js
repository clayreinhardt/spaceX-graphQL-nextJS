export default async function historicalEventById(req, res) {
  const { historicalEventId } = req.params;
  try {
    const response = await fetch(`${process.env.NEXT_SPACEX_BASE_URL}/history/${historicalEventId}`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}