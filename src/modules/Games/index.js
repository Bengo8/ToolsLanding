import React from 'react';

const Games = () => (
    <div>Games Module</div>
);

export default {
    routeProps: {
        path: '/games',
        component: Games,
        type: 'others'
    },
    name: 'Games',
};
