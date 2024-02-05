import * as marked from 'marked';
import DOMPurify from 'dompurify';

marked.use({
    breaks: true,
    gfm: true,
  });


export default function Preview({rawText, maximizePreviewer, windowEditor, windowPreviewer} ) {

        if(windowPreviewer) {
            return (
        <>
        <div id="previewer-div">
            <div className="titleDiv">
                <h1 id="previewer-title">Previewer</h1>
                <button className="buttons" onClick={maximizePreviewer}>{windowEditor === false ? "Min" : "Max"}</button>
            </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(rawText))}}/>
        </div>
        </>
    );
    }

    if (windowPreviewer === false) {
        return null;
    }
}

