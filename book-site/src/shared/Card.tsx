interface Props {
    content: string
}

export function Card({content}: Props) {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
            {content}
            </div>
        </div>
    )
}