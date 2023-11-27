import React from "react"
import { Row, Col } from "react-bootstrap"
import notes from "../notes"
import Note from "../components/Note"
import CreateNotePage from "./CreateNotePage"

const HomeScreen = () => {
	return (
		<>
			<h1>My Notes</h1>
			<Row>
				<CreateNotePage />
			</Row>
			<Row>
				{notes.map((note) => (
					<Col key={note.id} sm={12} md={6} lg={4} xl={3}>
						<Note note={note} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
