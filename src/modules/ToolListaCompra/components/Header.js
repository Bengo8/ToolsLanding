const Header = ({ onAdd, active }) => {
    return (
        <header className='listaCompra-header'>
            <img src="./../listacompraicon.png" style={{height:65, width:65}} /><h1>Lista de la Compra</h1>
            <button style={{ backgroundColor: 'green' }} onClick={onAdd} className={active ? "listaCompra-btn active" : "listaCompra-btn"}>
                {active ? 'Cerrar' : 'Añadir'}
            </button>
        </header>
    )
}

export default Header;
