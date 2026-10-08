import CustomerGrid from "@/components/DataGrid/CustomerGrid";

export default function CustomersPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Customers</h2>

        <p className="text-gray-600">Manage your customers.</p>
      </div>

      <CustomerGrid />
    </div>
  );
}
