import Link from "next/link";

const stats = [
  {
    label: "Total Vehicles",
    value: "128",
    change: "+12%",
  },
  {
    label: "Electric Vehicles",
    value: "42",
    change: "+8%",
  },
  {
    label: "Customers",
    value: "356",
    change: "+18%",
  },
  {
    label: "Revenue",
    value: "$84,250",
    change: "+14%",
  },
];

const recentVehicles = [
  {
    make: "Tesla",
    model: "Model Y",
    price: "$64,950",
    electric: true,
  },
  {
    make: "Ford",
    model: "F-Series",
    price: "$33,850",
    electric: false,
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: "$29,600",
    electric: false,
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: "$48,890",
    electric: true,
  },
];

const recentCustomers = [
  {
    name: "John Smith",
    company: "Acme Inc.",
    status: "Active",
  },
  {
    name: "Sarah Johnson",
    company: "Globex",
    status: "Active",
  },
  {
    name: "Mike Brown",
    company: "Initech",
    status: "Inactive",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

        <p className="mt-1 ">
          Welcome back. Here's an overview of your application.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-700">{stat.label}</p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-950">{stat.value}</p>

              <span className="text-sm font-semibold text-green-700">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Vehicles */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-200 p-5">
            <div>
              <h3 className="font-semibold text-gray-950">Recent Vehicles</h3>

              <p className="text-sm text-gray-700">Recently added vehicles</p>
            </div>

            <Link
              href="/vehicles"
              className="font-medium text-blue-700 hover:text-blue-900 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-left">
                  <th className="px-5 py-3 font-semibold text-gray-700">
                    Make
                  </th>

                  <th className="px-5 py-3 font-semibold text-gray-700">
                    Model
                  </th>

                  <th className="px-5 py-3 font-semibold text-gray-700">
                    Price
                  </th>

                  <th className="px-5 py-3 font-semibold text-gray-700">
                    Type
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentVehicles.map((vehicle) => (
                  <tr
                    key={`${vehicle.make}-${vehicle.model}`}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <td className="px-5 py-3 font-medium text-gray-950">
                      {vehicle.make}
                    </td>

                    <td className="px-5 py-3 text-gray-800">{vehicle.model}</td>

                    <td className="px-5 py-3 text-gray-800">{vehicle.price}</td>

                    <td className="px-5 py-3">
                      {vehicle.electric ? (
                        <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-800">
                          Electric
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-800">
                          Gas
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customers */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 p-5">
            <div>
              <h3 className="font-semibold text-gray-950">Customers</h3>

              <p className="text-sm text-gray-700">Recent customers</p>
            </div>

            <Link
              href="/customers"
              className="font-medium text-blue-700 hover:text-blue-900 hover:underline"
            >
              View all
            </Link>
          </div>

          <div>
            {recentCustomers.map((customer) => (
              <div
                key={customer.name}
                className="flex items-center justify-between border-b border-gray-200 p-5 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-950">{customer.name}</p>

                  <p className="text-sm text-gray-700">{customer.company}</p>
                </div>

                <span
                  className={
                    customer.status === "Active"
                      ? "rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-800"
                      : "rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-800"
                  }
                >
                  {customer.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-950">
          Quick Actions
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/vehicles"
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <h4 className="font-semibold text-gray-950">Manage Vehicles</h4>

            <p className="mt-1 text-sm text-gray-700">
              View, edit, and manage your vehicle inventory.
            </p>
          </Link>

          <Link
            href="/customers"
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <h4 className="font-semibold text-gray-950">Manage Customers</h4>

            <p className="mt-1 text-sm text-gray-700">
              View and manage your customer records.
            </p>
          </Link>

          <Link
            href="/settings"
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <h4 className="font-semibold text-gray-950">
              Application Settings
            </h4>

            <p className="mt-1 text-sm text-gray-700">
              Configure your application preferences.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
