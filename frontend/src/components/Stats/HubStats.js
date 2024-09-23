import React, { useEffect, useState } from "react";
import API_URL from '../../config';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function HubStats({ userData }) {
    const [playerRows, setPlayerRows] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: 'server_cakes',
        direction: 'desc'
    });

    const columns = [
        { key: 'playerName', label: 'Player' },
        { key: 'server_cakes', label: 'Cakes' },
        { key: 'server_level', label: 'Level' },
        { key: 'server_xp', label: 'Exp' },
        { key: 'kitpvp_kills', label: 'Kills' },
        { key: 'kitpvp_deaths', label: 'Deaths' },
    ];

    const getStats = async () => {
        try {
            const response = await fetch(`${API_URL}stats`);
            const arrayOfJsons = await response.json();
            setPlayerRows(arrayOfJsons);
        } catch (err) {
            console.error(err.message);
        }
    };

    const isArrowUp = (colToSortBy) => sortConfig.key === colToSortBy && sortConfig.direction === 'asc';

    const sortRows = (rows, config) => {
        let sortedRows = [...rows];
        if (config.key) {
            sortedRows.sort((a, b) => {
                if (a[config.key] < b[config.key]) return config.direction === 'asc' ? -1 : 1;
                if (a[config.key] > b[config.key]) return config.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortedRows;
    };

    const handleSort = (key) => {
        const direction = isArrowUp(key) ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    };

    useEffect(() => {
        getStats();
    }, []);

    const sortedRows = sortRows(playerRows, sortConfig);

    return (
        <div className="bg-mywhite">
            <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-[1240px] text-white">
                <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-900">
                            <tr>
                                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                                {columns.map((column) => (
                                    <th key={column.key} scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        <div className="flex">
                                            <div>{column.label}</div>
                                            <div className="w-full flex justify-end hover:cursor-pointer hover:text-mygreen" onClick={() => handleSort(column.key)}>
                                                {isArrowUp(column.key) ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />}
                                            </div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {sortedRows.map((player, index) => (
                                <tr key={player.mc_uuid}>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{index + 1}</td>
                                    {columns.map(column => (
                                        <td key={column.key} className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">{player[column.key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HubStats;
