import { createStore } from "redux";


const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 3,
            customerName: "Jafer Al-dakhily",
            accountNumber: "535353",
            accountType: "Student accounts"
        },
        {
            id: 4,
            customerName: "Jafar Thwahrah",
            accountNumber: "999987",
            accountType: "Student accounts"
        }
    ]

}




const reducer = (state = initState, action) => {
    return state;

}
const store = createStore(reducer);

export default store ;