import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)


    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id:Date.now(),
        }
      dispatch({type: 'ADD_CUSTOMER', payload: customer})
    }

    return (
        <div className={styles.app_wrapper}>
            <div className={styles.content}>
                <div>{cash}$</div>
                <hr/>
                <input type="text"/>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <input type="text"/>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
                <button onClick={() => addCustomer(prompt())}>Add customer</button>
                <button onClick={() => getCash(Number(prompt()))}>Remove customer</button>

                {customers.length > 0 ?
                    <div>
                        {customers.map((customer, index) =>
                            <div>
                                {index + 1}.{customer.name}

                            </div>)}
                    </div>
                    :
                    <div>
                        Customers are absent
                    </div>
                }

            </div>


        </div>
    );
}

export default App;
