import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faCircle } from '@fortawesome/free-solid-svg-icons';
import Cards from './cards';

function Home(props){
    var propsData = props.coins;
    const [inputValue,setInputValue] = useState();
    const [newCoinData,setNewCoinData] = useState([]);
    const [show,setShow] = useState(true);
     
    var handleChange = (event) => {
        setInputValue(event.target.value);
    }
    var getCoin = () => {
        if(!inputValue){
            alert('Enter Coin Symbol');
            return;
        }
        var newData = propsData.filter((coinName)=>{
            return coinName.symbol === inputValue
        })
        for(var i=0; i<newData.length; i++){
            var n = newData[i];
        }
        setNewCoinData(prev=>{return [...prev,n]});
        setShow(false);
    }
    var Savedata = (event) => {
        var id = event.target.parentNode.parentNode.id;
        var val = document.getElementById(id).querySelectorAll('.row');
        var total = {
            name: val[0].innerHTML,
            symbol: val[1].innerHTML,
            marketCap: val[2].innerHTML,
            currentPrice: val[3].innerHTML
        }
        const res = fetch('/postdata', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body : JSON.stringify({
                name: total.name,
                symbol: total.symbol,
                market_cap: total.marketCap,
                current_price: total.currentPrice
            })
        }) 
        console.log(res);
        if(event.target.value === total.name){
            let td = event.target.parentNode;
            let btn = document.createElement('a');
            btn.innerHTML = "View";
            btn.className = 'viewBtn';
            btn.href = '/view';
            td.removeChild(td.children[0]);
            td.appendChild(btn);
        }  
    }
    return(
        <div className='homepage'>
            <Cards />
            <div className='searchtable'>
                <div className='search'>
                    <div className='cdt'>
                        <p>Crypto Details Table</p>
                    </div>
                    <div className='iconin'>
                        <div><FontAwesomeIcon icon={faMagnifyingGlass} onClick={getCoin}/><input onChange={handleChange} value={inputValue} type='text' placeholder='Search by Coin Symbol'/></div>
                    </div>
                </div>
                <div>
                    <table id='table'>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Symbol</th>
                                <th>Market Capital</th>
                                <th></th>
                                <th>Current Price</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {show ? propsData.map((ele,index)=> {return <tr key={index} id={index+1} className='trrow'>
                                <td className='row' value={ele.name}>{ele.name}</td>
                                <td value={ele.symbol}><p className='symbol'><FontAwesomeIcon icon={faCircle} style={{width:"10px",height:"10px"}}/><span className='row'>{ele.symbol.toUpperCase()}</span></p></td>
                                <td className='row' value={ele.market_cap}>{(parseInt(ele.market_cap)/1000000).toFixed(1) + 'M'}</td>
                                <td><button id='button' value={ele.name} className='btn' onClick={(event)=>Savedata(event)}>Save Data</button></td>
                                <td className='row' value={ele.current_price}>{'$'+ele.current_price}</td></tr>}) : 
                                newCoinData.map((ele,index)=> {return <tr key={index} id={index+1} className='trrow'>
                                <td className='row' value={ele.name}>{ele.name}</td>
                                <td value={ele.symbol}><p className='symbol'><FontAwesomeIcon icon={faCircle} style={{width:"10px",height:"10px"}}/><span className='row'>{ele.symbol.toUpperCase()}</span></p></td>
                                <td className='row' value={ele.market_cap}>{(parseInt(ele.market_cap)/1000000).toFixed(1) + 'M'}</td>
                                <td><button id='button' value={ele.name} className='btn' onClick={(event)=>Savedata(event)}>Save Data</button></td>
                                <td className='row' value={ele.current_price}>{'$'+ele.current_price}</td></tr>})}
                        </tbody>      
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home;