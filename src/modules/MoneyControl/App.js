import { React } from 'react';
import './assets/index.css';

const MoneyControl = () => {

    // html component functions
  
    //

    return (
        <div className="toolModuleDiv tool-moneyControl">
            <div className="toolModuleDiv tool-moneyControl-container">
               <h1>Saldo:</h1>
               <h1>1.200,45€</h1>
               <h1>Saldo:</h1>
               <h1>1.200,45€</h1>
            </div>
        </div>
    );
}

export default {
    routeProps: {
        path: '/tool/MoneyControl',
        component: MoneyControl,
        type: 'toolModule'
    },
    name: 'ToolMoneyControl',
};
