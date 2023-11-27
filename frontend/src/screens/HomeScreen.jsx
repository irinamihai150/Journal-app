import React from "react"
import { Row, Col } from "react-bootstrap"
import dummyNotes from "../notes"
import Notes from "../components/Notes"

const HomeScreen = () => {
	return (
		<div>
			<h1>My Notes</h1>
			<Row>
				{dummyNotes.map((note) => (
					<Col key={note.id} sm={12} md={6} lg={4} xl={3}>
						<Notes note={note} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default HomeScreen
