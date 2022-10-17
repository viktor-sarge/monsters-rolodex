import { Component } from 'react';

class CardList extends Component {
	render() {
		return (
			<div>
				{this.props.monsters.map((monster) => {
					const { id, name, email } = monster;
					return (
						<div key={id}>
							<img
								src={`https://robohash.org/${id}?set=set2`}
								alt={`monster named ${name}`}
							/>
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
