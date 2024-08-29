import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"


// Define the shape of your student data
export interface allDonars {
  id: number;
  fullName: string;
  age: number;
  bloodGroup: string;
  phoneNumber: string;
  address: string;
  email: string;
}
export const DonarColunms: ColumnDef<allDonars>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "bloodGroup",
    header: "Blood Group",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
    enableSorting:true,

  },
  // {
  //   accessorKey: "studentGender",
  //   //header: "Gender",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Gender
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     )
  //   },
  //   enableSorting:true
  // },
  {
    accessorKey: "address",
    header: "Address",
    enableSorting:true,

  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting:true,

  },
  // {
  //   accessorKey: "parentId",
  //   header: "Parent ID",
  //   enableSorting:true,

  // },
  // {
  //   accessorKey: "studentCity",
  //   header: "City",
  //   enableSorting:true,
  // },
  // {
  //   accessorKey: "studentAdmissionDate",
  //   header: "Admission Date",
  //   enableSorting:true,

  // },
  // {
  //   accessorKey: "dateOfBirth",
  //   header: "Date of Birth",
  //   enableSorting:true,

  // },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"))
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount)
  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  // ...
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment = row.original
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(row.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>Edit</DropdownMenuItem>
  //           <DropdownMenuItem >Delete</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },

]
