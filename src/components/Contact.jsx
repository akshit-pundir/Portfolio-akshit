import React, { useRef,useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { sectionWrapper } from '../hoc';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

// template_r3kr7bv
// service_j745dkn
// pkHYs1j4gTRZCcoqh



const Contact = () => {
   const formRef=useRef(); 
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  });
  const [loading, setLoading] = useState(false);

  const handleChange =(e) => {
        const { name ,value }=e.target;
        setForm({ ...form, [name]:value  })
  };
  
  const handleSubmit =(e) => {
      e.preventDefault();
      setLoading(true);
      emailjs.send( 
        'service_j745dkn',
        'template_r3kr7bv',
         {
             from_name:form.name,
              to_name:'Akshit Pundir',
              from_email:form.email,
              to_email:'akshit.pundir99@gmail.com',
              message:form.message
            }, 'pkHYs1j4gTRZCcoqh'
        )
      .then(() =>{
        setLoading(false);
        alert("Thank You! T Will get back to You as soon as possible");
        
        setForm({
          name:'',
          email:'',
          message:''
        }, (error) =>{
          setLoading(false);
          console.log(error);
          alert("sorry! something went wrong");
        }  )
     
     
      })

  };


  return (

    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden gap-10'>
        <motion.div
          variants={slideIn("left","tween","0.2","1")}
          className=' flex-[0.75] bg-black-100 p-8 rounded-2xl '
        >
          <p  className={`${styles.sectionSubText}`} >Get In Touch</p>
          <h2 className={`${styles.sectionHeadText}`}>Contact</h2>

          <form ref={formRef}
            onSubmit={handleSubmit}
            className=' mt-12 flex flex-col gap-8'
          >
             {/* for the name  */}

              <label  className=' flex flex-col '>
                  <span className=' text-white mb-4  font-medium'>Your Name</span>
                  <input type="text" name='name' value={form.name} onChange={handleChange} 
                    placeholder=" what's your name "
                   className=' bg-tertiary py-4 px-6 placeholder: text-secondary rounded-lg border-none outline-none font-medium'/>
              </label>
            
             {/* for the email */}
              <label  className=' flex flex-col '>
                  <span className=' text-white mb-4  font-medium'>Your Email</span>
                  <input type="email" name='email' value={form.email} onChange={handleChange} 
                    placeholder=" what's your email"
                   className=' bg-tertiary py-4 px-6 placeholder: text-secondary rounded-lg border-none outline-none font-medium'/>
              </label>
             
              {/* for the message*/}
              <label  className=' flex flex-col '>
                  <span className=' text-white mb-4  font-medium'>Your Message</span>
                  <textarea type="text" name='message' value={form.message} onChange={handleChange} 
                    cols={4} rows={6}
                    placeholder=" what's your name "
                   className=' bg-tertiary py-4 px-6 placeholder: text-secondary rounded-lg border-none outline-none font-medium'/>
              </label>
              <button
                type='submit'
                className=' bg-tertiary px-8 outline-none w-fit text-white shadow-md py-3 font-bold shadow-primary rounded-xl'
              > 
              {loading ? 'sending' : 'send'}

              </button>
          </form>

        </motion.div>

    <motion.div
      variants={slideIn("right","tween","0.2","1")}
      className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  '
    >
        <EarthCanvas/>
    </motion.div>
   
   
    </div>

    )

  }


  export default sectionWrapper(Contact,"contact");