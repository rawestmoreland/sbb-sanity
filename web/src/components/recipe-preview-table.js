import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { useTable, useSortBy } from 'react-table'
import { nodesToTableData, getRecipeUrl } from '../lib/helpers'
import { AiOutlineCaretDown as DownIcon, AiOutlineCaretUp as UpIcon } from 'react-icons/ai'

import styles from './recipe-preview-table.module.scss'

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // Render the UI for your table
  return (
    // apply the table props
    <table className={styles.recipePreviewTable} {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className={styles.headerCell}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                      <span>
                        {column.isSorted ? column.isSortedDesc ? <DownIcon /> : <UpIcon /> : ''}
                      </span>
                    </div>
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

const RecipePreviewTable = (props) => {
  let data = []
  props.nodes.map((r) => {
    const { title, batchSize, style, fermentation, bjcp, abv, ibu, score, recipePage } = r
    if (recipePage) {
      data.push({
        title: <Link to={getRecipeUrl(r.slug.current)}>{title}</Link>,
        batchSize,
        style,
        fermentation,
        bjcp,
        abv,
        ibu,
        score,
      })
    }
  })
  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'title',
    },
    {
      Header: 'Batch Size',
      accessor: 'batchSize',
    },
    {
      Header: 'Style',
      accessor: 'style',
    },
    {
      Header: 'Fermentation',
      accessor: 'fermentation',
    },
    {
      Header: 'BJCP',
      accessor: 'bjcp',
    },
    {
      Header: 'ABV',
      accessor: 'abv',
    },
    {
      Header: 'IBU',
      accessor: 'ibu',
    },
    {
      Header: 'Score',
      accessor: 'score',
    },
  ])
  return (
    <div style={{ display: 'flex' }}>
      <Table columns={columns} data={data} />
    </div>
  )
}
export default RecipePreviewTable
