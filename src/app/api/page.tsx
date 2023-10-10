"use client"
import { Todo } from "@/types/todo"
import { useEffect, useState } from "react"

export default function Api(){

    const [todos, setTodos] = useState<Todo[] | null>()
    
    const [filter, setFilter] = useState<string | undefined>('');
    const [userIdFilter, setUserIdFilter] = useState<string | undefined>('');
    const [completed, setCompleted] = useState<string | undefined>('')

    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedNotCompleted, setIsCheckedNotCompleted] = useState(false);

    async function fetchData(id?: string, userId?: string, completed?: string){
        try{
            let query = "https://jsonplaceholder.typicode.com/todos?";
            if(id !== "") query += "id="+id+"&";
            if(userId !== "") query +="userId="+userId+"&";
            if(completed !== "") query += "completed="+completed
            console.log(query);     
            const response = await fetch(query);
             if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData);
                setTodos(jsonData);
            }
            else {
                throw new Error('Failed to fetch data');
            }
        } 
        catch (error){                
            console.error('Error fetching data:', error);
        }; 

    }


    async function Filter(event :React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        console.log(filter === "");
        console.log(userIdFilter);
        console.log(completed);
        await fetchData(filter,userIdFilter,completed);
        setFilter('');
        setUserIdFilter('');
        setCompleted('');
        setIsChecked(false);
        setIsCheckedNotCompleted(false);
    }


    return(
        <>
            <div>
                <form onSubmit={Filter}>
                    <label>Id:</label>
                    <input type="number" min="0" max="100" value={filter} onChange={event => setFilter(event.target.value)} id="filter"/> 
                    <label>UserId:</label>
                    <input type="number" min="0" max="10" value={userIdFilter} onChange={event => setUserIdFilter(event.target.value)} id="filter"/> 
                    <label>Completed:</label>
                    <input type="radio" onClick={e => setIsChecked(!isChecked)} checked={isChecked} value="true" name="completed" onChange={event => setCompleted(event.target.value)} id="filter"/> 
                    <label>Not Completed:</label>
                    <input type="radio" onClick={e => setIsCheckedNotCompleted(!isCheckedNotCompleted)} checked={isCheckedNotCompleted} value="false" name="notcompleted" onChange={event => setCompleted(event.target.value)} id="filter"/>
                    <button type="submit" >Search</button>
                </form>
            </div>

            {todos && 
                <div>
                
                    RESULTADO:
                    <ul>
                        
                    </ul>
                             
                </div>
            }

            
        </>
    )
}