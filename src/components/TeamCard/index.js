import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamItem} = props
  const {name, teamImageURL, id} = teamItem

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="team_card">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
