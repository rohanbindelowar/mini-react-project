import React from 'react'

export const User = ({user}) => {
    const{avatar_url,name,bio,hireable,html_url,login,type,public_repos} =user
  return (
    <div className='user'>
        <div>
            <a href={avatar_url} target='blank'><img src={avatar_url} alt="user" className='avatar' /></a>
        </div>
        <div className='details'>
            <h3><a href={html_url} target='blank' className='name' >{name !== null || login !== null?name: login}</a></h3>
    
            <p className='bio'>{bio !== null?bio:"No Bio is Found!"}</p>
        </div>
        <div className='content-details'> 
        <div>{hireable===true? "Open to Work": ""}</div>
        <div>Type: {type}</div>
        <div>Public_repos: {public_repos}</div>
        </div>
    </div>
  )
}
export default User;
