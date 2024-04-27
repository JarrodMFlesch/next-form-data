export const POST = async (req: Request) => {
  const formData = await req.formData()
  const returnData = formData.get('_payload')
  if (typeof returnData === 'string') {
    return Response.json({
      message: 'success',
      data: JSON.parse(returnData),
    })
  }

  return new Response('bad data', { status: 500 })
}