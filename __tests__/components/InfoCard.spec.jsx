import React from 'react'
import TestRenderer from 'react-test-renderer'

import * as CONSTANTS from '../utils/constants'
import InfoCard from '../../src/components/InfoCard/InfoCard'

describe("InfoCard", () => {

    // Atributos
    let data

    // Antes de todos os testes iniciar a variável
    beforeAll(() => {
        data = CONSTANTS.universityAndCourseData
    })

    it("Should be able to render", () => {

        // Testar a renderização do componente
        const component = TestRenderer.create(<InfoCard {...data} />).toJSON()

        // Comparando os Snapshots para verificar se teve alteração no component
        expect(component).toMatchSnapshot()
    })

    it("Should be able to use props", () => {

        const component = TestRenderer.create(<InfoCard {...data} />).root

        // Comparando os Snapshots para verificar se os dados foram passados corretamente
        expect(component.props.IES).toBe(data.IES)
    })
})