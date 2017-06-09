import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default (props) => {
  return (
    <form id="email">
      <h4 className="center">Let's get in touch!</h4>
      <p>Input your name, email, and a brief message, and I'll be sure to get back to you!</p>
      <TextField floatingLabelText="Name" hintText="ex. Mike Michaelson" errorText="This field is required" onChange={props.setName} /><br />
      <TextField floatingLabelText="Email" hintText="ex. mike.michaelson@gmail.com" errorText="This field is required" onChange={props.setEmail} /><br />
      <TextField floatingLabelText="Message" defaultValue="Hi! I'd love to speak with you sometime about a project! Please email me back at the address provided." onChange={props.setMessage} fullWidth={true} multiLine={true} rows={2} rowsMax={10} /><br />
      <br />
      <br />
      <RaisedButton label="Send" primary={true} onClick={props.sendEmail} />
    </form>
  )
}
