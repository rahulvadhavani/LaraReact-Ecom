import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class Editor extends Component {
    render() {
        const config = this.props.config || {
            toolbar: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                '|',
                'undo',
                'redo'
            ],
        }
        return (
            <div className="App text-gray-900">
                <CKEditor
                    config={config}
                    editor={ClassicEditor}
                    data={this.props.data}
                    onChange={this.props.handleEditorChange}
                />
            </div>
        );
    }
}
export default Editor;
