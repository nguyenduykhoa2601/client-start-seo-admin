/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Table as TableAntd, Empty } from 'antd'

import styles from './Table.module.scss'

interface TableProps {
  data: Array<any>
  title: string
}

const Table: FC<TableProps> = ({ data, title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      {data.length > 0 ? (
        <TableAntd
          className={styles.table}
          columns={Object.keys(data[0]).map((k) => {
            return {
              key: k,
              dataIndex: k,
              title: k,
              align: 'center'
            }
          })}
          dataSource={data.map((item) => {
            const newItem = { ...item }

            Object.keys(newItem).map((k) => {
              if (typeof newItem[k] === 'number') {
                newItem[k] = item[k].toFixed(2)
              }
            })

            return newItem
          })}
          bordered
          pagination={{
            pageSize: 20,
            hideOnSinglePage: true
          }}
        />
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default Table
