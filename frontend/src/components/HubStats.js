import React, { useEffect, useState } from "react";
import API_URL from '../config';

function HubStats() {

    const [playerRows, setPlayerRows] = useState([]);

    let rowID = 1;

    const getStats = async () => {
        console.log("trying to get stats 1")
        try {
            console.log("trying to get stats 2")
            const response = await fetch(`${API_URL}stats`);
            console.log("trying to get stats 3")
            const jsonData = await response.json();
            setPlayerRows(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getStats();
    }, []);

    return (
        <div className="mx-auto w-full max-w-[1240px] text-white px-4 sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-900">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Player</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cakes</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Level</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Exp</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Kills</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Deaths</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {playerRows.map(player => (
                            <tr key={player.UUID}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{rowID++}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{player.PlayerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.server_cakes}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.server_level}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.server_xp}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.kitpvp_kills}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.kitpvp_deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HubStats;
