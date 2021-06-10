import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const result = await fetch("https://api.covid19india.org/data.json");
    const actualData = await result.json(result);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1 className="text-center mt-4 text-danger">Covid 19 DashBoard</h1>;
      <div className="container">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">State</th>
              <th scope="col">Active</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deaths</th>
              <th scope="col">Recovered</th>
              <th scope="col">LastUpdateTime</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ArrElem, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{ArrElem.state}</th>
                  <td>{ArrElem.active}</td>
                  <td>{ArrElem.confirmed}</td>
                  <td>{ArrElem.deaths}</td>
                  <td>{ArrElem.recovered}</td>
                  <td>{ArrElem.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Covid;
