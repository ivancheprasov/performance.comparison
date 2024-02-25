'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, Table } from 'antd';
import dayjs from 'dayjs';
import Loader from '../components/loader/loader';
import Api from '../lib/api/api';
import { CLIENT_STANDARD_DATE, NO_SEARCH_RESULTS, SERVER_STANDARD_DATE, SORT_DIRECTIONS } from '../lib/constants/table';

export default function Reservations() {
  const { data: reservations, isFetching } = useQuery({ queryKey: ['getReservations'], queryFn: Api.getReservations });

  function renderDateColumn(record: Date) {
    return dayjs(record, SERVER_STANDARD_DATE).format(CLIENT_STANDARD_DATE);
  }

  if (isFetching) return <Loader />;

  // @TODO add proper sorters

  return (
    <Card title='Reservations'>
      <Table
        sortDirections={[SORT_DIRECTIONS.ascend, SORT_DIRECTIONS.descend, SORT_DIRECTIONS.ascend]}
        showSorterTooltip={false}
        locale={{ emptyText: NO_SEARCH_RESULTS }}
        rowKey="id"
        dataSource={reservations}
        scroll={{ y: 550 }}
        virtual
        pagination={false}
      >
        <Table.Column title="Status" dataIndex="status" sorter ellipsis width={160} />
        <Table.Column
          title="Confirmation Number"
          dataIndex="confirmationNumber"
          defaultSortOrder={SORT_DIRECTIONS.ascend}
          sorter
          width={400}
        />
        <Table.Column title="Arrival" dataIndex="arrival" sorter render={renderDateColumn} width={120} />
        <Table.Column title="Departure" dataIndex="departure" sorter render={renderDateColumn} width={120} />
        <Table.Column title="Nights" dataIndex="nights" sorter width={75} />
      </Table>
    </Card>
  );
}
