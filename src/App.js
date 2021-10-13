import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

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
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
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
                {/*<button onClick={}>Remove customer</button>*/}

                {customers.length > 0 ?
                    <div>
                        {customers.map((customer, index) =>
                            <div onClick={()=> removeCustomer(customer)}>
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
