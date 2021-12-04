import React from 'react';

const Bugs = () => (
    <div>Bugs Module</div>
);

export default {
    routeProps: {
        path: '/bugs',
        component: Bugs,
        type: 'others'
    },
    name: 'Bugs',
};
