
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contanct() {

    const contacts = [{type: "Telephone", value: "+123456789", icon: faPhone},
                      {type: "Email", value: "martin.example@gmail.com", icon: faEnvelope},
                      {type: "GitHub", value: "GitHub", icon: faGithub},
                      {type: "LinkedIn", value: "LinkedIn", icon: faLinkedin}
    ]


  return (
    <div>

        
       <h1 className='text-5xl text-white'>Contanct Me</h1> 


       <div>
        {contacts.map((contact, index) => (
            <li key={index}>
                <FontAwesomeIcon icon={contact.icon} />
                <h2>{contact.type}</h2>
                
                <a href="">{contact.value}</a>
                
            </li>
        ))}
       </div>
    </div>
  )
}

export default Contanct