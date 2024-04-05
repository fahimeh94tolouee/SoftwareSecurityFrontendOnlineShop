import React from 'react'
const  ListSort = props => {
    let sorts = {
        most_visited: 'پربازدیدترین',
        popular: 'محبوب‌ترین',
        newest: 'جدیدترین',
        bestselling: 'پرفروش‌ترین',
        cheapest: 'ارزان ترین',
        expensive: 'گران‌ترین',
    }
    return (
        <div className="sort">
            <i className="icon-menu-1"></i>
            <ul>
                <li>
                    مرتب سازی بر اساس:
                </li>
                {Object.keys(sorts).map((key,index)=>
                    <li 
                        key={index} 
                        onClick={()=>{
                            if(props.active!==key){
                                props.onChange(key)
                            }
                        }}
                        className={(props.active==key)?'active':''}>
                        {sorts[key]}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ListSort