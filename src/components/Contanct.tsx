
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contanct() {

    const contacts = [{type: "Telephone", value: "+421944349390", icon: faPhone},
                      {type: "Email", value: "martin.example@gmail.com", icon: faEnvelope},
                      {type: "GitHub", value: "GitHub", icon: faGithub},
                      {type: "LinkedIn", value: "LinkedIn", icon: faLinkedin}
    ]


  return (
    <div>

        
       <h1 className='text-5xl text-white font-bold'>Contanct Me</h1> 


       <div className='flex gap-4 flex-col mt-4'>
        {contacts.map((contact, index) => (
            <li key={index} className='text-white list-none flex gap-2'>
                <div>
                    <FontAwesomeIcon icon={contact.icon} />
                </div>
                 

                <div className='flex flex-col font-semibold'>
                   <h2>{contact.type}:</h2>
                    <a href="" className='underline'>{contact.value}</a>
                </div>
                
                
              
                
            </li>
        ))}
       </div>
    </div>
  )
}

export default Contanct