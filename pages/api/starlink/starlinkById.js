export default async function starlinkById(req, res) {
  const { starlinkId } = req.params;
  try {
    const response = await fetch(`${process.env.SPACEX_BASE_URL}/starlink/${starlinkId}`)
    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'error grabbing spacex data'})
  }
}