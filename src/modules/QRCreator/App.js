import { React } from 'react';
import './assets/index.css';

const QRCreator = () => {

    // html component functions
  
    //

    return (
        <div className="toolModuleDiv tool-qrcreator">
            <div className="toolModuleDiv tool-qrcreator-container">
               <h1>QR CREATOR</h1>
            </div>
        </div>
    );
}

export default {
    routeProps: {
        path: '/tool/QRCreator',
        component: QRCreator,
        type: 'toolModule'
    },
    name: 'ToolQRCreator',
};
