import React from 'react'
import { useState,useContext,useEffect } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { LoginContext } from '../../components/ContextProvider/Context'


export const Update = () => {
    const { loginData, setLoginData } = useContext(LoginContext);
    let postedTime,postedDay
    //const loginData=useContext(LoginContext)
    const[bossId,setBossId]=useState("")
    const[posterName,setPosterName]=useState()
    const[bossPhone,setBossPhone]=useState()
    let timePosted=new Date().toLocaleTimeString()
    let datePosted=new Date().toLocaleDateString()


    // const bossId=loginData.userId





    useEffect(() => {
        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user)
        //console.log(user.userId)
        setBossId(user.userId)
        setPosterName(user.userName)
        setBossPhone(user.phoneNumber)


        // console.log(LoginContext["userId"])
        // console.log(typeof(LoginContext))
        //setBossId(loginData.userId)
        // console.log(bossId+"The capiyo")
    }, [])










    //console.log(loginData.length)




    const {
        register,
        handleSubmit,
        formState: {errors },
    } = useForm(

        {

            defaultValues:{
                userName: "",
                wage: "",
                location: "",
                pSkill: "",
                description: "",
                skills:"",
                education:""




            }
        })


    const onSubmit = (data) =>{
        const output={
            ...data,
            posterId:bossId,
            posterName:posterName,
            timePosted:timePosted,
            datePosted:datePosted,
            bossPhone:bossPhone
        }
        console.log(typeof(data))
        //setBossId(loginData.userId)
        //alert(bossid)
        //const { loginData, setLoginData } = useContext(LoginContext);
        // send data to backend API

        fetch("http://localhost:5000/users/add-profile", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)

        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Job Posted Successfully")
                window.location.href = '/all-jobs';
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to post job");
            });

    }

    const checkMe=()=>{
        console.log(bossId)
    }


    // DYNAMIC CANDIDATE FORM QUESTION
    const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
    const [questionSize, setQuestionSize] = useState(0);
    const addQuestion = () => {
        setQuestionSize(questionSize+1);
        setQuestions([...questions, { question: '', answer: '' }]);
    };
    const handleDeleteQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
        setQuestionSize(questionSize-1);
    };



    return (
        <div className='w-[400px]   h-[600px] overflow-y-auto  container mt-2 mx-auto xl:px-24 px-4 bg-green-100  rounded-xl  border-2
         border-red-500 hover:border-red-800 '>
            <div className=' py-6 px-4 lg:px-16 rounded-xl'>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center  text-black'>Update your profile </h1></div>
                            <div>
                                <label className='block m-1 text-md text-black'>Username</label>
                                <input type='text' required {...register("userName")}
                                       placeholder='Tesla'
                                       className=' border-b-2 border-green-500 create-job-input placeholder:text-xs md:placeholder:text-sm  rounded-xl'>

                                </input>
                            </div>
                            <div>
                                <label className='block m-1 text-md text-black'>Education Level </label>
                                <input type='text' required {...register("education")} placeholder='Bachelor in Computer Science'
                                       className='border-b-2 border-green-500 create-job-input placeholder:text-xs md:placeholder:text-sm  rounded-xl'>

                                </input>
                            </div>

                            <div>
                                <label className='block m-1 text-md text-black'>Major Skill</label>
                                <input type='text' required {...register("pSkill")} placeholder='Ethical hacking'
                                       className='border-b-2 border-green-500 create-job-input placeholder:text-xs md:placeholder:text-sm  rounded-xl'>

                                </input>
                            </div>



                            <div>
                                <label className='block m-1 text-md text-black'>Hourly wage rate</label>
                                <input type='number' required {...register("wage")}
                                       placeholder='Ksh. 500'
                                       className=' border-b-2 border-green-500 create-job-input placeholder:text-xs md:placeholder:text-sm rounded-xl'>

                                </input>
                            </div>
                            <div>
                                <label className='block m-1 text-md text-black'>Location</label>
                                <input type='text' required {...register("location")}
                                       placeholder='Kisumu'
                                       className=' border-b-2 border-green-500 create-job-input placeholder:text-xs md:placeholder:text-sm rounded-xl border-b-2 border-green-500'>

                                </input>
                            </div>
                            <div>
                                <label className='block m-1 text-md text-black'>List your Skills</label>
                                <textarea className='create-job-input placeholder:text-xs md:placeholder:text-sm rounded-xl border-b-2 border-green-500' rows={4}
                                          placeholder='Software engineer, Electrical engineer...' required {...register("skills")} />




                            </div>




                            <div>
                                <label className='block m-1 text-md text-black'>Description</label>
                                <textarea className='create-job-input placeholder:text-xs md:placeholder:text-sm rounded-xl border-b-2 border-green-500' rows={4}
                                          placeholder='Describe yourself' required {...register("description")} />
                            </div>
                        </div>
                    </div>

                    {/* CANDIDATE FORM *
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center'>Candidate Form</h1></div>



                            {/* DYNAMIC BLOCK */}


                    { /*<div>
                                {questions.map((question, index) => (

                                    <div key={index}>
                                            <label className='block m-1 text-md'>Question {`${index+1}`}</label>
                                            <div className='mb-2 text-lg grid grid-cols-1 md:grid-cols-2'>
                                                <input type='text' required {...register(`applicationForm.question.${index}`)} placeholder={`Question ${index + 1}`} className=' create-job-input placeholder:text-xs md:placeholder:text-sm' ></input>

                                                <div className='grid grid-cols-3 items-center justify-items-center my-2 md:my-0 ' >
                                                    <div className='flex'>
                                                        <input {...register(`applicationForm.answer.${index}`, { required: true })} type="radio" value="Yes" className='mx-2' />
                                                        <p>Yes</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <input {...register(`applicationForm.answer.${index}`, { required: true })} type="radio" value="No" className='mx-2' />
                                                        <p>No</p>
                                                    </div>
                                                    <div onClick={() => handleDeleteQuestion(index)}>
                                                        <box-icon size='sm' name='trash'/>
                                                    </div>
                                                </div>

                                            </div>
                                    </div>
                                ))}
                            </div>
                                <button onClick={addQuestion} className={`${questionSize === 4? `hidden` : ``} block border border-black bg-transparent text-black text-xs md:text-md py-3 px-12 md:px-16 rounded-md mt-4 md:mt-8 mx-auto`}>Add More Questions</button>
                        </div>
                    </div>
                            (=*/}

                    {/* Submit button */}

                    <div className='flex justify-center my-8'>
                        <button    className='bg-green-500  text-black text-md py-4 px-16
                        rounded-md'>Submit</button>
                    </div>


                </form>

            </div>
        </div>
    )
}
