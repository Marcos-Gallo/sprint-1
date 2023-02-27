import { useRef } from 'react'
import './LeftPart.css'
import Logo from '../../images/logom2.svg'
import Inga from '../../images/inga-logo.svg'
import Google from '../../images/google-logo.svg'

export default function LeftPart() {

    let name = useRef()
    let mail = useRef()
    let password = useRef()
    let confirmpassword = useRef()
    let checkbox = useRef()

    function handleSubmit() { }

    return (
        <div className='left-cont'>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className='up-form'>
                    <div className='logos-form'>
                        <img src={Logo} alt="logo-m" />
                        <img src={Inga} id="inga-logo" alt="inga-logo" />
                    </div>
                    <h1>
                        Welcome!
                    </h1>
                    <p>
                        Discover manga, manhua and manhwa, track your progress, have fun, read manga.
                    </p>
                </div>
                <div className='data-form'>
                    <label htmlFor='name'>Name</label>
                    <input ref={name} type="text" id='name-inputs' name='name' required />

                    <label htmlFor='mail'>E-mail</label>
                    <input ref={mail} type="text" id='mail-inputs' name='mail' required />

                    <label htmlFor='password'>Password</label>
                    <input ref={password} type="text" id='pass-inputs' name='password' required />

                    <label htmlFor='confirm-password'>Confirm password</label>
                    <input ref={confirmpassword} type="text" id='conf-pass-inputs' name='confirm-password' required />

                    <input ref={checkbox} type="checkbox" id='form-checkbox' required />
                    <label htmlFor='form-checkbox'>Send notification to my email</label>

                </div>
                <input type="submit" id='sign-submit' value="Sign up" />
                <button className='google-sign'>
                    <img className='google-logo' src={Google} alt="google-logo" />
                    Sign up with Google
                </button>
            </form>
            <div className='under-form'>
                <p>Already have an account?
                    <a href="#"> Log in</a>
                </p>
                <p>
                    Go back to
                    <a href="#"> home page</a>
                </p>
            </div>
        </div>

    )
}

