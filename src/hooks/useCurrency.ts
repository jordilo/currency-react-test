import { useEffect, useState } from "react"

export function useCurrency() {

    const [response, setResponse] = useState<any>()
    const [currency, setCurrency] = useState('dollar')

    useEffect(() => {
        if (!response) {

            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(result => result.json())
                .then(setResponse)
        }
    }, [response])

    function switchCurrency() {
        setCurrency(currency === 'dollar' ? 'euro' : 'dollar')
    }

    return {
        isLoading: !response,
        switchCurrency,
        curentCurrency: currency,
        rate: response ? currency === 'dollar' ? response.bpi.USD.rate : response.bpi.EUR.rate : undefined
    }
}