import { calculateInvestmentResults } from '../util/investment.js'

export default function Results({input}) {

    let resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return <p>Results...</p>;
}