import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Note = ({ note }) => {
	const formattedDate = note.date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})
	return (
		<Card className='my-3 p-3 rounded'>
			<Card.Body>
				<Link to={`/note/${note.id}`}>
					<Card.Title as='div'>
						<strong>{note.title}</strong>
					</Card.Title>
				</Link>
			</Card.Body>
			<Card.Text as='p'>{note.content}</Card.Text>
			<div>
				<strong>Date:</strong> {formattedDate}
			</div>
			<div>
				<strong>Tags:</strong>
				{note.tags.map((tag) => (
					<span key={tag} className='badge bg-dark mx-1'>
						{tag}
					</span>
				))}
			</div>
		</Card>
	)
}

export default Note
