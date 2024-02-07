import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Copy, Download, FileText, MoreHorizontal } from 'lucide-react'
import { Button } from '@/src/components/ui/Button'
import axios from "axios"
import { Checkbox } from '@/src/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'


export type Payment = {
  Id: string
  ValorTotal: number
  email: string
  date: string
  ChaveDFe: string;
  token: string;
  NomeFantasiaEmitente: string
}
type Props = {

}


export const paymentNameDropDown = {
  Id: 'id',
  ValorTotal: 'valor da nota',
  email: 'email',
  date: 'data de emissão',
  ChaveDFe: 'chaveDFe',
  token: 'token',
  NomeFantasiaEmitente: 'nome do emitente'
}



export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'date',
    header: () => <div className='text-center'>Data de emissão</div>,
    cell: ({ row }) => {
      const dateObject = new Date(row.getValue('date'))
      const formatted = dateObject.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour12: false
      })

      return <div className='text-center font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: 'NomeFantasiaEmitente',
    header: () => <div className='text-center'>Nome do emitente</div>,
    cell: ({ row }) => {
      const issuerName: string = row.getValue('NomeFantasiaEmitente')
      return <div className='text-center font-medium'>{issuerName}</div>;
    },
  },
  {
    accessorKey: 'ValorTotal',
    header: () => <div className='text-center'>Valor da nota</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('ValorTotal'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)
      return <div className='text-center font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: 'Id',
    header: () => <div className='text-center'>Numero da nota</div>,
    cell: ({ row }) => {
      const status: string = row.getValue('Id');
      return <div className='text-center font-medium'>{status}</div>;
    },
  },

  {
    accessorKey: 'ChaveDFe',
    header: () => <div className='text-center'>Chave DFe</div>,
    cell: ({ row }) => {
      const chaveDFe = row.getValue('ChaveDFe');
      return <div className='text-center font-medium'>{row.getValue('ChaveDFe')}</div>
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className='outline-none active:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Abrir menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.ChaveDFe)}> <Copy size={14} className='mr-2' /> Copiar chave NFE </DropdownMenuItem>
            <DropdownMenuItem><FileText size={14} className='mr-2' /> Ver detalhes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu >
      )
    },
  },
]