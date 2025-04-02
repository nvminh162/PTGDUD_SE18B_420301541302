import { Bell, HelpCircle, Package, Search, ShoppingCart } from "lucide-react"
import OverviewSection from "./OverviewSection"
import DetailedReport from "./DetailedReport"
import avatarLoginSession from '../../assets/Avatar (5).png'

export default function MainContent() {
  return (
    <div className="flex-1 overflow-auto">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-pink-500">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <HelpCircle size={20} />
          </button>
          <img src={avatarLoginSession} className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
          </img>
        </div>
      </header>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Package size={18} className="text-pink-500" />
            Overview
          </h2>
          <OverviewSection />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ShoppingCart size={18} className="text-pink-500" />
            Detailed report
          </h2>
          <DetailedReport />
        </div>
      </div>
    </div>
  )
}

