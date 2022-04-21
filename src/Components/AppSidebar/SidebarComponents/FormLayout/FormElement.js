import React, { useState, useEffect } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import RichTextEditor from 'react-rte';
// import 'react-rte/lib/RichTextEditor.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css.map";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
// import { MultiSelectCheckBox } from "multi-select-checkbox/dist/MultiSelectCheckBox";
import ImagePicker from 'react-image-picker'
import img1 from '../../../../assets/imagepick.png';
import img2 from '../../../../assets/imagepick.png';
import img3 from '../../../../assets/imagepick.png';
import 'react-image-picker/dist/index.css';

export const FormFileUpload = (props) => {
  const [file, setFile] = useState("");
  // console.log(file);
  const [isValidFile, setIsValidFile] = useState(true);

  const handleChangeFileUpload = (e) => {
    setFile(e.target.files[0]);
    const files = e.target.files[0].type;
    console.log(files);
    const validExtensions = ["jpeg", "jpg"];
    const fileExtensions = files.split("/")[1];
    const isValidFileUploaded = validExtensions.includes(fileExtensions);
    console.log(isValidFileUploaded);
    if (isValidFileUploaded === true) {
      setIsValidFile(true);
      console.log("file is valid");
    } else {
      setIsValidFile(!isValidFile);
      console.log("file is invalid");
    }
  };

  return (
    <div>
      <input
        className="form-control form-control-lg"
        id="formFileLg"
        type="file"
        name="file"
        onChange={handleChangeFileUpload}
      ></input>
      {isValidFile ? null : (
        <div className="row">
          <div className="col-sm-4 FormFileUploadValidation">
            Invalid extension file
          </div>
        </div>
      )}
    </div>
  );
};

export const FormPhoneNumber = (props) => {
  return (
    <div className="input-group">
      <span className="input-group-addon">Tel</span>
      <input type="tel" className="form-control" />
    </div>
  );
};

export const SimpleCheckbox = (props) => {
  const [checked, setChecked] = useState(false);
  //   console.log(checked);
  const onChangeCheckedSimpleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        onChange={onChangeCheckedSimpleCheckbox}
      />
      <label className="form-check-label checkbox-label" htmlFor="exampleCheck1">
        Agree to terms and conditions
      </label>
    </div>
  );
};

export const ToggleButton = (props) => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={triggerToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export const Calender = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(selectedDate);
  const [selectedDateTime, setSelectedDateTime] = useState(
    new Date("2014-08-18T21:11:54")
  );
  // console.log(selectedDateTime);
  const [selectedTime, setSelectedTime] = useState(
    new Date("2014-08-18T21:11:54")
  );
  //  console.log(selectedTime);

  const handleDateChange = (date) => {
    // console.log(date);
    setSelectedDate(date);
  };

  const handleDateTimeChange = (date) => {
    // console.log(date);
    setSelectedDateTime(date);
  };

  const handleTimeChange = (time) => {
    // console.log(time);
    setSelectedTime(time);
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        ></KeyboardDatePicker>
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <br />
        <KeyboardDateTimePicker
          label="Date-Time"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
        ></KeyboardDateTimePicker>
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <br />
        <KeyboardTimePicker
          label="Time"
          value={selectedTime}
          onChange={handleTimeChange}
        ></KeyboardTimePicker>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export const DatePickerCalender = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);

  return (
    <div>
      <label>Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
};

export const FormRichTextEditor = (props) => {
  const [editorState, seteditorState] = useState("");
  // console.log(editorState);

  const onChangeRichTextEditor = (value) => {
    seteditorState(value.blocks[0]);
  };

  return (
    <div>
      <Editor
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
        eeditorState={editorState}
        wrapperStyle={{ width: 800, border: "1px solid black" }}
        onChange={onChangeRichTextEditor}
      />
    </div>
  );
};

export const Slider = (props) => {

  return (
    <div className="container SliderContainer" style={{ position: "relative" }}>
      <div
        id="myCarousel"
        className="carousel slide SliderSlide"
        data-ride="carousel"
      >
        {/* Indicators */}
        <ol className="carousel-indicators SliderIndicators" >
          <li data-target="#myCarousel" 
          index="0"
          // data-slide-to='0' 
          // data-slide-to={index}
          class="active" ></li>
          <li data-target="#myCarousel" 
          index="1"
          // data-slide-to='1'
          // data-slide-to={index}
           ></li>
          <li data-target="#myCarousel" 
          index="2"
          // data-slide-to='2'
          // data-slide-to={index}
           ></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="Los Angeles"
              className="sliderImg"
            />
          </div>

          <div className="item">
            <img
              src="https://static.remove.bg/remove-bg-web/f4b1a5b6ab0be77785c26078f8a7569489d184da/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              alt="Chicago"
              className="sliderImg"
            />
          </div>

          <div className="item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="New york"
              className="sliderImg"
            />
          </div>
        </div>

        {/* Left and right controls  */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control sliderNextControl"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export const DateRange = (props) => {

  const [DateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  // console.log(DateRange[0]);

  return (
    <div>
      <DateRangePicker
        editableDateInputs={true}
        onChange={(item) => setDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={DateRange}
      />
    </div>
  );
};

export const ImageAnnotation = () => {

  const [selectedId,setSelectedId] = useState('');
  // console.log(selectedId);
  const [data,setData] = useState('')
  // console.log(data);

  const [pageSize, setPageSize] = useState({
    width: 400,
    height: 600,
  });

  const onResize = () => {
    setPageSize({ width: 400, height: 600 });
  };

  useEffect(() => {
    addEventListener("resize", onResize);
    // window.addEventListener("resize", onResize);
    return () =>
    removeEventListener("resize", onResize);
    //  window.removeEventListener("resize", onResize);
  }, []);

  const onSelectImageAnnotation = ((selectedId) => {
    setSelectedId(selectedId)
  });
  const onChangeImageAnnotation = (data) => setData( data);

  return (
    <div>
      <ReactPictureAnnotation
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        onSelect={onSelectImageAnnotation}
        onChange={onChangeImageAnnotation}
        width={pageSize.width}
        height={pageSize.height}
      ></ReactPictureAnnotation>
    </div>
  );
};

export const TextandSpeechRecognition = (props) => {
  
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;

  // }

  return (
    <div>
       {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p> */}
    </div>
  );
};

const DynamicdropdownOptions = [
  { label: "Select an option", value: "Select an option" },
  { label: "Fruit", value: "fruit" },
  { label: "Vegetable", value: "vegetable" },
  { label: "Meat", value: "meat" },
];

export const Dynamicdropdown = (props) => {
  const [values, setvalue] = useState("");
  // console.log(values);

  return (
    <div>
      <Dropdown
        options={DynamicdropdownOptions}
        defaultValue={values}
        placeholder="Select an option"
        onChange={setvalue}
      />
    </div>
  );
};

const MultiselectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const Multiselect = (props) => {

  const [selectedOption, setselectedOption] = useState("");

  // console.log(selectedOption);

  return (
    <div>
      <Select
      isMulti={selectedOption}
      value={selectedOption}
      onChange={setselectedOption}
      options={MultiselectOptions}
    />
    </div>
    
  );
};

const ImageCheckboxList = [img1, img2, img3]

export const ImageCheckbox = (props) => {

  const[image,setimage]=useState('')
    // console.log(image);
    const onPickImage = (image) =>{
        setimage(image)
    }

  return (
    <div>
    <ImagePicker
    ismulti={image}
    images={ImageCheckboxList.map((image, i) => ({src: image, value: i}))}
    onPick={onPickImage}
    />
    <div>
      <button type="button" onClick={() => console.log(image)} className="btn btn-primary">OK</button>
    </div>
    
 </div>
  );
};


const images=[
    {id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"},
    {id:2,img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'},
    {id:3,img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}
  ]

export const ImageRadio = () =>{

  
  return(
    <div>
      ImageRadio
    </div>
  )
}


