"use client";
import { useState } from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default function Link({ page, children }: any) {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a
            className={status}
            href={page || '#'
            }
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
}