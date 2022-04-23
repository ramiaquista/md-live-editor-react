import React, { useState } from "react";
import { marked } from 'marked';

const TitleBar = () => {
  const [text, setText] = useState("# Welcome to Markdown \n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this ?\n 1. Write markdown in the markdown editor window \n 2. See the rendered markdown in the preview window \n\n ### Features \n - Create headings, paragraphs, links, blockquotes, inline-code, code-blocks, and lists. \n - Choose between light or dark mode depending on your preference \n\n\n > This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/basic-syntax/) \n\n ### Code Blocks \n This markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this: \n\n``` \n<main>\n  <h1>This is a larger code block.</h1>\n</main> \n``` ");

  const renderText = (text) => {
    const __html = marked.parse(text)
    console.log(__html);
    return { __html }
  }

  return (
    <div className="flex justify-between bg-custom-black h-full">
      <div className="flex flex-col w-6/12">
        <section className="bg-custom-gray-title text-xs text-gray-400 font-semibold text-left w-full pl-10 py-2">
          <p className="uppercase">MarkDown</p>
        </section>
        <div className="h-full container p-4 pt-10 px-10">
          <textarea onChange={e => setText(e.target.value)} value={text} className="form-control text bg-transparent text-gray-400 text-base" />
        </div>
      </div>
      <div className="border-l-2 border-custom-vertical-line w-6/12">
        <section className="bg-custom-gray-title text-xs text-gray-400 font-semibold text-left w-full pl-10 py-2">
          <p className="uppercase">Preview</p>
        </section>
        <div className='text-white p-4 px-14'>
          <div dangerouslySetInnerHTML={renderText(text)} />
        </div>
      </div>
    </div >
  );
}

export default TitleBar;
