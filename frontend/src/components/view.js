import React, { useEffect, useState } from 'react';
import './view.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Cards from './cards';

function View(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('/getdata').then(res=>{
            return res.json()
        }).then(newdata=>{setData(newdata)})
    },[])
    function removeData(event,symbol){
        let n = data.filter((item)=>item.symbol!==symbol);
        setData(n);   
        var id = event.target.parentNode.parentNode.id;
        var val = document.getElementById(id).querySelectorAll('.row');
        var sym = val[0].innerText;
        let dataDel = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response= fetch('/deletedata/'+sym, dataDel).then(res=>{return res.json()});
        console.log(response);
    }
    return(
        <div className='viewpage'>
            <Cards />
            <table style={{marginTop:"100px"}}>
                <thead>
                    <tr>
                        <th colSpan='5' style={{backgroundColor:"bisque"}}>SAVED DATA TABLE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele,index)=>{return <tr key={index} id={index+1}>
                        <td>{ele.name}</td>
                        <td className='row'><p className='symbol1'><FontAwesomeIcon icon={faCircle} style={{width:"10px",height:"10px"}}/><span>{ele.symbol}</span></p></td>
                        <td>${ele.market_cap}</td>
                        <td><button className='btn1' onClick={(event)=>removeData(event,ele.symbol)}>DELETE</button></td>
                    <td>{ele.current_price}</td></tr>})}
                </tbody>
                <thead>
                    <tr>
                        <th colSpan='5' style={{backgroundColor:"bisque"}}><a className='btn1' href='/home'>back</a></th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default View;