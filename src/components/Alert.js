import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  )
}


// props.alert && use kia taaki agar sirf props.alert false ho to aage vala chck hi na ho..
// if its not null, then do aage vala statement.. this happens cuz all the jsx will be converted to js calls