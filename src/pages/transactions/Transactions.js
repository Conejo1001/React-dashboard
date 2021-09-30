import React, { useState }  from 'react';
import TransactionsInfo from "../../components/transactionsInfo/TransactionsInfo"
import Chart from "../../components/chart/Chart"
import { transactionData, transactionsRows } from "../../DummyData";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Transactions.css"

function Transactions() {
    const [data, setData] = useState(transactionsRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email",
         headerName: "Email",
          width: 200 },
        {
          field: "date",
          headerName: "date",
          width: 150,
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
          width: 180,
        },
        {
          field: "status",
          headerName: "Status",
          width: 150,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/user/" + params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];

    return (
        <div className="transactions">
            <TransactionsInfo />
            <Chart data={transactionData} title="Transactions per Month" dataKey="Transactions" grid />
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
            />      
        </div>
    )
}

export default Transactions;
