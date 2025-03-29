const { collections, getCollectionItem } = require("../../firebase_db")
const { parseSheetHeaderRow, parseSheetDataRow } = require("../../utils/lib/functions/createExcelFile")
const writeXlsxFile = require('write-excel-file/node')
const path = require('path')
const fs = require('fs')

const getFormFilledStats = async (req, res) => {
	const formId = req.params.formId
	const questions = await getCollectionItem(collections.questions, formId)
	const completedForm = await getCollectionItem(collections.completedForms, formId)
	const excelTableHeader = parseSheetHeaderRow(questions.formQuestions)
	const excelTableData = [excelTableHeader]
	completedForm.forms.forEach(form => {
		const mappedQuestions = Object.values(form.questions)
		const row = parseSheetDataRow(form.complitionDate, mappedQuestions, questions.formQuestions)
		excelTableData.push(row)
	})
	const fileName = `${formId}.xlsx`
	const filePath = path.resolve(`utils/files/${fileName}`)
	
	await writeXlsxFile(excelTableData, {
		filePath: `./utils/files/${fileName}`
	})
	
	await fs.readFile(filePath, (err, data) => {
    	if (err) {
      		console.error(err)
      		res.status(500).send('Error reading file')
    	} else {
      		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
      		res.setHeader('Content-Disposition', `attachment; filename=${fileName}`)
			res.send(data)
    	}
  	})
}

module.exports = getFormFilledStats