import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
  ChevronLeft,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 max-w-2xl py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participantes"
            className="bg-transparent flex-1 outline-none  border-0 p-0 text-sm focus:ring-0"
          />
        </div>
      </div>

      <Table>
        <thead>
          <TableRow className="border-b border-white/10">
            <TableHeader>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400 focus:ring-0 focus:ring-offset-0 checked:focus:bg-orange-400 hover:checked:bg-orange-400"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader
              style={{
                width: 64,
              }}
            ></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow key={i} className="hover:bg-white/5">
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400 focus:ring-0 focus:ring-offset-0 checked:focus:bg-orange-400 hover:checked:bg-orange-400"
                />
              </TableCell>
              <TableCell>3123213</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Gabriel Cursi Rossani Bertaglia
                  </span>
                  <span>gaabrielcursi@gmail.com</span>
                </div>
              </TableCell>
              <TableCell>7 dias atrás</TableCell>
              <TableCell>3 dias atrás</TableCell>
              <TableCell>
                <IconButton typeBtn="transparent">
                  <MoreHorizontal size={16} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
          <TableCell className="text-right " colSpan={3}>
            <div className="inline-flex items-center gap-8">
              Página 1 de 23
              <div className="flex gap-1.5">
                <IconButton typeBtn="normal">
                  <ChevronsLeft size={16} />
                </IconButton>
                <IconButton typeBtn="normal">
                  <ChevronLeft size={16} />
                </IconButton>
                <IconButton typeBtn="normal">
                  <ChevronRight size={16} />
                </IconButton>
                <IconButton typeBtn="normal">
                  <ChevronsRight size={16} />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tfoot>
      </Table>
    </div>
  );
}
