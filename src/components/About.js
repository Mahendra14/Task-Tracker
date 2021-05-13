import { Link } from 'react-router-dom'
//link is useful when we dont want page to reload with a tag

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About