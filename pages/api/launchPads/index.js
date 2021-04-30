export default async function launchPads(req, res) {
  try {
    const response = await fetch(`${process.env.NEXT_SPACEX_BASE_URL}/launchpads`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}