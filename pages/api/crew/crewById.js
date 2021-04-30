export default async function crewById(req, res) {
  const { crewId } = req.params;
  try {
    const response = await fetch(`${process.env.NEXT_SPACEX_BASE_URL}/launchpads/${crewId}`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}