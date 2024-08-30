import React from 'react'

export default function ListRender2() {
    
    const names = ["안성준","이소진","이동훈","서타몽"];

    const listItems = names.map((names, index) => <h3 key={index}>{names}</h3>);

    // const counts: number[] = [];
    // for (let count=0; count<10; count++){
    //     counts.push(count);
    // }

    return (
        <div>
            {listItems}
        </div>
    )
}
