

function Editor({ rawText, handleChange, maximizeEditor, windowEditor, windowPreviewer }) {
    if(windowEditor) {
    return (
        <>
        <div id="editor-div">
            <div className="titleDiv">
                <h1 id="editortitle">Editor</h1>
                <button className="buttons" onClick={maximizeEditor}>{windowPreviewer ===false ? "Min" : "Max"}</button>
            </div>
        <textarea id="editor" name="editor"  cols="33" rows="auto" value={rawText} onChange={handleChange} className={windowPreviewer === false ? "editorBig" : "editorSmall"}>
            {rawText}
        </textarea>
        </div>
        </>
    );
    }
    if (windowEditor === false){
        return null;
    }

}

export default Editor;
