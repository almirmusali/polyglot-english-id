import type { ConjugationTable as Tbl } from "@/data/types";

export function ConjugationTable({ data }: { data: Tbl }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      {data.caption && (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-500">
          {data.caption}
        </div>
      )}
      <table className="tbl">
        <thead>
          <tr>
            {data.columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-slate-50/50">
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? "font-medium" : ""}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
