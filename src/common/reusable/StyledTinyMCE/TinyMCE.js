// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// const StyledTinyMceEditor = (props) => {
//   const {
//     initialValue,
//     editorRef,
//     handleChangeClassicEditor,
//     height,
//     values,
//     name,
//   } = props;

//   return (
//     <>
//       <Editor
//         tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
//         // onInit={(evt, editor) => (editorRef.current = editor)}
//         initialValue={initialValue}
//         onEditorChange={handleChangeClassicEditor}
//         init={{
//           menubar: false,
//           branding: false,
//           image_title: true,
//           fontsize_formats:
//             '8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt',
//           automatic_uploads: true,
//           file_picker_types: 'image',
//           // images_upload_url: 'image upload url',
//           image_advtab: true,
//           file_picker_callback: function (cb, value, meta) {
//             let input = document.createElement('input');
//             input.setAttribute('type', 'file');
//             input.setAttribute('accept', 'image/*');
//             input.onchange = function () {
//               let file = this.files[0];
//               let reader = new FileReader();
//               reader.onload = function () {
//                 let id = 'blobid' + new Date().getTime();
//                 let blobCache = tinymce.activeEditor.editorUpload.blobCache;
//                 let base64 = reader.result.split(',')[1];
//                 let blobInfo = blobCache.create(id, file, base64);
//                 blobCache.add(blobInfo);
//                 cb(blobInfo.blobUri(), { title: file.name });
//               };
//               reader.readAsDataURL(file);
//             };
//             input.click();
//           },
//           height: height ? height : '400',
//           // images_upload_url: 'setup file upload url to enable file upload',
//           plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount imagetools',
//           ],
//           toolbar:
//             'undo redo | formatselect | fontsizeselect' +
//             'bold italic forecolor backcolor | alignleft aligncenter ' +
//             'alignright alignjustify| nugget | bullist numlist outdent indent | ' +
//             'removeformat | code| link image fontselect | help',
//           content_style:
//             "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Roboto&display=swap'); body { font-family: 'Roboto', sans-serif; } h1,h2,h3,h4,h5,h6 { font-family: 'Lato', sans-serif; }",
//           font_formats:
//             'Arial Black=arial black,avant garde; Courier New=courier new,courier; Lato Black=lato; Roboto=roboto;',
//         }}
//       />
//     </>
//   );
// };

// export default StyledTinyMceEditor;
