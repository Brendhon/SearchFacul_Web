const courseFactory = data => {

    let course = {}

    course.name = data.name || ""
    course.description = data.description || ""
    course.duration = data.duration || ""
    course.titration = data.titration || ""
    course.modality = data.modality || ""
    course.period = data.period || ""
    course.score = data.score || ""

    return course
}

const universityFactory = data => {

    let university = {}

    university.ies =  data.ies || ""
    university.telephone =  data.telephone || ""
    university.email =  data.email || ""
    university.uf =  data.uf || ""
    university.city =  data.city || ""
    university.address =  data.address || ""
    university.category =  data.category || ""
    university.site =  data.site || ""

    return university
}

export { courseFactory, universityFactory }