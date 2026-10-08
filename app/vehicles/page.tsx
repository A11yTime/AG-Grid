import VehicleGrid from "@/components/DataGrid/VehicleGrid";

export default function VehiclesPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Vehicles</h2>

        <p className="text-gray-600">Manage your vehicles.</p>
      </div>

      <VehicleGrid />
    </div>
  );
}
