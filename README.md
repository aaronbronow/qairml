# qairml

Questionnaire Markup Language for Surveys and Polls

## Examples

`
survey:
	name: Getting to Know You
	questions:
		- question:
			text: Are you male or female?
			canonical_text: male or female
			answers:
				- answer:
					text: Male
				- answer:
					text: Female
				- answer:
					text: Other
		- question:
			text: How old are you?
			canonical_text: age
			answers: [18..99]
`