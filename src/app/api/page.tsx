/* eslint-disable no-mixed-spaces-and-tabs */
"use client";
import { Todo } from "@/types/todo";
import classNames from "classnames";
import {  useState } from "react";
import style from "./Api.module.scss";
import React from "react";

export default function Api(){

	const [todos, setTodos] = useState<Todo[] | null>();
    
	const [filter, setFilter] = useState<string | undefined>("");
	const [userIdFilter, setUserIdFilter] = useState<string | undefined>("");
	const [completed, setCompleted] = useState<string | undefined>("");


	async function fetchData(id?: string, userId?: string, completed?: string){
		try{
			let query = "https://jsonplaceholder.typicode.com/todos?";
			if(id !== "") query += "id="+id+"&";
			if(userId !== "") query +="userId="+userId+"&";
			if(completed === "true" || completed=="false") query += "completed="+completed;
			console.log(query);     
			const response = await fetch(query);
			if (response.ok) {
				const jsonData = await response.json();
				console.log(jsonData);
				setTodos(jsonData);
			}
			else {
				throw new Error("Failed to fetch data");
			}
		} 
		catch (error){                
			console.error("Error fetching data:", error);
		} 

	}


	async function Filter(event :React.FormEvent<HTMLFormElement>)
	{
		event.preventDefault();
		console.log(filter === "");
		console.log(userIdFilter);
		console.log(completed);
		await fetchData(filter,userIdFilter,completed);
		setFilter("");
		setUserIdFilter("");
		setCompleted("");

	}


	return(
		<div className="container mt-2 ">
			<div className="row">
				<div className="col-sm ">
					<div className="card">
						<div className="card-header">
                            TODO API FETCH
						</div>
						<form className="row g-3 m-auto"onSubmit={Filter}>
                            

							<div className="col-md-6">
								<label className="form-label">ID:</label>
								<input className="form-control" placeholder="numbers from 0 to 100" type="number" min="0" max="100" value={filter} onChange={event => setFilter(event.target.value)} id="filter"/> 
							</div>
							<div className="col-md-6">
								<label className="form-label">USER ID:</label>
								<input className="form-control" placeholder="numbers from 0 to 10 "type="number" min="0" max="10" value={userIdFilter} onChange={event => setUserIdFilter(event.target.value)} id="filter"/> 
							</div>
							<div className="col-md-4">                            
								<input className="form-check-input" type="radio"  value="true" name="completed" onChange={event => setCompleted(event.target.value)} id="filter"/>
								<label className="form-check-label">Completed</label> 
							</div>
							<div className="col-md-4">

								<input className="form-check-input" type="radio"  value="false" name="completed" onChange={event => setCompleted(event.target.value)} id="filter"/>
								<label className="form-check-label">Not Completed</label>
							</div>
							<div className="col-md-4">
								<input className="form-check-input" type="radio"  value="" name="completed" onChange={event => setCompleted(event.target.value)} id="filter"/>
								<label className="form-check-label">Both</label>
                                    
							</div>
							<div className="card-footer">
								<div className="d-grid gap-2">
                                        
									<button className="btn btn-primary" type="submit" >Search</button>
                                        
								</div>
							</div>
                            
						</form>
					</div>
				</div>
				<div className="col-sm ">
					{todos && 
                        <div className=" overflow-auto ">
                        
                            FETCH RESULT:
                        	<ul className={classNames({"list-group":true},{[style.ul]:true})}>
                        		{todos.map(todo=>(
                        			<li className="list-group-item d-flex justify-content-between align-items-center bg-dark bg-gradient text-white" key={todo.id}> {todo.title}
                        				<span className={classNames({"badge  rounded-pill":true},{"bg-primary":todo.completed},{"bg-danger":!todo.completed})}>
                        					{todo.completed ? "Completed" : "Incomplete"}
                        				</span>
                        			</li>
                        		))}
                        	</ul>
                                    
                        </div>
					}
				</div>
			</div>
            
		</div>
	);
}