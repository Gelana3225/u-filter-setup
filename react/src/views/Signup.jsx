import {Link} from "react-router-dom";
import axiosClient from "../axios-client";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_Confirmation: passwordConfirmationRef.current.value,
        }
        axiosClient.post('/signup', payload)
          .then(({data}) => {
            
          })
    }
    return (
                  <form onSubmit={onSubmit}>
                      <h1 className="title">
                          Signup for free
                      </h1>
                      <input ref={nameRef} type="text" placeholder="Full Name" />
                      <input ref={emailRef} type="email" placeholder="Email" />
                      <input ref={passwordRef} type="password" placeholder="password" />
                      <input ref={passwordConfirmationRef} type="password" placeholder="password confirmation" />
                      <button className="btn btn-block">Signup</button>
                      <p className="message">
                         Already Registered? <Link to="/login">Sign in</Link>
                      </p>
                  </form>
    )
}