import React from 'react'
import TestRenderer from 'react-test-renderer'

import * as CONSTANTS from '../utils/constants'
import InfoCard from '../../src/components/InfoCard/InfoCard'

describe("InfoCard", () => {

    // Atributos
    let data

    // Antes de todos os testes iniciar a variável
    beforeEach(() => {
        data = Object.assign({}, CONSTANTS.universityAndCourseData)
    })

    it("Should be able to render", () => {

        // Testar a renderização do componente
        const component = TestRenderer.create(<InfoCard {...data} />).toJSON()

        // Comparando os Snapshots para verificar se teve alteração no component
        expect(component).toMatchSnapshot()
    })

    it("Should be able to render without score", () => {

        // Deletando o score para verificar se a renderização condicional irá renderizar uma div vazia
        delete data["score"]

        // Renderizando o componente sem a propriedade "score"
        const component = TestRenderer.create(<InfoCard {...data} />).toJSON()

        // Comparando os Snapshots para verificar se teve alteração no component
        expect(component).toMatchSnapshot()
    })

    it("Should be able to render without site", () => {

        // Deletando o score para verificar se a renderização condicional irá renderizar uma div vazia
        delete data["site"]

        // Renderizando o componente sem a propriedade "score"
        const component = TestRenderer.create(<InfoCard {...data} />).toJSON()

        // Comparando os Snapshots para verificar se teve alteração no component
        expect(component).toMatchSnapshot()
    })
})