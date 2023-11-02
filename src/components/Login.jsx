import React from 'react'

const Login = () => {
    return (
        <div className="container text-center">
            <div className="row  w-100vh">
                <div className="col-4 bg-primary">
                    <form>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name='email' autoComplete='off' placeholder='Enter Email' className='form-control' />
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Login