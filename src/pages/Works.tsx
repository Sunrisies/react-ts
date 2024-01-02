import {FC, useEffect, useState} from 'react'
import MdEditor from 'for-editor'
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw';
import axios from 'axios'
// 设置高亮样式
import {xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={xonokai}
                language={match[1]}
                PreTag="div"
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    }
}


const Works: FC = () => {
    const toolbar = {
        h1: true, // h1
        h2: true, // h2
        h3: true, // h3
        h4: true, // h4
        img: true, // 图片
        link: true, // 链接
        code: true, // 代码块
        preview: true, // 预览
        expand: true, // 全屏
        /* v0.0.9 */
        undo: true, // 撤销
        redo: true, // 重做
        save: true, // 保存
        /* v0.2.3 */
        subfield: true, // 单双栏模式
    };

    useEffect(() => {
        setMdContent(mdContent)
    }, [])
    // 保存Markdown文本内容
    const [mdContent, setMdContent] = useState('')
    const [base64Data, setBase64Data] = useState(null)

    // 上传图片
    function uploadImg(file) {
        console.log('file', file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64Data = reader.result;
            console.log(base64Data); // 输出Base64编码的图片数据
            setBase64Data(base64Data)
            // 在这里可以进行其他操作，比如将Base64数据发送到后端服务器进行处理
        };
    }


    const get = (id: number) => {
        axios.get(`http://localhost:3000/api/article/${id}`)
            .then(response => {
                setMdContent(response.data[0].content)
                setBase64Data(response.data[0].images)

                console.log(response.data[0], 'response.data[0]')
            })
            .catch(error => {
                console.error(error);
            });
    }
    get(5)

    const add = (value) => {
        const params = {
            "title": "测试数据",
            "content": value,
            "author": "小猪",
            "images": base64Data
        };

        axios.post('http://localhost:3000/api/article', params)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        setTimeout(() => {
            // get(5)
        }, 3000)
    }


    // 输入内容改变
    function handleEditorChange(value) {
        console.log('handleChange', value);
        setMdContent(value)
    }

    // 保存输入内容
    function handleEditorSave(value) {
        console.log('handleEditorSave', value);
        add(value)
    }

    return (
        <>
            <MdEditor placeholder="请输入Markdown文本" height={600} lineNum={false}
                      toolbar={toolbar} value={mdContent} onChange={handleEditorChange} onSave={handleEditorSave}
                      addImg={uploadImg}/>
            <div className="markdown-body" style={{padding: '30px', borderRadius: '10px'}}>
                <ReactMarkdown children={mdContent} components={Code} rehypePlugins={[rehypeRaw]}/>
            </div>
            <div>
                <img src={base64Data} alt="" height={200} width={200}/>
            </div>
        </>
    )
}

export default Works