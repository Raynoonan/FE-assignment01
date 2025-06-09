

export default function SubmitButton({onClick}: {onClick: () => void}) {

    return (
        <div>
            <button className="btn" id="submitButton" 
                    onClick={onClick}>
                Submit
            </button>
         
        </div>
    )
}