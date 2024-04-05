import React, { useState } from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import { Box, Dot, ActiveRail, Detail } from '../../styled_components/lib/range'


const Handle = ({
    handle: { id, percent },
    getHandleProps
}) => {
    return (
        <Dot
            id={id}
            percent={percent}
            {...getHandleProps(id)}
        />
    )
}
const Track = ({ source, target, getTrackProps }) => {
    return (
        <ActiveRail
            source={source.percent}
            target={target.percent}
            {...getTrackProps()}
        />
    )
}
const Range = props => {
    const [values, setValues] = useState(props.values)
    return (
        <Box>
            <Slider
                onChange={(data) => {
                    setValues([Math.ceil(data[1]),Math.ceil(data[0])])
                }}
                reversed
                className="range"
                domain={props.domain}
                values={props.values}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div className="rail" {...getRailProps()} />
                    )}
                </Rail>

                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
            </Slider>
            <Detail>
                <div className="ranges">
                    <div>
                        <span>از</span>
                        <span className="number">
                            {(values[0]!==null)?values[0].toLocaleString('fa-IR'):'-'}
                        </span>
                        <span>تومان</span>
                    </div>
                    <div>
                        <span>تا</span>
                        <span className="number">
                            {(values[1]!==null)?values[1].toLocaleString('fa-IR'):'-'}
                        </span>
                        <span>تومان</span>
                    </div>
                </div>
                <div className="but">
                    <button
                        onClick={()=>{
                            props.onChange(values)
                        }}
                    >
                        اعمال محدوده قیمت
                    </button>
                </div>
            </Detail>
        </Box>
    )
}
export default Range