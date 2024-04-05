import React, { useState } from 'react';
import Link from 'next/link'
import { Box } from '../../styled_components/lib/listFilter'
const ListFilter = props => {
    const [status, setStatus] = useState(false)

    const button = () => {
        let count = 1
        const loop = (item) => {
            count++;
            item.forEach(element => {
                loop(element.children)
            })
        }
        props.items.children.forEach(item => {
            count++;
            if (item.children !== undefined)
                loop(item.children)
        });
        if (count > 8) {
            return (
                <div className="toggle"
                    onClick={() => setStatus(!status)}
                >
                    {(status) ? 'بستن' : 'مشاهده همه دسته بندی ها'}
                    <i className="rewind"></i>
                </div>
            )
        }
    }
    const checkActive = (value) => {
        if (props.currentCategory == value) {
            return ' active'
        }
    }

    const listLoop = (items) => {
        if (items !== undefined)
            return (
                <ul>
                    {items.map((item) =>
                        <li key={item.id} className={checkActive(item.id)}>
                            <Link as={`/categories/${item.id}`} href={`/categories?slug=${item.id}`}>
                                <a>
                                    {item.name}
                                </a>
                            </Link>
                            {listLoop(item.children)}
                        </li>
                    )}
                </ul>
            )
    }
    return (
        <Box open={status}>
            <ul className="list">
                <li className={checkActive(props.items.id)}>
                    <Link as={`/categories/${props.items.id}`} href={`/categories?slug=${props.items.id}`}>
                        <a>
                            {props.items.name}
                        </a>
                    </Link>
                    {listLoop(props.items.children)}
                </li>
            </ul>
            {button()}

        </Box>
    )
}

export default ListFilter