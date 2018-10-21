import React from 'react';

const FormFields = (props) => {

    const renderFields = () => {
        const formArray = [];

        for(let elementName in props.formData){
            formArray.push({
              id:elementName,
              settings: props.formData[elementName]  
            })
        }
        return formArray.map((item,i) =>{
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })

    }

    const showLabel = (show, label) => {
        return show ? 
        <label>{label}</label>
        : null
    }

    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;
        
        switch(values.element){
            case('input'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                </div>
            )

            break;
            default:
                formTemplate = null;
        }
        return formTemplate;
    }
    return (
        <div>
            {renderFields()}
        </div>
    );
};

export default FormFields;