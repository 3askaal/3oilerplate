import { createGlobalStyle } from 'styled-components'

export const FormResetStyle: any = createGlobalStyle`
  /* ----------------------------------------------------------------------------------------------------

  Super Form Reset

  A couple of things to watch out for:

  - IE8: If a text input doesn't have padding on all sides or none the text won't be centered.
  - The default border sizes on text inputs in all UAs seem to be slightly different. You're better off using custom borders.
  - You NEED to set the font-size and family on all form elements
  - Search inputs need to have their appearance reset and the box-sizing set to content-box to match other UAs
  - You can style the upload button in webkit using ::-webkit-file-upload-button
  - ::-webkit-file-upload-button selectors can't be used in the same selector as normal ones. FF and IE freak out.
  - IE: You don't need to fake inline-block with labels and form controls in IE. They function as inline-block.
  - By turning off ::-webkit-search-decoration, it removes the extra whitespace on the left on search inputs

  ----------------------------------------------------------------------------------------------------*/

  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    appearance:none;
    /* Browsers have different default form fonts */
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus
  {
    outline:0;
  }

  /* Box Sizing Reset
  -----------------------------------------------*/

  /* All of our custom controls should be what we expect them to be */
  input,
  textarea
  {
    -webkit-box-sizing:content-box;
    -moz-box-sizing:content-box;
    box-sizing:content-box;
  }

  /* These elements are usually rendered a certain way by the browser */
  button,
  input[type=reset],
  input[type=button],
  input[type=submit],
  input[type=checkbox],
  input[type=radio],
  select
  {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
  }

  /* Text Inputs
  -----------------------------------------------*/

  input[type=date],
  input[type=datetime],
  input[type=datetime-local],
  input[type=email],
  input[type=month],
  input[type=number],
  input[type=password],
  input[type=range],
  input[type=search],
  input[type=tel],
  input[type=text],
  input[type=time],
  input[type=url],
  input[type=week]
  {
  }

  /* Button Controls
  -----------------------------------------------*/

  input[type=checkbox],
  input[type=radio]
  {
    width:13px;
    height:13px;
  }

  /* File Uploads
  -----------------------------------------------*/

  input[type=file]
  {

  }

  /* Search Input
  -----------------------------------------------*/

  /* Make webkit render the search input like a normal text field */
  input[type=search]
  {
    -webkit-appearance:textfield;
    -webkit-box-sizing:content-box;
  }

  /* Turn off the recent search for webkit. It adds about 15px padding on the left */
  ::-webkit-search-decoration
  {
    display:none;
  }

  /* Buttons
  -----------------------------------------------*/

  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"]
  {
    /* Fix IE7 display bug */
    overflow:visible;
    width:auto;
    color: inherit;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  button:hover,
  button:focus {
    outline: 0;
  }

  /* IE8 and FF freak out if this rule is within another selector */
  ::-webkit-file-upload-button
  {	
    padding:0;
    border:0;
    background:none;
  }

  /* Textarea
  -----------------------------------------------*/

  textarea 
  {
    /* Move the label to the top */
    vertical-align:top;
    
    /* Turn off scroll bars in IE unless needed */
    overflow:auto;
  }

  /* Selects
  -----------------------------------------------*/

  select
  {

  }

  select[multiple] 
  {
    /* Move the label to the top */
    vertical-align:top;
  }
`