import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-12-18',
  appInfo: {
    name: 'Plura App',
    version: '0.1.0',
  },
})

