export default async function launchPadById(req, res) {
  const { launchPadId } = req.params;
  try {
    const response = await fetch(`${process.env.NEXT_SPACEX_BASE_URL}/launchpads/${launchPadId}`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}