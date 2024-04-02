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
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function AttendeeList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10);

  const onSearchInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  function goToNextPage() {
    setPage(page + 1);
  }

  function goToPreviousPage() {
    setPage(page - 1);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  return (
    <div className="flex flex-col gap-4">
      {search}
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 max-w-2xl py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            onChange={onSearchInputChanged}
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee, i) => {
            const { id, name, email, createdAt, checkedInAt } = attendee;
            return (
              <TableRow key={id} className="hover:bg-white/5">
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400 focus:ring-0 focus:ring-offset-0 checked:focus:bg-orange-400 hover:checked:bg-orange-400"
                  />
                </TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{name}</span>
                    <span>{email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(createdAt)}</TableCell>
                <TableCell>{dayjs().to(checkedInAt)}</TableCell>
                <TableCell>
                  <IconButton typeBtn="transparent">
                    <MoreHorizontal size={16} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <TableCell colSpan={3}>
            Mostrando 10 de {attendees.length} itens
          </TableCell>
          <TableCell className="text-right " colSpan={3}>
            <div className="inline-flex items-center gap-8">
              Página {page} de {totalPages}
              <div className="flex gap-1.5">
                <IconButton
                  disabled={page === 1}
                  typeBtn="normal"
                  onClick={goToFirstPage}
                >
                  <ChevronsLeft size={16} />
                </IconButton>
                <IconButton
                  disabled={page === 1}
                  typeBtn="normal"
                  onClick={goToPreviousPage}
                >
                  <ChevronLeft size={16} />
                </IconButton>
                <IconButton
                  disabled={page === totalPages}
                  typeBtn="normal"
                  onClick={goToNextPage}
                >
                  <ChevronRight size={16} />
                </IconButton>
                <IconButton
                  disabled={page === totalPages}
                  typeBtn="normal"
                  onClick={goToLastPage}
                >
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
