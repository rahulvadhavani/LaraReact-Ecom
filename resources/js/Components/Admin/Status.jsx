import React, { useEffect } from 'react'

export default function Status(props) {
    const { color } = props;

    const colorClasses = {
        red: { bg: 'bg-red-100/60', text: 'text-red-600' },
        emerald: { bg: 'bg-emerald-100/60', text: 'text-emerald-600' },
        blue: { bg: 'bg-blue-100/60', text: 'text-blue-600' },
        yellow: { bg: 'bg-yellow-100/60', text: 'text-yellow-600' },
        gray: { bg: 'bg-gray-100/60', text: 'text-gray-600' },
        orange: { bg: 'bg-orange-100/60', text: 'text-orange-600' },
    };

    const bgClass = colorClasses[color].bg || 'bg-gray-100/60';
    const textClass = colorClasses[color].text || 'text-gray-600';

    return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${bgClass} dark:bg-gray-800`}>
            <span className={`text-xsm ${textClass}`} ><i className="fa-regular fa-circle-dot"></i></span>
            <h2 className={`text-sm font-normal ${textClass}`}>{props.children || 'Unverified'}</h2>
        </div>
    );
}
