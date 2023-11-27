import React, { useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap"

const CreateNoteForm = ({ onSave }) => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const [date, setDate] = useState("")
	const [tags, setTags] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()


     if (!title || !content || !date || !tags) {
				alert("Please fill in all required fields.")
				return
			}
		// Create a new note object
		const newNote = {
			title,
			content,
			date: new Date(date),
			tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma and trim whitespace
		}

		// Pass the new note to the onSave function
		onSave(newNote)

		// Clear the form fields
		setTitle("")
		setContent("")
		setDate("")
		setTags("")
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3'>
				<Form.Label>Title:</Form.Label>
				<Form.Control
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>Content:</Form.Label>
				<Form.Control
					as='textarea'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>Date:</Form.Label>
				<Form.Control
					type='date'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>Tags:</Form.Label>
				<InputGroup className='mb-3'>
					<Form.Control
						type='text'
						value={tags}
						onChange={(e) => setTags(e.target.value)}
					/>
				</InputGroup>
			</Form.Group>

			<Button type='submit'>Create Note</Button>
		</Form>
	)
}

export default CreateNoteForm
