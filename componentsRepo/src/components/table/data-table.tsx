import * as React from 'react'
import { Button } from '@/src/components/ui/Button'
import { columns } from './columns';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/src/components/ui/dropdown-menu';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

interface DataRow {

}

interface DropdownAction {
  label: string;
  action: () => void;
}

interface DataTableProps {
  apiEndpoint: string;
  dropdownActions: DropdownAction[];
}

const DataTable: React.FC<DataTableProps> = ({ apiEndpoint, dropdownActions }) => {
  const [data, setData] = React.useState<DataRow[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const token = cookies.get('token');
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result.data);
      } else {
        console.error("Falha ao buscar dados");
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Opções</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownActions.map((action, index) => (
          <DropdownMenuItem key={index} onSelect={action.action}>
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Opções</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {dropdownActions.map((action, index) => (
            <DropdownMenuItem key={index} onSelect={action.action}>
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <table {...table.getTableProps()}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.renderHeader()}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...table.getTableBodyProps()}>
          {table.getRowModel().rows.map(row => {
            return (
              <tr {...row.getRowProps()}>
                {row.getVisibleCells().map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.renderCell()}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default DataTable;