import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICrypto } from './models/Crypto'

import { list } from './Services'


function Main() {
    const navigate = useNavigate()
    const [arr, setArr] = useState<ICrypto>({})

    useEffect(() => {
        list().then(res => {
            setArr(res.data)
        })
    }, [])

    return (
        <>
            <div className="table table-responsive w-100 d-block d-md-table mt-3">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Coin</th>
                            <th scope="col">Price</th>
                            <th scope="col">Web</th>
                            <th scope="col">Change 1 Day</th>
                            <th scope="col">Change 1 Hours</th>
                            <th scope="col">Change 1 Week</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.coins?.map((item, index) =>
                                <tr>
                                    <td> {item.rank} </td>
                                    <th scope="row"> {item.symbol} </th>
                                    <td> <img  src={item.icon} alt="" width="25"   /> </td>
                                    <td> {item.price?.toFixed(2)} </td>
                                    <td> <a href={item.twitterUrl}>{item.symbol}</a> </td>
                                    <td width="120" >
                                    {item.priceChange1d?.toString().indexOf("-") ? (
                                        <p className="bg-success">{item.priceChange1d }</p>
                                    ) : (
                                        <p className="bg-danger">{item.priceChange1d }</p>
                                    )}</td>
                                    <td width="150">
                                    {item.priceChange1h?.toString().indexOf("-") ? (
                                        <p className="bg-success">{item.priceChange1h }</p>
                                    ) : (
                                        <p className="bg-danger">{item.priceChange1h }</p>
                                    )}</td>
                                    <td width="150">
                                    {item.priceChange1w?.toString().indexOf("-") ? (
                                        <p className="bg-success">{item.priceChange1w }</p>
                                    ) : (
                                        <p className="bg-danger">{item.priceChange1w }</p>
                                    )}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Main