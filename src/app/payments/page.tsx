import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 1000,
      status: "pending",
      email: "fran@example.com",
    },
    {
    id: "728ed52f",
    amount: 2000,
    status: "pending",
    email: "ivi@example.com",
    },
    {
    id: "728ed52f",
    amount: 1500,
    status: "success",
    email: "pascual@example.com",
    },
    {
    id: "728ed52f",
    amount: 5000,
    status: "processing",
    email: "ana@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "zexar@example.com",
    },

  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
