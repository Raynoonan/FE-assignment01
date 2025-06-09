

export default function List({ input }: {input: string[]} ) {
    return (
    <div className="d-flex flex-column"> 
    List
        <ul>
            {input.map(input => <li>{input}</li>)}
        </ul> 
    </div>
    )
}