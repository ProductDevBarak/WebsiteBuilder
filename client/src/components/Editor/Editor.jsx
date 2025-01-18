import React, {useEffect, useState} from 'react';
// import 'grapesjs/dist/css/grapes.min.css';
import './editor.css';
import grapesjs from 'grapesjs';
import gsWebpage from 'grapesjs-preset-webpage'
import gsCustome from 'grapesjs-custom-code';
import gsTap from 'grapesjs-tabs';
import { chatResponse } from '../../utils/canvas';

const Editor = () => {

    const [pluginLoaded, setPluginLoaded] = useState(false);
    const [editor, setEditor] = useState(null);
    const [prompt, setPrompt] = useState('');


    useEffect(() => {
        if (!pluginLoaded) {
            setPluginLoaded(true);
        }
        else if (!editor) {
          const e = grapesjs.init({
                color:'white',
                height: '99vh',
                width: 'auto',
                container: "#g",
                fromElement: true,
                plugins: [gsWebpage, gsCustome, gsTap],
                storageManager: {
                type: 'remote',
                urlStore: 'http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ',
                urlLoad: 'http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ',
                autosave: false,
                autoload: true,
                contentTypeJson: true,
                storeComponents: true,
                allowScripts: 1,
                storeStyles: true,
                storeHtml: true,
                storeCss: true,
            },                
          });
          setEditor(e);
        }
    }, [pluginLoaded, editor]);


    const handleChange = (e) => {
      setPrompt(e.target.value); 
    };
    const handleKeyDown = async (e) => {
      if (e.key === 'Enter') {
        setPrompt(e.target.value);
        const response = await chatResponse(prompt);
        console.log(response);
      }
    };
      
    return (
      <div className="flex flex-col h-screen">
        <div id="g" className="flex-1" />
        <div className="p-2 border-b border-gray-300 bg-gray-50">
          <label
            htmlFor="promptInput"
            className="text-sm font-bold"
          >
            Enter Prompt:
          </label>
          <input
            type="text"
            id="promptInput"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={handleChange}  
            onKeyDown={handleKeyDown}  
            className="w-full p-2 mt-1 rounded-md border border-gray-300"
          />
        </div>
      </div>
    );
  };

export default Editor;
