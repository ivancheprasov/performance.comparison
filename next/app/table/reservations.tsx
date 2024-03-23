'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, Table } from 'antd';
import dayjs from 'dayjs';
import Api from 'shared-module/src/api/api';
import { CLIENT_STANDARD_DATE, NO_SEARCH_RESULTS, SERVER_STANDARD_DATE, SORT_DIRECTIONS } from 'shared-module/src/constants/table';
import { Reservation } from 'shared-module/src/types/reservation';
import styles from './reservations.module.scss';

export default function Reservations() {
  const { data: reservations, isFetching } = useQuery({ queryKey: ['getReservations'], queryFn: Api.getReservations });

  function renderDateColumn(record: Date) {
    return dayjs(record, SERVER_STANDARD_DATE).format(CLIENT_STANDARD_DATE);
  }

  function sortByString(a: Reservation, b: Reservation, columnName: keyof Reservation) {
    return (a[columnName] || '')
      .toString()
      .toLowerCase()
      .localeCompare((b[columnName] || '').toString().toLowerCase());
  }

  function sortByNumber(a: Reservation, b: Reservation, columnName: keyof Reservation) {
    if (!a[columnName]) return -1;
    if (!b[columnName]) return 1;
    return Number(a[columnName]) - Number(b[columnName]);
  }

  return (
    <Card title="Reservations" className={styles.card}>
      <Table
        sortDirections={[SORT_DIRECTIONS.ascend, SORT_DIRECTIONS.descend, SORT_DIRECTIONS.ascend]}
        showSorterTooltip={false}
        locale={{ emptyText: NO_SEARCH_RESULTS }}
        rowKey="id"
        dataSource={reservations}
        scroll={{ y: 550 }}
        virtual
        pagination={false}
        loading={isFetching}
      >
        <Table.Column
          title="Status"
          dataIndex="status"
          sorter={(a: Reservation, b) => sortByString(a, b, 'status')}
          ellipsis
          width={300}
        />
        <Table.Column
          title="Confirmation Number"
          dataIndex="confirmationNumber"
          defaultSortOrder={SORT_DIRECTIONS.descend}
          sorter={(a: Reservation, b) => sortByNumber(a, b, 'confirmationNumber')}
          width={250}
        />
        <Table.Column
          title="Arrival"
          dataIndex="arrival"
          render={renderDateColumn}
          sorter={(a: Reservation, b) => sortByString(a, b, 'arrival')}
          width={300}
        />
        <Table.Column
          title="Departure"
          dataIndex="departure"
          sorter={(a: Reservation, b) => sortByString(a, b, 'departure')}
          render={renderDateColumn}
          width={300}
        />
        <Table.Column
          title="Nights"
          dataIndex="nights"
          sorter={(a: Reservation, b) => sortByNumber(a, b, 'nights')}
          width={255}
        />
      </Table>
    </Card>
  );
}
