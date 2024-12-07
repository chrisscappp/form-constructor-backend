function normalizeFormData(form) {
	const copyForm = JSON.parse(JSON.stringify(form))
	const normalizedFormQuestions = copyForm.questions.map((question) => {
		if (question.type === "input" || question.type === "textarea") {
			delete question.answers
			return {
				...question,
				inputPlaceholder: question.inputPlaceholder ? question.inputPlaceholder : "Введите ответ на вопрос..."
			}
		} else {
			return question
		}
	})
	copyForm.questions = normalizedFormQuestions
	return copyForm
}

module.exports = { normalizeFormData }