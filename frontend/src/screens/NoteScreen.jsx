import { useParams } from "react-router-dom"
import notes from "../notes"
import { Link } from "react-router-dom"
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap"

const NoteScreen = () => {
	const { id: NoteId } = useParams()
	const note = notes.find((n) => n.id === Number(NoteId))
	console.log(note)
	return (
		<div>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{note.title}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>{note.content}</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>{new Date(note.date).toLocaleDateString()}</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<div>
								{note.tags.map((tag, index) => (
									<span key={index}>
										{tag}
										{index < note.tags.length - 1 && " "}
									</span>
								))}
							</div>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	)
}

export default NoteScreen
