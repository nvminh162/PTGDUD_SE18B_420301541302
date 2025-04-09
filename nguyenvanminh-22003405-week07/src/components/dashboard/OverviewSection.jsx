import { CircleDollarSign, DollarSign, Users } from "lucide-react"

export default function OverviewSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-pink-50 rounded-lg p-5 border border-pink-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-medium text-pink-600 mb-1">Turnover</h3>
            <p className="text-2xl font-bold">$92,405</p>
          </div>
          <div className="w-8 h-8 rounded-md bg-pink-100 flex items-center justify-center">
            <DollarSign size={18} className="text-pink-500" />
          </div>
        </div>
        <div className="flex items-center text-xs">
          <span className="text-green-600 font-medium">+ 5.39%</span>
          <span className="text-gray-500 ml-1">period of change</span>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-medium text-blue-600 mb-1">Profit</h3>
            <p className="text-2xl font-bold">$32,218</p>
          </div>
          <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center">
            <CircleDollarSign size={18} className="text-blue-500" />
          </div>
        </div>
        <div className="flex items-center text-xs">
          <span className="text-green-600 font-medium">+ 3.39%</span>
          <span className="text-gray-500 ml-1">period of change</span>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-medium text-indigo-600 mb-1">New customer</h3>
            <p className="text-2xl font-bold">298</p>
          </div>
          <div className="w-8 h-8 rounded-md bg-indigo-100 flex items-center justify-center">
            <Users size={18} className="text-indigo-500" />
          </div>
        </div>
        <div className="flex items-center text-xs">
          <span className="text-red-600 font-medium">- 8.84%</span>
          <span className="text-gray-500 ml-1">period of change</span>
        </div>
      </div>
    </div>
  )
}

