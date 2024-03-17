"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Javascript: React.FC = () => {
  const [trainStations, setTrainStations] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchTrainStations();
  }, []);

  const fetchTrainStations = async () => {
    try {
      const response = await fetch('https://api.irail.be/stations/?format=json');
      const data = await response.json();
      setTrainStations(data.station);
      // console.log(trainStations);
    } catch (error) {
      console.error('Error fetching train stations:', error);
    }
  };

  const filteredTrainStations = trainStations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className=''>
      <Link href="/">
        <div>Back to Home</div>
      </Link>
    <div>
      <input
        type="text"
        placeholder="Search train stations"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrainStations.map((station) => (
            <tr key={station.id}>
              <td>
                {station.name}
              </td>
              <td>{station.locationX}</td>
              <td>{station.locationY}</td>
              <td>
                <input type="text" placeholder="Add note" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Javascript;
