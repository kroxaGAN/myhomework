import React, {useState} from 'react'
import Affairs from './Affairs'
import {debuglog} from "util";

// types
export type AffairPriorityType = any // need to fix any
export type AffairType = any // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: any = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'middle'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
// export const filterAffairs = (affairs: any, filter: any): any => { // need to fix any
//     if (filter === 'all') return affairs
//     if (filter === 'low') {
//         console.log(affairs, filter)
//         return (affairs.map((a: AffairType) => a.priority === filter))
//         debugger
//     } else return // need to fix
// }
// export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
//     return // need to fix
// }


function HW2() {
    let [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    let filteredAffairs = affairs
    const [filter, setFilter] = useState<FilterType>('all')
    //
    filteredAffairs = affairs.filter((t: any) => t.priority === filter)
    if(filter==='all'){
        filteredAffairs = affairs
    }
    // console.log(filteredAffairs)

    // const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
    //
    //     return  (alert(_id))// need to fix
    // }
    const deleteAffair=(id:number)=>{
        console.log(id)
        let filterAffairs=affairs.filter((f:any)=>f._id!==id)
        setAffairs(filterAffairs)
    }
    // const filteredAffairs = filterAffairs(affairs, filter)
    // const deleteAffairCallback = (_id: any) => {
    //     console.log(_id)
    //     debugger
    //     return(
    //     setAffairs(deleteAffair(affairs, _id)
    //     )
    //         )} // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2
            {/*should work (должно работать)*/}
            debugger
            <Affairs
                // data={affairs}
                data={filteredAffairs}
                setFilter={setFilter}
                // deleteAffairCallback={deleteAffairCallback}
                deleteAffair={deleteAffair}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
