import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

function Main(props) {
    return (
        <div style={{padding : "30px"}}>
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>CustomerName</th>
                        <th>AccountNumber</th>
                        <th>AccountType</th>
                    </tr>
                </thead>
                <tbody>
                    {props.accounts.map(account => {
                        return (

                            <tr>
                                <td>{account.id}</td>
                                <td>{account.customerName}</td>
                                <td>{account.accountNumber}</td>
                                <td>{account.accountType}</td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </Table>

        </div>
    )
}


const readState = (state) => {

    return {
        accounts: state.accounts
    }
}

export default connect(readState)(Main);