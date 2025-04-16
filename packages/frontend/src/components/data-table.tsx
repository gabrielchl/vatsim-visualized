"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

// based on https://ui.shadcn.com/docs/components/data-table
function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [tableExpanded, setTableExpanded] = useState(false);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border w-full min-h-0 [&>*]:max-h-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            <>
              {(tableExpanded ? table.getRowModel().rows : table.getRowModel().rows.slice(0, 9)).map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              {table.getRowModel().rows.length > 9 ? tableExpanded ? (
                <TableRow className="cursor-pointer" onClick={() => setTableExpanded(false)}>
                  <TableCell colSpan={columns.length} className="text-center">
                    <div className="flex align-center justify-center gap-2">See less rows<ChevronUp size={20} /></div>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow className="cursor-pointer" onClick={() => setTableExpanded(true)}>
                  <TableCell colSpan={columns.length} className="text-center">
                    <div className="flex align-center justify-center gap-2">See all rows<ChevronDown size={20} /></div>
                  </TableCell>
                </TableRow>
              ) : null}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export {DataTable};
