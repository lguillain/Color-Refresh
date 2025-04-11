import TaskbaseMockup from './taskbase-mockup'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Taskbase Color Palette Tester</h1>
        <TaskbaseMockup />
      </div>
    </div>
  )
}

export default App 