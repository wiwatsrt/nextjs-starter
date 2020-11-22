import React from 'react'
import AppLayout from '../components/Layout/AppLayout'

export const Home = (): JSX.Element => (
  <AppLayout headerTitle="Home">
    <div className="py-4">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
    </div>
  </AppLayout>
)

export default Home
