"use client"

import { RootState } from "@/store"
import { useState, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { ChangeSearch,ClearSearch } from "@/store/reducers/search"

export default function Search()
{

    const search = useSelector((state:RootState) => state.search);
    const dispatch = useDispatch();


    return(
        <div>
            <input type="text" value={String(search)} placeholder="Search for something to filter here" onChange={(event)=>{dispatch(ChangeSearch(event.target.value))}}/>
        </div>
    )
}