import React, { useState, useEffect } from 'react'

import * as C from './AdviceCardStyle'
import DividerImage from '../../assets/images/pattern-divider-desktop.svg';
import AdviceGeneratorImage from '../../assets/images/icon-dice.svg';

import axios from 'axios'

type AdviceType = {
    advice: string,
    id: number
}

export default function AdviceCard() {

    const [advice, setAdvice] = useState<AdviceType | undefined>()

    async function fetchAdvice() {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                setAdvice(response.data.slip);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAdvice();
    }, [])

    return (
        <C.Container>
            <C.Title>
                Advice #{advice && advice.id}
            </C.Title>
            <C.Advice>
                {advice && advice.advice}
            </C.Advice>
            <C.dividerImage src={DividerImage}>
            </C.dividerImage>
            <C.AdviceGeneratorButton
                onClick={() => fetchAdvice()}
            >
                <C.AdviceGeneratorImage src={AdviceGeneratorImage}>
                </C.AdviceGeneratorImage>
            </C.AdviceGeneratorButton>
        </C.Container>
    )
}
