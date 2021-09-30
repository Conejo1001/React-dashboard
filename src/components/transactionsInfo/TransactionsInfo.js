import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./TransactionsInfo.css";

function TransactionsInfo() {
  return(
    <div className="transactionsInfo">
      <div className="transactionsInfoItem">
        <span className="transactionsInfoTitle">Transfers Aproved</span>
        <div className="transactionsInfoContainer">
          <span className="transactionsInfoMoney">127 Transfers</span>
          <span className="transactionsInfoMoneyRate">
            20 <ArrowUpward  className="transactionsInfoIcon"/>
          </span>
        </div>
        <div className="transactinosInfoTrans">
        <span className="transactinosInfoMoneyTraspassed">$9,453 Moved in Approved Transfers</span>          
        <span className="transactionsInfoSub">Compared to last month</span>
        </div>
      </div>
      <div className="transactionsInfoItem">
        <span className="transactionsInfoTitle">Transfers Denied</span>
        <div className="transactionsInfoContainer">
          <span className="transactionsInfoMoney">60 Transfers</span>
          <span className="transactionsInfoMoneyRate">
            -13 <ArrowDownward className="transactionsInfoIcon negative"/>
          </span>
        </div>
        <div className="transactinosInfoTrans">
        <span className="transactinosInfoMoneyTraspassed">$3,000 Detained in Denied Transfers</span>  
        <span className="transactionsInfoSub">Compared to last month</span>
        </div>
      </div>     
    </div>
  );
}

export default TransactionsInfo;