import { React } from 'react';
import './assets/index.css';

const MoneyControl = () => {

    // private component functions
    const _controlViewChanges = () => {
        let _timeOutGeneral = setTimeout(() => {
            var noVisibleElements = document.getElementsByClassName("noVisible");
            let index = 0;

            if (_isElementCorrect(noVisibleElements)) {
                _changeElementsVisibility(noVisibleElements[index]);
                index++;

                let dotVerticalEl = document.getElementsByClassName("dotVertical");
                let dotRotatesEl = document.getElementsByClassName("dotRotatesDiv");
                let dotVerticalHeight = 0;
                let dotRotateHeight = 35;
                clearInterval(_interval)
                _interval = setInterval(() => {
                    if (_canUpdateVerticalDots(index, dotVerticalHeight)) {
                        dotVerticalHeight += 15;
                        _updateDotsElement(dotVerticalEl, dotVerticalHeight);
                        index = 2;
                    } else if (_canUpdateRotatedDots(index, dotRotateHeight)) {
                        dotRotateHeight += 12;
                        _updateDotsElement(dotRotatesEl, dotRotateHeight);
                        index = 4;
                    } else if (_isElementCorrect(noVisibleElements, index)) {
                        _changeElementsVisibility(noVisibleElements[index]);
                        index++;
                    } else {
                        clearInterval(_interval)
                    }
                }, 600);
            }

            clearTimeout(_timeOutGeneral)
        }, 500);
    }

    const _changeElementsVisibility = (element, visible = true) => {
        if (visible) {
            element.classList.add("yesVisible");
        } else {
            element.classList.add("noVisible");
        }
    }

    const _isElementCorrect = (element, index = 0) => {
        return element !== undefined && element !== null && element[index] !== undefined && element[index] !== null;
    }

    const _canUpdateVerticalDots = (index, dotVerticalHeight) => {
        const maxHeight = window.screen.width > 496 ? 135 : 90;
        return (index === 1 || index === 2) && dotVerticalHeight <= maxHeight;
    }

    const _canUpdateRotatedDots = (index, dotRotateHeight) => {
        const maxHeight = window.screen.width > 496 ? 119 : 83;
        return (index === 3 || index === 4) && dotRotateHeight < maxHeight;
    }

    const _updateDotsElement = (element, newHeight) => {
        if (_isElementCorrect(element)) {
            _changeElementsVisibility(element[0]);
            _updateDotsHeigth(element[0], newHeight);
        }
    }

    const _updateDotsHeigth = (element, newHeight) => {
        element.style.height = newHeight + 'px';
    }
    //

    _controlViewChanges();

    let _interval;
    // html component functions

    //

    return (
        <>
            <div className="toolModuleDiv tool-moneyControl">
                <img src="./../controlmoneyicon.png" style={{ height: 65, width: 65 }} /><h1>Lista de la Compra</h1>
                <div className="toolModuleDiv tool-moneyControl-container">
                    <ul className="mininav-container">
                        <li><a className="mininav active" href="#home">Resumen</a></li>
                        <li><a className="mininav" href="#news">Cuenta</a></li>
                        <li className='itemLong'><a className="mininav" href="#about">Nuevo Movimiento</a></li>
                        <li><a className="mininav" href="#about">Gráficos</a></li>
                    </ul>


                    <ul className='mininavvertical-container'>
                        <li><a className="active" href="#home">Resumen</a></li>
                        <li><a href="#news">Cuenta</a></li>
                        <li><a href="#contact">Nuevo Movimiento</a></li>
                        <li><a href="#about">Gráficos</a></li>
                    </ul>
                    <br /><br />
                    <div className="yourMoneyContainer noVisible">
                        <div className="MoneyContainerInfo">
                            <h1 className="MoneyContainerTxt">Saldo</h1>
                            <h1 className="MoneyContainerMoney">3.383,95€</h1>
                        </div>
                        <div className="dot dotVertical noVisible noVisibleSlow"></div>
                    </div>
                    <div className="yourMonthContainer noVisible">
                        <div className="MonthContainerInfo">
                            <h1 className="MonthContainerTxt">Balance Septiembre</h1>
                            <h1 className="MonthContainerMoney"><span className="signoMoney">+</span>1.356,33€</h1><br />
                        </div>
                        <div className="dotRotatesDiv noVisible noVisibleSlow">
                            <div className="dot dotRotateToBoth"></div>
                        </div>
                    </div>
                    <div className="yourBalanceContainer noVisible">
                        <div className="BalanceContainerInfoMinus">
                            <h1 className="BalanceContainerTxtMinus">Gastos</h1>
                            <h1 className="BalanceContainerMoneyMinus">-3.356,33€</h1>
                        </div>
                        <div className="BalanceContainerInfoPlus">
                            <h1 className="BalanceContainerTxtPlus">Ingresos</h1>
                            <h1 className="BalanceContainerMoneyPlus">+3.333,33€</h1>
                        </div>
                    </div>
                    <div className="newMovement">
                        <button className="w-100 btn btn-lg btn-success addMovement noVisible">Añadir movimiento</button>
                    </div>
                </div>
            </div>
        </>
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
