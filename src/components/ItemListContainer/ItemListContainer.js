import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';




export const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'mercurioshoes');
        if (categoryId) {
            const queryFiltrer = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFiltrer)
                .then(res => setItems(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        } else {
            getDocs(queryCollection)
            .then(res => setItems(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        }
    }, [categoryId])



    return (

        <ItemList products={items} />
    );
};


export default ItemListContainer;