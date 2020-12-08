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

    it("Should be able to render with data", () => {

        const tree = TestRenderer.create(<InfoCard {...data} />).root

        // Encontrando componentes pelo nome da class CSS
        const content = tree.findByProps({ className: 'info-top-title' }).props.children

        expect(content).toBe(data.ies)

    })

    it("Should be able to render without score", () => {

        // Deletando o score para verificar se a renderização condicional irá renderizar uma div vazia
        delete data["score"]

        // Renderizando o componente sem a propriedade "score"
        const tree = TestRenderer.create(<InfoCard {...data} />).root

        // Encontrando componentes pelo nome da class CSS
        const content = tree.findByProps({ className: 'info-content-subtitle' }).props

        // Verificando se a div surgiu no lugar do score
        expect(content.children[4].type).toBe('div')
    })

    it("Should be able to render without site", () => {

        // Deletando o score para verificar se a renderização condicional irá renderizar uma div vazia
        delete data["site"]

        // Renderizando o componente sem a propriedade "site"
        const tree = TestRenderer.create(<InfoCard {...data} />).root

        // Encontrando componentes pelo nome da class CSS
        const content = tree.findByProps({ className: 'info-bottom' }).props

        // Verificando se a div surgiu no lugar do site
        expect(content.children.type).toBe('div')
    })
})