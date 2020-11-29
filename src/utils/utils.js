const filter = data => {
    for (let prop in data)
        if (!data[prop].trim())
            delete data[prop]
}

const match = (password1, password2) => {
    if (password1 === password2)
        return true
    else
        return false
}

const getError = error => {
    if (error.response.data.validation) {
        return `Dado incorreto: ${error.response.data.validation.body.keys[0]}`
    }
    else
        return error.response.data.message
}

module.exports = { filter, match, getError}
