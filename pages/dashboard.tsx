import React from 'react'
import AppLayout from '../components/Layout/AppLayout'

interface Props {}

const dashboard = (props: Props) => {
  return (
    <AppLayout header="Dashboard">
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
    </AppLayout>
  )
}

export default dashboard
