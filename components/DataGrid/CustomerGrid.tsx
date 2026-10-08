"use client";

import type { ColDef } from "ag-grid-community";
import DataGrid from "./DataGrid";

interface Customer {
  name: string;
  email: string;
  company: string;
  status: string;
}

const customers: Customer[] = [
  {
    name: "John Smith",
    email: "john@example.com",
    company: "Acme Inc.",
    status: "Active",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    company: "Globex",
    status: "Active",
  },
  {
    name: "Mike Brown",
    email: "mike@example.com",
    company: "Initech",
    status: "Inactive",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    company: "Umbrella Corp.",
    status: "Active",
  },
];

const columnDefs: ColDef<Customer>[] = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "email",
    headerName: "Email",
  },
  {
    field: "company",
    headerName: "Company",
  },
  {
    field: "status",
    headerName: "Status",
  },
];

export default function CustomerGrid() {
  return <DataGrid rowData={customers} columnDefs={columnDefs} />;
}
