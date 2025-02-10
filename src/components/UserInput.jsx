export default function UserInput({onUserInput, userInputObj}) {

    return <section id="user-input">
        <div class="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required  
                    value={userInputObj.initialInvestment}
                    onChange={(event) =>  onUserInput('initialInvestment', event.target.value)} 
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required 
                    value={userInputObj.annualInvestment}
                    onChange={(event) =>  onUserInput('annualInvestment', event.target.value)} 
                />
            </p>
        </div>
        <div class="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required 
                    value={userInputObj.expectedReturn}
                    onChange={(event) =>  onUserInput('expectedReturn', event.target.value)} 
                />
            </p> 
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required 
                    value={userInputObj.duration}
                    onChange={(event) =>  onUserInput('duration', event.target.value)} 
                />
            </p>
        </div>
    </section>
}