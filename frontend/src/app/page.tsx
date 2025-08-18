'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import Dashboard from '@/components/playground/Dashboard'
import Requests from '@/components/playground/Requests'
import { usePlaygroundStore } from '@/store'
import { Suspense } from 'react'

export default function Home() {
  const { currentView } = usePlaygroundStore()

  const renderMainContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'requests':
        return <Requests />
      case 'chat':
      default:
        return <ChatArea />
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen bg-background/80">
        <Sidebar />
        {renderMainContent()}
      </div>
    </Suspense>
  )
}
