import Angular from './images/imgangular.jfif'
import Bootstrap from './images/imgbootstrap.jfif'
import KompleWeb from './images/imgkompleweb.jfif'
import Frontend from './images/imgfrontend.jfif'
import './Course.css';


const courseMap={
    Angular,
    Bootstrap,
    KompleWeb,
    Frontend,
}

function Course({courseName}) {
    
    return ( 
        <div className='coursediv'> 
            <img className='course' src={courseMap[courseName]} alt="course" /> 
        </div> 
    );
}

export default Course;