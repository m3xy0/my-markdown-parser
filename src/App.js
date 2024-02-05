import './App.css';
import Editor from './components/Editor';
import { useState } from "react";
import Preview from './components/Preview';




function App() {
  const pretext = 
`# MARKDOWN PREVIEWER 
***
***
<br>    

## Just write your markdown here!   

You can check [here](https://www.markdownguide.org/getting-started/) to learn more about Markdown Language.
Simply you can use \# to make an h1 heading and \## for an h2 heading.
To make a link just put link text into brackets and then follow it immediately with the URL in paranthesis.
You can use \`\` (backticks) to make an inline code like \`npm start\`.
You can also make code blocks using at three backticks before and after your code blocks like so:
\`\`\`
<html>
    <head>
    </head>
    <body>
    </body>
</html>
\`\`\`     

<br>   

***
***   
<br>   

Below you can find what i do regularly:
1. Sleep
2. Eat
3. Work
4. Code  
    
<br>   

***
***    

<br>   

Here is a quote I like: <br>
> We are what we do repeatedly. <br>

So, this is me basically:
<img src="coding-man.png" alt="drawing" width="200"/> ![coding man](coding-man.jpg "coding man")

**I hope the information I wrote above may help you one day.**`;
  const [text, setText] = useState(pretext);
  const [editor, setEditor] = useState(true);
  const [previewer, setPreviewer] = useState(true);

  function handleChange (e) {
    setText(e.target.value);
  }
  
  function maximizeEditor() {
    setPreviewer(!previewer);
  }

  function maximizePreviewer() {
    setEditor(!editor);
  }

  return (
    <div className="App" >
          <Editor rawText={text} handleChange={handleChange} maximizeEditor={maximizeEditor} windowEditor={editor} windowPreviewer={previewer}/>
          <Preview rawText={text} maximizePreviewer={maximizePreviewer} windowPreviewer={previewer} windowEditor={editor} />
    </div>
  );
}

export default App;
