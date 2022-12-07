import { useState, useEffect } from 'react';
import { Logo,FormRow } from '../componenets';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

// redux toolkit and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
// if possible prefer local state
// global state


const Register = () => {
  const [values, setValues] = useState(initialState);
  const {user,isLoading} = useSelector((store)=> store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMember = () => {setValues({...values, isMember : !values.isMember})};

  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(`${name}:${value}`);
    setValues({...values,[name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values;
    if(!email || !password || (!isMember && !name)){
      toast.error('please fill out all fields');return;
    }
    if(isMember){
      dispatch(loginUser({email,password}));
      return;
    }
      dispatch(registerUser({name,email,password}));
      
    };
    
    useEffect(()=>{
      if(user){
        setTimeout(()=>{
          navigate('/')
        },2000)
      }
    },[user])
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* name field */}
        {!values.isMember && (
          <FormRow   type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        )}
      {/* email field */}
        <FormRow   type='email'
        name='email'
        value={values.email}
        handleChange={handleChange}
      />
      {/* pass field */}
        <FormRow   type='password'
        name='password'
        value={values.password}
        handleChange={handleChange}
      />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading?'loading...': 'sumbit'}
        </button>
        <button
  type='button'
  className='btn btn-block btn-hipster'
  disabled={isLoading}
  onClick={() => {
    dispatch(loginUser({ email: 'testUser@test.com', password: 'secret' }))
  }}
>
  {isLoading ? 'loading...' : 'demo'}
</button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button className='member-btn' type='button' onClick={toggleMember}>{values.isMember ? 'Register' : 'Login'}</button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;