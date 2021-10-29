import React, { useState } from 'react';
import data from '../people.json';

function Page1() {
    const [amount, setAmount] = useState(1000);
    const [people,setPeople] = useState([]);

    const handleAmountChange = (e) =>{
        setAmount(e.target.value);
        
        const arr = data.filter((d) => {
            let balance = d.balance;
            balance = parseFloat(balance.substring(1).replace(',',''));
            
        if(balance<=e.target.value)
            return true;
        
        else 
            return false;
        })

        setPeople(arr);
    }

   

    return (
        <div className="page1">
            <h1>Page 1</h1>
            <form>
                <span>$1,000</span>
                <input type="range" min="1000" max="4000" onChange={handleAmountChange}/>
                <span>$4,000</span>
                <br />
                <div className="currValue">Current Value: ${amount}</div>
               {people.length!==0 ? <table>
                    <tr>
                       <th>Name</th>
                       <th>Balance</th>
                       <th>Email</th>
                    </tr>
                    {people.map(p=>

                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.balance}</td>
                            <td>{p.email}</td>
                        </tr>
                       
                    )}
                </table>: <div className="no-data">No Data Available 🚩 </div>}
            </form>
        </div>
    )
}

export default Page1
