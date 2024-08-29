import React from "react";
import {
    ColumnDef,
    flexRender,
    SortingState,
    ColumnFiltersState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useDispatch } from "react-redux";
import { editAction } from "@/Redux/slice/EditSlice";
import { deleteAction } from "@/Redux/slice/DeleteSlice";
import { Input } from "@/components/ui/input";
interface Data {
    id: string;
    // other properties
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    showActions?: boolean; // Add this prop
    actions?: {
        edit?: boolean;  // Add this prop
        delete?: boolean;  // Add this prop
    };
}

export function DataTable<TData, TValue>({
    columns,
    data,
    showActions = false, // Default to false if not provided
    actions = { edit: false, delete: false }, // Default to false if not provided
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [globalFilter, setGlobalFilter] = React.useState("");
    const dispatch = useDispatch();

    const table = useReactTable({
        data,
        columns: [
            ...columns,
            ...(showActions
                ? [{
                    id: 'actions',
                    header: 'Actions',
                    cell: ({ row }: { row: any }) => (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                {actions.edit && (
                                    <DropdownMenuItem onClick={() => dispatch(editAction(row.original))}>
                                        Edit
                                    </DropdownMenuItem>
                                )}
                                {actions.delete && (
                                    <DropdownMenuItem onClick={() => dispatch(deleteAction(row.original))}>
                                        Delete
                                    </DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.id)}>
                                    Copy ID
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ),
                }]
                : []
            ),
        ],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
    });
    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();
    const handleEdit = (data: Data) => {
        // Implement your edit logic here
        // For example, navigate to an edit page or open a modal with a form
        console.log("Edit", data);

        // Example: Redirect to an edit page
        // window.location.href = `/edit/${data.id}`;

        // Example: Open a modal with a form
        // setEditModalOpen(true);
        // setEditingData(data);
    };

    const handleDelete = (data: Data) => {
        // Implement your delete logic here
        // For example, show a confirmation dialog and then proceed with deletion
        console.log("Delete", data);

        // Example: Confirm deletion
        if (window.confirm(`Are you sure you want to delete item with ID ${data.id}?`)) {
            // Proceed with deletion
            // Perform API call or state update to delete the item
            // Example: Delete item via API
            // fetch(`/api/delete/${data.id}`, { method: 'DELETE' })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Item deleted', data);
            //     })
            //     .catch(error => {
            //         console.error('Error deleting item', error);
            //     });

            // Or update local state
            // setData(data.filter(item => item.id !== data.id));
        }
    };

    return (
        <div className="bg-white shadow-md rounded-md">
            <div className="flex items-center py-4">
                <Input
                    type="text"
                    placeholder="Filter all columns..."
                    value={globalFilter ?? ""}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                    className="max-w-60 rounded-md outline-none p-4 h-12 bg-gray-500 text-white text-lg font-bold"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto bg-[#1a237e] hove:bg-[#2196f3] text-white text-base font-bold">
                            Hide Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} className="bg-[#1a237e]">
                                        {header.isPlaceholder ? null : (
                                            <div className="flex items-center text-white ">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                <Button
                                                    className=""
                                                    variant="ghost"
                                                    onClick={() => header.column.toggleSorting(header.column.getIsSorted() === "asc")}
                                                >
                                                    <ArrowUpDown className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center text-black">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-sm text-gray-600">
                    Page {pageIndex + 1} of {pageCount}
                </div>
                <Button
                    className="bg-gray-500 cursor-pointer hover:bg-blue-500 text-white"
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    className="bg-gray-500 cursor-pointer hover:bg-blue-500 text-white"
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
