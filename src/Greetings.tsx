import React from 'react'

type GreeitngsProps = {
    name: string
}

const Greetings: React.FC<GreeitngsProps> = ({name}: GreeitngsProps) => (
    <div> Hello, {name} </div>
)

export default Greetings