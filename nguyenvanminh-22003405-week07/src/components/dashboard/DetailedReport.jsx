import { Pencil } from "lucide-react"
// Removed Next.js Image import

export default function DetailedReport() {
  const customers = [
    {
      id: 1,
      name: "Elizabeth Lee",
      avatar: "/src/assets/Avatar.png",
      company: "AustarSystems",
      orderValue: "$359",
      orderDate: "10/07/2023",
      status: "New",
    },
    {
      id: 2,
      name: "Carlos Garcia",
      avatar: "/src/assets/Avatar (1).png",
      company: "SmoothShift",
      orderValue: "$747",
      orderDate: "24/07/2023",
      status: "New",
    },
    {
      id: 3,
      name: "Elizabeth Bailey",
      avatar: "/src/assets/Avatar (2).png",
      company: "Prime Time Telecom",
      orderValue: "$564",
      orderDate: "08/08/2023",
      status: "In-progress",
    },
    {
      id: 4,
      name: "Ryan Brown",
      avatar: "/src/assets/Avatar (3).png",
      company: "OmniTech Corporation",
      orderValue: "$541",
      orderDate: "31/08/2023",
      status: "In-progress",
    },
    {
      id: 5,
      name: "Ryan Young",
      avatar: "/src/assets/Avatar (4).png",
      company: "DataStream Inc.",
      orderValue: "$769",
      orderDate: "01/05/2023",
      status: "Completed",
    },
    {
      id: 6,
      name: "Hailey Adams",
      avatar: "/src/assets/Avatar (5).png",
      company: "FlowRun",
      orderValue: "$922",
      orderDate: "10/06/2023",
      status: "Completed",
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div></div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            Import
          </button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500 uppercase">
              <th className="w-10 px-4 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Order Value</th>
              <th className="px-4 py-3 text-left">Order Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="w-10 px-4 py-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      {/* Replaced Next.js Image with standard img tag */}
                      <img
                        src={customer.avatar || "/placeholder.svg"}
                        alt={customer.name}
                        width="32"
                        height="32"
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{customer.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{customer.company}</td>
                <td className="px-4 py-3 font-medium">{customer.orderValue}</td>
                <td className="px-4 py-3 text-gray-600">{customer.orderDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      customer.status === "New"
                        ? "bg-blue-50 text-blue-600"
                        : customer.status === "In-progress"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-green-50 text-green-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Pencil size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between text-sm">
        <div className="text-gray-500">63 results</div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">4</button>
          <span className="px-2">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">10</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">11</button>
        </div>
      </div>
    </div>
  )
}