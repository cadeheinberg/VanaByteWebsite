import React, { useEffect, useState } from "react";

const PlayerStats = () => {

    const [playerRows, setPlayerRows] = useState([])

    let rowID = 1;

    const getStats = async () => {
        try {
            const response = await fetch("http://64.135.202.81:5000/stats");
            const jsonData = await response.json();
            setPlayerRows(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    };

    //when this react component renders (the list) do the following
    //the [] makes it so it only renders once and not over and over 
    useEffect(() => {
        getStats();
    }, []);

    return <div className="playerstats">
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Player</th>
                    <th>Cakes</th>
                    <th>Level</th>
                    <th>Exp</th>
                    <th>Kills</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
                {/*
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                */}
                {playerRows.map(player => (
                    <tr key={player.UUID}>
                        <td>{rowID++}</td>
                        <td>{player.PlayerName}</td>
                        <td>{player.server_cakes}</td>
                        <td>{player.server_level}</td>
                        <td>{player.server_xp}</td>
                        <td>{player.kitpvp_kills}</td>
                        <td>{player.kitpvp_deaths}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
};

export default PlayerStats;