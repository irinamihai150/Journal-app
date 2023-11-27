import React from "react"
import CreateNoteForm from "./CreateNoteForm"

const CreateNotePage = () => {
	const handleSaveNote = (newNote) => {
		// Implement logic to save the new note in your application
		console.log("Saving new note:", newNote)
	}

	return (
		<div>
			<h2>Create a New Note</h2>
			<CreateNoteForm onSave={handleSaveNote} />
		</div>
	)
}

export default CreateNotePage
