"use client";

import type { ColDef } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";

interface DataGridProps<T> {
  rowData: T[];
  columnDefs: ColDef<T>[];
}

export default function DataGrid<T>({ rowData, columnDefs }: DataGridProps<T>) {
  const defaultColDef: ColDef<T> = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <AgGridProvider modules={[AllCommunityModule]}>
      <div className="w-full h-[500px]">
        <AgGridReact<T>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </AgGridProvider>
  );
}
