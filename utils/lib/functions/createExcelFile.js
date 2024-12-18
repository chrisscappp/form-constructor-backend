function parseSheetHeaderRow(questions) {
	if (questions.length === 0) {
		return []
	}
	const headerRow = []
	headerRow.push({
		value: 'Дата прохождения',
		fontWeight: 'bold',
		height: 60
	})
	const sortedQuestions = questions.sort((prev, next) => ("" + prev.title).localeCompare(next.title))
	sortedQuestions.forEach(question => {
		headerRow.push({
			value: question.title,
			fontWeight: 'bold',
			height: 60
		})
	})

	return headerRow
}

function parseSheetDataRow(complitionDate, questions, headerQuestions) {
	if (questions.length === 0) {
		return []
	}
	const dataRow = [{
		type: String,
		value: complitionDate.split('T').join(', ')
	}]
	const mappedQuestions = headerQuestions.map(hQuestion => {
		const findQuestion = questions.find(question => hQuestion.title === question.title)
		if (findQuestion) {
			return findQuestion
		} else {
			const value = 
			hQuestion.type === 'input' || hQuestion.type === 'textarea' 
			? '' 
			: hQuestion.type === 'listbox' || hQuestion.type === 'radio' 
			?  { value: '' }
			:  undefined

			const values = hQuestion.type === 'checkbox' ? ['-'] : undefined

			return {
				title: hQuestion.title,
				type: hQuestion.type,
				value,
				values
			}
		}
	})
	const sortedQuestions = mappedQuestions.sort((prev, next) => ("" + prev.title).localeCompare(next.title))
	sortedQuestions.forEach(question => {
		switch(question.type) {
			case "input": {
				dataRow.push({
					type: String,
					value: question.value
				})
				break
			}
			case "listbox": {
				dataRow.push({
					type: String,
					value: question.value.value
				})
				break
			}
			case "textarea": {
				dataRow.push({
					type: String,
					value: question.value
				})
				break
			}
			case "checkbox": {
				dataRow.push({
					type: String,
					value: question.values.map(value => value.value).join(", ")
				})
				break
			}
			case "radio": {
				dataRow.push({
					type: String,
					value: question.value.value
				})
				break
			}
			default: null
		}
	})
	return dataRow
}

module.exports = {
	parseSheetHeaderRow,
	parseSheetDataRow
}