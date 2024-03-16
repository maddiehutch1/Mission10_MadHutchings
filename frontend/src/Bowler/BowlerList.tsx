import { useEffect, useState } from "react";
import { Bowler } from "../types/Bowlers";
import "../App.css";

function BowlerList(props: any) {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]); // create variables retrieves data and sets data of bowler

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch("http://localhost:5062/bowler"); // here is the link that connects to the API, only do it once, not repeatedly
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  // table is returned, calling from the bowlerData that was fetched from the ts file
  return (
    <>
      <br />
      <table className="table table-bordered">
        <thead className="thead">
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
          {/* map out all the variables pulled from bowlerData */}
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
