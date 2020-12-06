import { courseFactory, universityFactory } from '../../src/utils/factory'
import * as CONSTANTS from '../utils/constants'

describe("Factory", () => {

    let data

    beforeEach(() => {
        data = Object.assign({}, CONSTANTS.universityAndCourseData)
    })

    it("Should be able to create a course object", async () => {

        // Criando um objeto apenas com os valores do curso
        const result = courseFactory(data)

        expect(result.ies).toBeFalsy()
        expect(result).toHaveProperty("name");
    })

    
    it("Should be able to create a university object", async () => {

        // Criando um objeto apenas com os valores do curso
        const result = universityFactory(data)

        expect(result.name).toBeFalsy()
        expect(result).toHaveProperty("ies");
    })
})