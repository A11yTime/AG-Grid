"use client";

import type { ColDef } from "ag-grid-community";
import DataGrid from "./DataGrid";

interface Vehicle {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const vehicles: Vehicle[] = [
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
  },
];

const columnDefs: ColDef<Vehicle>[] = [
  {
    field: "make",
    headerName: "Make",
  },
  {
    headerName: "Model",
  },
  {
    field: "price",
    headerName: "Price",
  },
  {
    field: "electric",
    headerName: "Electric",
  },
];

export default function VehicleGrid() {
  return <DataGrid rowData={vehicles} columnDefs={columnDefs} />;
}
