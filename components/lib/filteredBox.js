import React from 'react';
import { Box } from '../../styled_components/lib/filteredBox'
const FilteredBox = props => {
    const viewFilters = () => {
        let items = []
        props.filters.forEach((item) => {
            switch (item.type) {
                case 'search_box':
                    Object.keys(props.filtered).forEach(filterKey => {
                        if (filterKey === item.slug) {
                            items.push({
                                slug: item.slug,
                                type: item.type,
                                title: props.filtered[filterKey],
                                value: props.filtered[filterKey]
                            });
                        }
                    })
                    break;
                case 'checkbox':
                    Object.keys(props.filtered).forEach(filterKey => {
                        if (filterKey === item.slug) {
                            item.items.forEach(element => {
                                props.filtered[filterKey].forEach(value => {
                                    if (element.id == value) {
                                        items.push({
                                            slug: item.slug,
                                            type: item.type,
                                            title: element.name,
                                            value: element.id
                                        });
                                    }
                                })
                            })
                        }
                    })
                    break;
                case 'boolean':
                    Object.keys(props.filtered).forEach(filterKey => {
                        if (filterKey === item.slug && props.filtered[filterKey]===true) {
                            items.push({
                                slug: item.slug,
                                type: item.type,
                                title: item.title,
                                value: false
                            });
                        }
                    })
                    break;
                case 'range':
                    Object.keys(props.filtered).forEach(filterKey => {
                        if (filterKey === item.slug) {
                            items.push({
                                slug: item.slug,
                                type: item.type,
                                title: `از ${props.filtered[filterKey]['min'].toLocaleString('fa-IR')} تا ${props.filtered[filterKey]['max'].toLocaleString('fa-IR')} تومان`,
                                value: false
                            });
                        }
                    })
                    break;
                default:
                    break;
            }
        })
        if (items.length) {
            return (
                <Box>
                    <div className="title">
                        فیلتر های اعمال شده
                        <span
                            onClick={()=>{
                                props.resetFilter()
                            }}
                        >
                            حذف فیلترها
                        </span>
                    </div>
                    <div className="content">
                        {items.map((filter, index) =>
                            <span 
                                key={index}
                                onClick={()=>{
                                    props.removeFilter(filter)
                                }}
                            >
                                {filter.title}
                            </span>
                        )}
                    </div>
                </Box>
            )
        } else {
            return null;
        }
    }
    return viewFilters()
}
export default FilteredBox