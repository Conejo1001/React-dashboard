import React from "react";
import "./WidgetLg.css";

function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  };

  return(
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2102332/pexels-photo-2102332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Chris Jordan</span>
          </td>
          <td className="widgetLgDate">30 August 2021</td>
          <td className="widgetLgAmount">$3,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Caroline Watson</span>
          </td>
          <td className="widgetLgDate">15 September 2021</td>
          <td className="widgetLgAmount">$950.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;