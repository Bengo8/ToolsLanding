import { useState } from 'react'
import CategoriesServices from '../services/CategoriesServices';

const AddProduct = ({onAdd}) => {

    const catSrvc = new CategoriesServices();
    const [text, setText] = useState('');
    const [cat, setCat] = useState('Carne');
    const [bought, setBought] = useState(false);

    const categories = catSrvc.getCategories();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Por favor añade un producto')
            return;
        }

        onAdd({text, cat, bought});

        setText('');
        setCat(cat);
        setBought(bought);
    }

    return (
        <form className="listaCompra-add-form" onSubmit={(e) => onSubmit(e)}>
            <div className="listaCompra-form-control">
                <label>Producto</label>
                <input type="text" placeholder="Añade un Producto" 
                value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>

            <div>
                <label>Categoría</label>
                <div className="listaCompra-form-control listaCompra-caja listaCompra-caja-cat">
                    <select className="listaCompra-select-cat listaCompra-select" onChange={(e) => setCat(e.target.value)}>
                        <optgroup label="Categorías:">
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                        </optgroup>
                    </select>
                </div>
            </div>

            <div className="listaCompra-form-control listaCompra-form-control-check">
                <label>Comprado</label>
                <input type="checkbox" checked={bought}
                value={bought} onChange={(e) => setBought(e.currentTarget.checked)}></input>
            </div>

            <input type="submit" value='Guardar Producto' className="listaCompra-btn listaCompra-btn-block"></input>
        </form>
    )
}


export default AddProduct