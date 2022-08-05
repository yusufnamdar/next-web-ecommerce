import mongoose from 'mongoose'

export const connect = async () =>
  mongoose.connect(process.env.MONGODB_URI as string, {
    retryWrites: true,
    w: 'majority',
  })
