import React from 'react';
import {
  FormFileUpload,
  FormPhoneNumber,
  SimpleCheckbox,
  ToggleButton,
  Calender,
  DatePickerCalender,
  FormRichTextEditor,
  Slider,
  DateRange,
  // TextandSpeechRecognition,
  Dynamicdropdown,
  Multiselect,
  ImageCheckbox,
  ImageRadio,
  ImageAnnotation,
} from "./FormElement";

 function Form() {
  return (
    <div className='SidebarComponents FormLayout'>
       <form>
        <div className="mb-3"><FormFileUpload/></div>
        <div className="mb-3"><FormPhoneNumber/></div>
        <div className="mb-3"><SimpleCheckbox/></div>
        <div className="mb-3"><ToggleButton/></div>
        <div className="mb-3"><Calender/></div>
        <div className="mb-3"><DatePickerCalender/></div>
        <div className="mb-3"><FormRichTextEditor/></div>
        <div className="mb-3"><Slider/></div>
        <div className="mb-3"><DateRange/></div>  
        {/* <div className="mb-3"><TextandSpeechRecognition/></div> */}
        <div className="mb-3"><Dynamicdropdown/></div>
        <div className="mb-3"><Multiselect/></div>
        <div className="mb-3">< ImageCheckbox/></div>
        <div className="mb-3">< ImageRadio/></div>
        <div className="mb-3"><ImageAnnotation/></div>
      </form>
    </div>
  );
};

export default Form;