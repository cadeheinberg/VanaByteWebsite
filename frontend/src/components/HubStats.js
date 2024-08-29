import React, { useEffect, useState } from "react";
import API_URL from '../config';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function HubStats({ userData }) {

    const [playerRows, setPlayerRows] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: 'server_cakes',
        direction: 'desc'
    });

    const getStats = async () => {
        try {
            const response = await fetch(`${API_URL}stats`);
            const jsonData = await response.json();
            setPlayerRows(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const isArrowUp = (colToSortBy) => {
        return sortConfig.key === colToSortBy && sortConfig.direction === 'asc';
    }

    const sortRows = (rows, config) => {
        let sortedRows = [...rows];
        if (config.key !== null) {
            sortedRows.sort((a, b) => {
                if (a[config.key] < b[config.key]) {
                    return config.direction === 'asc' ? -1 : 1;
                }
                if (a[config.key] > b[config.key]) {
                    return config.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedRows;
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (isArrowUp(key)) {
            //reverse direction of sorting every click
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    useEffect(() => {
        getStats();
    }, []);

    const rowNames = ['PlayerName', 'server_cakes', 'server_level', 'server_xp', 'kitpvp_kills', 'kitpvp_deaths']

    const sortedRows = sortRows(playerRows, sortConfig);

    return (
        <div className="mx-auto w-full max-w-[1240px] text-white px-4 sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-900">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"><div className="flex"><div className="">Player</div><div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(rowNames[0])}>{isArrowUp(rowNames[0]) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}</div></div></th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"><div className="flex"><div className="">Cakes</div><div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(rowNames[1])}>{isArrowUp(rowNames[1]) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}</div></div></th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"><div className="flex"><div className="">Level</div><div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(rowNames[2])}>{isArrowUp(rowNames[2]) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}</div></div></th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"><div className="flex"><div className="">Exp</div><div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(rowNames[3])}>{isArrowUp(rowNames[3]) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}</div></div></th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"><div className="flex"><div className="">Kills</div><div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(rowNames[4])}>{isArrowUp(rowNames[4]) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}</div></div></th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"><div className="flex"><div className="">Deaths</div><div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(rowNames[5])}>{isArrowUp(rowNames[5]) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}</div></div></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {sortedRows.map((player, index) => (
                            <tr key={player.UUID}>
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{index + 1}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{player.PlayerName}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">{player.server_cakes}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">{player.server_level}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">{player.server_xp}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">{player.kitpvp_kills}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">{player.kitpvp_deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default HubStats;
