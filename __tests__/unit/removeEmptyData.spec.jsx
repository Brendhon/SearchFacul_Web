import { removeEmptyData } from '../../src/utils/utils'
import * as CONSTANTS from '../utils/constants'

describe("Empty Data", () => {

    let data

    beforeEach(() => {
        data = Object.assign({}, CONSTANTS.courseExample)
    })

    it("Should be able to remove empty data", async () => {
       
        // Atribuindo um valor vazio para teste
        data.period = ""

        // Removendo dados
        removeEmptyData(data)

        expect(data.period).toBeFalsy()

    })
})