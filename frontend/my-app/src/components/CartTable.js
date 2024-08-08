import '../style/CartTable.css';

function CartTable() {
    return (
        <div className='center'>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Discount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Teléfono</td>
                <td>$50</td>
                <td>2</td>
                <td>$10</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Biletera</td>
                <td>$15</td>
                <td>3</td>
                <td>$2</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Computador</td>
                <td>$100</td>
                <td>4</td>
                <td>$45</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default CartTable;