import { FormRow } from '../../componenets'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import FormRowSelect from '../../componenets/FormRowSelect'
import { clearValues, handleChange,createJob,editJob } from '../../features/job/jobSlice'
import { useEffect } from 'react'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const {user} = useSelector((store)=>store.user)
  const dispatch = useDispatch();

useEffect(()=>{
  if(!isEditing){
    dispatch(handleChange({
    name: 'jobLocation',
    value: user.location
  }))
  }
},[]);


  const handleSubmit = (e)=>{
    e.preventDefault();

  if(!position || !company || !jobLocation){
     toast.error('Please Fill Out All Fields')
      return
  }
  
if (isEditing) {
  dispatch(
    editJob({
      jobId: editJobId,
      job: {
        position,
        company,
        jobLocation,
        jobType,
        status,
      },
    })
  )
  return;
};

  dispatch(createJob({position,company,jobLocation,status,jobType}))
  };

  const handleJobInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name,value}))
  }

  return(
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>

        <div className="form-center">
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
          name="status"
          value={status}
          list={statusOptions}
          handleChange={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect
          name="jobType"
          labelText="job type"
          value={jobType}
          list={jobTypeOptions}
          handleChange={handleJobInput}
          />
          {/* btn container */}
          <div className="btn-container">
            <button className="btn btn-block btn-clear" type='button' onClick={()=> {dispatch(clearValues())}}>
              clear
              </button>
              <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            </div>
          </div>
        </form>
    </Wrapper>
  )
}


  export default AddJob;