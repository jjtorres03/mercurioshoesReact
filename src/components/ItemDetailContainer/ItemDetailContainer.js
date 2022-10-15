import React, { useState, useEffect } from "react";
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import {getFirestore, doc, getDoc } from 'firebase/firestore';





export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect( () => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'mercurioshoes', id)
    getDoc(queryDoc)
    .then(res => setProduct({id: res.id, ...res.data()}))
}, [id])

    
    return (

        <ItemDetail data={product}/>

    );
}