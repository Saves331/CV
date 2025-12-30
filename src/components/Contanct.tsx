
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contanct() {

    const contacts = [{type: "Telephone", value: "+421944349390", icon: faPhone},
                      {type: "Email", value: "martin.l74123@gmail.com", icon: faEnvelope},
                      {type: "GitHub", value: "https://github.com/Saves331", icon: faGithub},
                      {type: "LinkedIn", value: "https://www.linkedin.com/in/martin-luteran%C4%8D%C3%ADk-604774326/", icon: faLinkedin}
    ]


  return (
    <div>

        
       <h1 className='text-5xl text-white font-bold'>Contanct Me</h1> 


       <div className='flex gap-4 flex-col mt-4'>
        {contacts.map((contact, index) => {

            let href = contact.value;

            if(contact.type === "Email") {
                href = `mailto:${contact.value}`;
            }

            if(contact.type === "Telephone") {
                href = `tel:${contact.value}`;
            }

            return (
              <li key={index} className='text-white list-none flex gap-2'>
                <div>
                    <FontAwesomeIcon icon={contact.icon} />
                </div>
                 

                <div className='flex flex-col font-semibold'>
                   <h2>{contact.type}:</h2>
                    <a href={href} target='blank_' className='underline'>{contact.value}</a>
                </div>
            </li>
            )
            
      })}
       </div>
    </div>
  )
}

export default Contanct