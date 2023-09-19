// Function Select Option

const cardOne = document.querySelector('.card-one')
const cardTwo = document.querySelector('.card-two')
const btnStandard = document.querySelector('.btn-standard-option')
const btnSession = document.querySelector('.btn-session-option')
const formSelect = document.querySelector('.form-select')
const modalOffer = document.querySelector('.modal-offer')
const btnCloseModalOffer = document.querySelector('.close-modal-offer')

const selectFirstOption = () => {
	cardOne.classList.toggle('active-card')
	btnStandard.classList.toggle('active-btn')
	formSelect.value = 1
	btnSession.classList.remove('active-btn')
	cardTwo.classList.remove('active-card')
	showFirstModal()
}

const selectSecondOption = () => {
	cardTwo.classList.toggle('active-card')
	btnSession.classList.toggle('active-btn')
	formSelect.value = 2
	btnStandard.classList.remove('active-btn')
	cardOne.classList.remove('active-card')
	showSecondModal()
}

const checkFirstOption = () => {
	if (formSelect.value == 1) {
		cardOne.classList.add('active-card')
		btnStandard.classList.add('active-btn')
	} else {
		cardOne.classList.remove('active-card')
		btnStandard.classList.remove('active-btn')
	}
}

const checkSecondOption = () => {
	if (formSelect.value == 2) {
		cardTwo.classList.add('active-card')
		btnSession.classList.add('active-btn')
	} else {
		cardTwo.classList.remove('active-card')
		btnSession.classList.remove('active-btn')
	}
}

const checkAllOption = () => {
	checkFirstOption()
	checkSecondOption()
}

const showFirstModal = () => {
	if(btnStandard.classList.contains('active-btn')) {
		modalOffer.style.display = 'flex'
	}
}

const showSecondModal = () => {
	if(btnSession.classList.contains('active-btn')) {
		modalOffer.style.display = 'flex'
	}
}

const closeModalOffer = () => {
	modalOffer.style.display = 'none'
}

btnStandard.addEventListener('click', selectFirstOption)
btnSession.addEventListener('click', selectSecondOption)
formSelect.addEventListener('click', checkAllOption)
btnCloseModalOffer.addEventListener('click', closeModalOffer)

// Form Contact Validation

const username = document.querySelector('.username')
const phoneNumber = document.querySelector('.phone')
const email = document.querySelector('.email')
const textArea = document.querySelector('.text-area')
const btnSend = document.querySelector('.send-form')
const btnClear = document.querySelector('.clear-form')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')

const allInputs = [username, phoneNumber, email, textArea]

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.text-error')

	input.classList.add('error-input')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.text-error')

	input.classList.remove('error-input')
	errorMsg.textContent = ''
	formSelect.classList.remove('error-input')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value == '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkValue = () => {
	if (formSelect.value == 0) {
		formSelect.classList.add('error-input')
	} else {
		formSelect.classList.remove('error-input')
	}
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `Pole powinno zawierać min. ${min} znaków.`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Adres e-mail jest niepoprawny.')
	}
}

const checkErrors = () => {
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error-input') || formSelect.value == 0) {
			errorCount++
		}
	})

	if (errorCount == 0) {
		modal.style.display = 'flex'
	}
}

const closeModal = () => {
	modal.style.display = 'none'

	allInputs.forEach(el => {
		el.value = ''
		formSelect.value = 0
		clearError(el)
	})
}

btnSend.addEventListener('click', e => {
	e.preventDefault()

	checkForm(allInputs)
	checkLength(username, 5)
	checkLength(phoneNumber, 9)
	checkLength(textArea, 10)
	checkMail(email)
	checkValue()
	checkErrors()
})

btnClear.addEventListener('click', e => {
	e.preventDefault()

	allInputs.forEach(el => {
		el.value = ''
		formSelect.value = 0
		clearError(el)
	})
})

btnCloseModal.addEventListener('click', closeModal)

// Navigation

const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show')
	}
})

// Cookies alert

const cookiesBox = document.querySelector('.cookies-area')
const cookiesBtn = document.querySelector('.cookies-btn')

const showCookies = () => {
	const cookiesEaten = localStorage.getItem('cookies')
	if (cookiesEaten) {
		cookiesBox.classList.add('hide')
	}
}

const handleCookiesBox = () => {
	localStorage.setItem('cookies', 'true')
	cookiesBox.classList.add('hide')
}

cookiesBtn.addEventListener('click', handleCookiesBox)
showCookies()

// Function Current Data

const CurrentData = document.querySelectorAll('.current-data')

CurrentData.forEach(data => {
	const date = new Date()
	let year = date.getFullYear()

	data.textContent = year
})
