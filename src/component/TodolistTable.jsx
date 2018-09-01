import React, { Component } from 'react'
export class TodolistTable extends Component {

	state = {
		todolist: ['test1', 'test2'],
		text: ""
	}

	onAdd = () => { 
		
		let { todolist,text } = this.state
	
		if(!(text=="" || text=="heart" || text.trim()==""))
		{todolist.push(this.state.text.trim())
		this.setState({ todolist })
		this.setState({ text: "" })
		}

	}
	onDel = (i) => {
		let { todolist } = this.state
		this.setState({ todolist })
		delete todolist[i];

	}

	handleEnter = (e) =>{
		console.log(e.key)
		if(e.key=="Enter")
		{this.onAdd()}
	}


	render() {
		return (
			<div>
				<input type='text'
					value={this.state.text}
					onChange={e => this.setState({ text: e.target.value })}
					onKeyPress={e => this.handleEnter(e)} /><button onClick={this.onAdd} > ADD </button>
				{
					this.state.todolist.map((e, i) => {
						return (
							<div key={i}>
								{e}
								<button onClick={e => this.onDel(i)}>x</button>
							</div>

						)
					})
				}
			</div>
		)
	}

}