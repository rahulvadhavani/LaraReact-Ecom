import { TextInput } from 'flowbite-react';
import { useState } from 'react';

function Attribute(props) {
    let intialData = props.keyValue != undefined ? props.keyValue : [{ key: '', value: '' }];
    const [keyValues, setKeyValues] = useState(intialData);


    function handleAddKeyValue() {
        setKeyValues([...keyValues, { key: '', value: '' }]);
        props.getKeyVal([...keyValues, { key: '', value: '' }])
    }

    function handleRemoveKeyValue(index) {
        const newKeyValues = [...keyValues];
        newKeyValues.splice(index, 1);
        setKeyValues(newKeyValues);
        props.getKeyVal([...keyValues, { key: '', value: '' }])
    }

    function handleKeyValueChange(index, field, value) {
        const newKeyValues = [...keyValues];
        newKeyValues[index][field] = value;
        setKeyValues(newKeyValues);
        props.getKeyVal([...keyValues, { key: '', value: '' }])
    }


    return (
        <div className="space-y-2">
            <div className='flex items-start'>
                <div className="grid lg:grid-cols-2 md:grid-cols-sm-1 gap-4">
                    {keyValues.map((keyValue, index) => (
                        <div key={index} className='flex'>
                            <div className='flex items-center'>
                                <TextInput
                                    type="text"
                                    className="block w-1/2 border-gray-300 rounded-md shadow-sm"
                                    placeholder="Key"
                                    value={keyValue.key}
                                    onChange={(event) => handleKeyValueChange(index, 'key', event.target.value.toLowerCase())}
                                />
                                <b className='px-3'>:</b>
                                <TextInput
                                    type="text"
                                    className="mx-2 block w-1/2 border-gray-300 rounded-md shadow-sm"
                                    placeholder="Value"
                                    value={keyValue.value}
                                    onChange={(event) => handleKeyValueChange(index, 'value', event.target.value.toLowerCase())}
                                />
                            </div>
                            <button
                                title='Add More'
                                type="button"
                                className="text-red-600 mx-3 text-xl"
                                onClick={() => handleRemoveKeyValue(index)}
                            >
                                <i className="fa-solid fa-times-circle"></i>
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="px-2 py-2 text-green-600 text-2xl"
                    onClick={handleAddKeyValue}
                >
                    <i className="fa-solid fa-plus-circle"></i>
                </button>
            </div>

        </div>
    );
}

export default Attribute;
