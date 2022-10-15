import { Item } from '../Item/Item'
import './ItemList.css'





export const ItemList = ( {products} ) => {

    return (

    <div className='ItemList'>
            
    {
        products.map( item => <Item  key={item.id} item={item}/> )
    }
 
 </div>
    
)
}