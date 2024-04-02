import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
  ChevronLeft,
} from "lucide-react";

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

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                className="py-3 px-4 text-sm font-semibold text-left"
                style={{
                  width: 48,
                }}
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400 focus:ring-0 focus:ring-offset-0 checked:focus:bg-orange-400 hover:checked:bg-orange-400"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participantes
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de check-in
              </th>
              <th
                style={{
                  width: 64,
                }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr
                key={i}
                className="border-b border-white/10  hover:bg-white/5"
              >
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400 focus:ring-0 focus:ring-offset-0 checked:focus:bg-orange-400 hover:checked:bg-orange-400"
                  />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300 ">3123213</td>
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Gabriel Cursi Rossani Bertaglia
                    </span>
                    <span>gaabrielcursi@gmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  7 dias atrás
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  3 dias atrás
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <td className="py-3 px-4 text-sm text-zinc-300 " colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td
              className="text-right py-3 px-4 text-sm text-zinc-300 "
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                Página 1 de 23
                <div className="flex gap-1.5">
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft size={16} />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight size={16} />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight size={16} />
                  </button>
                </div>
              </div>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}