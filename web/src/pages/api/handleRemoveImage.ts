import { v2 as cloudinary } from 'cloudinary'
import { NextApiRequest, NextApiResponse } from 'next'

cloudinary.config({
  cloud_name: process.env.NEXT_APP_CLOUD_NAME,
  api_key: process.env.NEXT_APP_API_KEY,
  api_secret: process.env.NEXT_APP_API_SECRET,
})

export default async function handleRemoveImage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { publicId } = req.body

    const response = await cloudinary.uploader.destroy(publicId)

    return res.status(200).json(response.result)
  }
}
