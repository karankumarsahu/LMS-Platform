import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
    <div className="w-full h-screen">
      <div className="w-full h-full grid grid-cols-6">
      <Sidebar />

      <div className="w-full h-screen col-span-5 overflow-y-auto">
          <div>
            <Header/>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default Dashboard