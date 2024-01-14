import React from 'react'

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
export default function Chart() {
    const data = [
        { name: 'Group A', value: 400 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <>
        ddd
            <PieChart width={800} height={200}>
                <Pie
                    data={data}
                    cx={120}
                    // cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
        </>
    )
}