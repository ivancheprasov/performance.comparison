'use client';

import { Card, Table } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Loader from "../../components/loader/loader";
import { CLIENT_STANDARD_DATE, NO_SEARCH_RESULTS, SORT_DIRECTIONS } from '../../constants/table';
import { generateReservations } from '../../utils/generate-reservations';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from "../../types/routes";

const reservations = generateReservations();

export default function MainPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = sessionStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      navigate(AppRoutes.SignIn);
    }
  }, [navigate]);

  function renderDateColumn(record: Date) {
    return dayjs(record).format(CLIENT_STANDARD_DATE);
  }

  if (!username) return <Loader />;

  // @TODO add proper sorters

  return (
    <Card title={`${username}'s Reservations`}>
      <Table
        sortDirections={[SORT_DIRECTIONS.ascend, SORT_DIRECTIONS.descend, SORT_DIRECTIONS.ascend]}
        showSorterTooltip={false}
        locale={{ emptyText: NO_SEARCH_RESULTS }}
        rowKey="id"
        dataSource={reservations}
      >
        <Table.Column title="Status" dataIndex="status" sorter ellipsis width={160} />
        <Table.Column
          title="Confirmation Number"
          dataIndex="confirmationNumber"
          defaultSortOrder={SORT_DIRECTIONS.ascend}
          width={400}
        />
        <Table.Column title="Arrival" dataIndex="arrival" sorter render={renderDateColumn} width={120} />
        <Table.Column title="Departure" dataIndex="departure" sorter render={renderDateColumn} width={120} />
        <Table.Column title="Nights" dataIndex="nights" sorter width={75} />
      </Table>
    </Card>
  );
}
