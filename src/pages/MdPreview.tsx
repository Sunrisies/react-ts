import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'

const DemoPage = () => {
    const [docmentContent, setDocmentContent] = useState('')
    const content = '# This is title 1\n\n## This is title 2\n\n### This is title 3\n\nAnd this is a paragraph\n\n**A paragraph with strong importance**\n\n*A block quote with ~strikethrough~*'
    useEffect(() => {
        setDocmentContent(content)
    }, [])
    return (
        <div className="markdown-body" style={{ padding: '30px', borderRadius: '10px' }}>
            <ReactMarkdown children={docmentContent} />
        </div>
    )
}
export default DemoPage
