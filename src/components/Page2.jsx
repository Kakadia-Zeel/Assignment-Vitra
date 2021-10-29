import React, { useState } from 'react'
import data from '../people.json';

function Page2() {
    const [people,setPeople] = useState([]);
    const findPeople = (e) =>{

        const arr = data.filter((d) => {
            let balance = d.balance;
            balance = parseFloat(balance.substring(1).replace(',',''));
            
        if(balance<2000 && d.isActive===false)
            return true;
        
        return false;
        })

        setPeople(arr);
    }

    
    return (
        <div className="page2">
            <h1>Page 2</h1>
            <button onClick={findPeople}>Click to get Results</button>

            {people.length !== 0 ? <table>
                    <tr>
                       <th>Name</th>
                       <th>Balance</th>
                       <th>Friends</th>
                       <th>isActive</th>
                    </tr>
                    {people.map(p=>

                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.balance}</td>
                            <td>{p.friends.map(f=><p key={f.id}>{f.name}</p>)}</td>
                            <td>{p.isActive+""}</td>
                        </tr>
                       
                    )}
                </table> : null}

        </div>
    )
}

export default Page2
