import React, { useState } from "react";
import { Modal, Table } from "reactstrap";

function Journal() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  return (
    <div className="p-2 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h3>
          <b>Journal</b>
        </h3>
        <button className="app_btn" onClick={openModal}>
          Add trade
        </button>
      </div>
      <Modal isOpen={modal} toggle={openModal}>
        <div className="p-3">
          <p>
            <b>New Trade</b>
          </p>
          <div>
            <p>General Trade Data</p>
          </div>
          <div>
            <p>Trade Entry</p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p>Trade Exit</p>
          </div>
        </div>
      </Modal>
      <div>
        <Table className="ffffff " style={{ backgroundColor: "transparent" }}>
          <thead>
            <tr>
              <th className="">Instrument</th>
              <th className="">Setup</th>
              <th className="">Direction</th>
              <th className="">Entry Date</th>
              <th className="">Exit Date</th>
              <th className="">Entry Price</th>
              <th className="">Exit Price</th>
              <th className="">TP Price</th>
              <th className="">SL Price</th>
              <th className="">Gain/Loss ($)</th>
              <th className="">Gain/Loss (%)</th>
              <th className="">R Planned</th>
              <th className="">R Multiple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fffffff" scope="row">
                EUR/USD
              </td>
              <td className="fffffff">Breakout</td>
              <td className="fffffff">Buy</td>
              <td className="fffffff">12/12/2023 . 15:00</td>
              <td className="fffffff">12/12/2023 . 15:00</td>
              <td className="fffffff">1.1101</td>
              <td className="fffffff">1.1120</td>
              <td className="fffffff">1.1130</td>
              <td className="fffffff">1.1090</td>
              <td className="fffffff">200</td>
              <td className="fffffff">2</td>
              <td className="fffffff">1</td>
              <td className="fffffff">2</td>
            </tr>
            <tr>
              <td className="loss_row" scope="row">
                EUR/USD
              </td>
              <td className="loss_row">Breakout</td>
              <td className="loss_row">Buy</td>
              <td className="loss_row">12/12/2023 . 15:00</td>
              <td className="loss_row">12/12/2023 . 15:00</td>
              <td className="loss_row">1.1101</td>
              <td className="loss_row">1.1120</td>
              <td className="loss_row">1.1130</td>
              <td className="loss_row">1.1090</td>
              <td className="loss_row">-200</td>
              <td className="loss_row">-1</td>
              <td className="loss_row">1</td>
              <td className="loss_row">-1</td>
            </tr>
            <tr>
              <td className="" scope="row">
                EUR/USD
              </td>
              <td className="">Breakout</td>
              <td className="">Buy</td>
              <td className="">12/12/2023 . 15:00</td>
              <td className="">12/12/2023 . 15:00</td>
              <td className="">1.1101</td>
              <td className="">1.1120</td>
              <td className="">1.1130</td>
              <td className="">1.1090</td>
              <td className="">-200</td>
              <td className="">-1</td>
              <td className="">1</td>
              <td className="">-1</td>
            </tr>{" "}
            <tr>
              <td className="" scope="row">
                EUR/USD
              </td>
              <td className="">Breakout</td>
              <td className="">Buy</td>
              <td className="">12/12/2023 . 15:00</td>
              <td className="">12/12/2023 . 15:00</td>
              <td className="">1.1101</td>
              <td className="">1.1120</td>
              <td className="">1.1130</td>
              <td className="">1.1090</td>
              <td className="">-200</td>
              <td className="">-1</td>
              <td className="">1</td>
              <td className="">-1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Journal;
