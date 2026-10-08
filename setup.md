npx create-next-app@latest ag-grid-react
cd ag-grid-react
npm install ag-grid-react
npm run dev

ag-grid-react/
│
├── public/
│
├── src/
│ │
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ │
│ │ ├── vehicles/
│ │ │ └── page.tsx
│ │ │
│ │ ├── customers/
│ │ │ └── page.tsx
│ │ │
│ │ └── settings/
│ │ └── page.tsx
│ │
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Footer.tsx
│ │ │
│ │ └── DataGrid/
│ │ ├── DataGrid.tsx
│ │ ├── VehicleGrid.tsx
│ │ └── CustomerGrid.tsx
│ │
│ └── ...
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
