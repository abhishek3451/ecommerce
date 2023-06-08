import Tours from "../ItemList/data";

import { Table } from "reactstrap";

const Tour = () => {
  return (
    <>
      <h1 className="text-center m-3">Tours</h1>
      <Table>
        <tbody>
          {Tours.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.date}</th>
                <td>{item.place}</td>
                <td>{item.desc}</td>
                <td>
                  <button className="btn btn-primary">Buy Tickets</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Tour;
