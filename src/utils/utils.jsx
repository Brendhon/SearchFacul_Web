const getError = error => {
    if (error.response.data.validation)
        return `Dado incorreto: ${error.response.data.validation.body.keys[0]}`
    else
        return error.response.data.message
}

const removeEmptyData = data => {
    for (let prop in data)
        if (!data[prop].trim())
            delete data[prop]
}

export { getError, removeEmptyData }