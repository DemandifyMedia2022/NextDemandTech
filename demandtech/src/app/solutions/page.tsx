import { Metadata } from 'next'
import { redirect } from 'next/navigation'
export const metadata: Metadata = {
  title: 'Solutions | DemandTech',
  description:
    'This page has moved. Redirecting to Products...'
}

export default function SolutionsPage() {
  redirect('/products')
  return null
}
