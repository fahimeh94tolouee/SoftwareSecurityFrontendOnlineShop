import React from 'react';
import Link from 'next/link';
import { List } from '../../styled_components/lib/breadcrumb';
const Breadcrumb = props => {
    const linkMaker = (item) => {
        switch (props.type) {
            case 'product':
                if (item.id) {
                    return (
                        <Link as={`/categories/${item.id}`} href={`/categories?slug=${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    )
                } else {
                    return item.name
                }
            case 'category':
                return (
                    <Link as={`/categories/${item.id}`} href={`/categories?slug=${item.id}`}>
                        <a>{item.name}</a>
                    </Link>
                )
            default:
                return null
        }
    }
    return (
        <List>
            {props.items.map(item =>
                <li key={item.id}>
                    {linkMaker(item)}
                </li>
            )}
        </List>
    )
}
export default Breadcrumb;