import { useEffect, useState } from "react";
import { Bowler } from "../types/Bowlers";

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch(""); // PUT IN LOCAL HOST ADDRESS!!
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Best Marriott Food</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.BowlerID}>
              <td>{b.BowlerFirstName}</td>
              <td>{b.BowlerMiddleInit}</td>
              <td>{b.BowlerLastName}</td>
              <td>{b.TeamID}</td>
              <td>{b.BowlerAddress}</td>
              <td>{b.BowlerCity}</td>
              <td>{b.BowlerState}</td>
              <td>{b.BowlerZip}</td>
              <td>{b.BowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
