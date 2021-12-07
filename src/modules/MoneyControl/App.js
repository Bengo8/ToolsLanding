import { React } from 'react';
import './assets/index.css';

const MoneyControl = () => {

    // private component functions
    const _controlViewChanges = () => {
        let _timeOutGeneral = setTimeout(() => {
            var element = document.getElementsByClassName("noVisible");
            if (element !== undefined && element !== null && element[0] !== undefined && element[0] !== null) {
                let index = 0;

                element[index].classList.add("yesVisible");
                index++;

                let dotVerticalEl = document.getElementsByClassName("dotVertical")[0];
                let dotRotatesEl = document.getElementsByClassName("dotRotatesDiv")[0];
                let dotVerticalHeight = 0;
                let dotRotateHeight = 31;
                clearInterval(_interval)
                _interval = setInterval(() => {
                    dotVerticalHeight += 15;
                    if (dotVerticalHeight <= 75) {
                        dotVerticalEl.style.height = dotVerticalHeight + 'px';
                    } else if (index === 2 && dotRotateHeight <= 77) {
                        dotRotateHeight += 12;
                        dotRotatesEl.style.height = dotRotateHeight + 'px';
                    } else if (element[index] !== undefined) {
                        element[index].classList.add("yesVisible");
                        index++;
                    } else {
                        clearInterval(_interval)
                    }
                }, 500);
            }

            _timeOutGeneral = null;
            clearTimeout(_timeOutGeneral)
        }, 500);
    }
    //

    _controlViewChanges();

    let _interval;
    // html component functions

    //

    return (
        <div className="toolModuleDiv tool-moneyControl">
            <div className="toolModuleDiv tool-moneyControl-container">
                <div className="yourMoneyContainer noVisible">
                    <div className="MoneyContainerInfo">
                        <h1 className="MoneyContainerTxt">Tu Saldo es:</h1>
                        <h1 className="MoneyContainerMoney">3.383,95€</h1>
                    </div>
                    <div className="dot dotVertical"></div>
                </div>
                <div className="yourMonthContainer noVisible">
                    <div className="MonthContainerInfo">
                        <h1 className="MonthContainerTxt">Balance Septiembre</h1>
                        <h1 className="MonthContainerMoney"><span className="signoMoney">+</span>156,33€</h1><br />
                    </div>
                    <div className="dotRotatesDiv">
                        <div className="dot dotRotateToLeft"></div>
                        <div className="dot dotRotateToRigth"></div>
                    </div>
                </div>
                <div className="yourBalanceContainer noVisible">
                    <div className="BalanceContainerInfoMinus">
                        <h1 className="BalanceContainerTxtMinus">Gastos</h1>
                        <h1 className="BalanceContainerMoneyMinus">-156,33€</h1>
                    </div>
                    <div className="BalanceContainerInfoPlus">
                        <h1 className="BalanceContainerTxtPlus">Ingresos</h1>
                        <h1 className="BalanceContainerMoneyPlus">+0€</h1>
                    </div>
                </div>
                <div className="newMovement">
                    <button className="w-100 btn btn-lg btn-success addMovement noVisible">Añadir movimiento</button>
                </div>
                {/* <div class="dot"></div>
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div> */}
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
