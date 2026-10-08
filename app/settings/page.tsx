export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-black">
          Settings
        </h1>

        <p className="mt-2 text-base text-white-800">
          Manage your application preferences and configuration.
        </p>
      </div>

      {/* General Settings */}
      <section className="rounded-lg border border-gray-300 bg-white shadow-sm">
        <div className="border-b border-gray-300 p-6">
          <h2 className="text-xl font-semibold text-black">General</h2>

          <p className="mt-1 text-sm text-gray-800">
            Configure basic application information.
          </p>
        </div>

        <div className="space-y-6 p-6">
          <div>
            <label
              htmlFor="application-name"
              className="block text-sm font-semibold text-black"
            >
              Application name
            </label>

            <input
              id="application-name"
              type="text"
              defaultValue="AG Grid Dashboard"
              className="mt-2 w-full rounded-md border border-gray-400 px-3 py-2 text-black shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-black"
            >
              Description
            </label>

            <textarea
              id="description"
              rows={3}
              defaultValue="Vehicle and customer management application."
              className="mt-2 w-full rounded-md border border-gray-400 px-3 py-2 text-black shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700"
            />
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-lg border border-gray-300 bg-white shadow-sm">
        <div className="border-b border-gray-300 p-6">
          <h2 className="text-xl font-semibold text-black">Notifications</h2>

          <p className="mt-1 text-sm text-gray-800">
            Choose which notifications you want to receive.
          </p>
        </div>

        <div className="divide-y divide-gray-300">
          <div className="flex items-center justify-between gap-6 p-6">
            <div>
              <h3 className="font-semibold text-black">Email notifications</h3>

              <p className="mt-1 text-sm text-gray-800">
                Receive important application updates by email.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              aria-label="Enable email notifications"
              className="h-5 w-5 accent-blue-700"
            />
          </div>

          <div className="flex items-center justify-between gap-6 p-6">
            <div>
              <h3 className="font-semibold text-black">Vehicle alerts</h3>

              <p className="mt-1 text-sm text-gray-800">
                Get notified when vehicle inventory changes.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              aria-label="Enable vehicle alerts"
              className="h-5 w-5 accent-blue-700"
            />
          </div>

          <div className="flex items-center justify-between gap-6 p-6">
            <div>
              <h3 className="font-semibold text-black">Customer alerts</h3>

              <p className="mt-1 text-sm text-gray-800">
                Receive notifications about customer activity.
              </p>
            </div>

            <input
              type="checkbox"
              aria-label="Enable customer alerts"
              className="h-5 w-5 accent-blue-700"
            />
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className="rounded-lg border border-gray-300 bg-white shadow-sm">
        <div className="border-b border-gray-300 p-6">
          <h2 className="text-xl font-semibold text-black">Appearance</h2>

          <p className="mt-1 text-sm text-gray-800">
            Customize how the application looks.
          </p>
        </div>

        <div className="p-6">
          <label
            htmlFor="theme"
            className="block text-sm font-semibold text-black"
          >
            Theme
          </label>

          <select
            id="theme"
            defaultValue="light"
            className="mt-2 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700 sm:w-64"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </section>

      {/* Data */}
      <section className="rounded-lg border border-gray-300 bg-white shadow-sm">
        <div className="border-b border-gray-300 p-6">
          <h2 className="text-xl font-semibold text-black">Data</h2>

          <p className="mt-1 text-sm text-gray-800">
            Manage your application data.
          </p>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-black">Export data</h3>

              <p className="mt-1 text-sm text-gray-800">
                Download your vehicle and customer data.
              </p>
            </div>

            <button
              type="button"
              className="rounded-md border border-gray-500 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              Export
            </button>
          </div>

          <div className="border-t border-gray-300 pt-4">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-semibold text-black">
                  Clear application data
                </h3>

                <p className="mt-1 text-sm text-gray-800">
                  Remove locally stored application data.
                </p>
              </div>

              <button
                type="button"
                className="rounded-md border border-red-700 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
              >
                Clear data
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
