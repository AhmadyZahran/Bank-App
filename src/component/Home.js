import React from 'react'
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux'

function Home(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>customerName</td>
                        <td>customerNumber</td>
                        <td>accountType</td>
                    </tr>
                </thead>
                <tbody>
                    {props.accounts.map(account => {
                        return (

                            <tr key={account.id} >
                                <td>{account.id}</td>
                                <td>{account.customerName}</td>
                                <td>{account.customerNumber}</td>
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

export default connect(readState)(Home);