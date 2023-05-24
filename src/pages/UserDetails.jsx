import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaBriefcase, FaUserFriends, FaUsers } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { Context } from '../context/context'
import Loader from '../components/Loader'

function UserDetails() {
    const { login } = useParams()
    const { user, dataUser } = useContext(Context)
    useEffect(() => {
        dataUser(login)
    }, [login])

    if (!user) {
        return <Loader />
    }
    return (
        <div className='details container'>
            <div className="details__right">
                <div className="details__image">
                    <img src={user.avatar_url} alt="user" />
                </div>
                <h2 className="details__title">{user.name}</h2>
                <p className="details__location"><ImLocation />{user.location}</p>
                <div className="details__button">
                    <button className="details__github"><a href={user.html_url}>Github</a></button>
                    <button className="details__proweb"><a href="https://proweb.uz/">Proweb</a></button>
                </div>
                <p className="details__bio">{user.bio}</p>
            </div>
            <div className="details__left">
                <h1 className="details__name">{user.name}</h1>
                <div className="details__info">
                    <p className="details__create"><span>Create date: </span> {user.created_at}</p>
                    <p className="details__update"><span>Update date: </span> {user.updated_at}</p>
                    {user.company && <p className='details__status'><span>Company: </span> {user.company}</p>}
                    {user.blog && <p className='details__status'><span>Website: </span> {user.blog}</p>}
                    {user.email && <p className='details__status'><span>Email: </span> {user.email}</p>}
                    {user.twitter_username && <p className='details__status'><span>Twitter: </span> {user.twitter_username}</p>}
                    {user.type && <p className='details__status'><span>Status: </span> {user.type}</p>}
                </div>
            </div>
            <div className="details__bottom">
                <div className="details__box">
                    <FaUsers />
                    <div className="">
                        <p className="details__num">{user.followers}</p>
                        <p className="details__text">User's followers</p>
                    </div>
                </div>
                <div className="details__box">
                    <FaUserFriends />
                    <div className="">
                        <p className="details__num">{user.following}</p>
                        <p className="details__text">User's following</p>
                    </div>
                </div>
                <div className="details__box">
                    <FaBriefcase />
                    <div className="">
                        <p className="details__num">{user.public_repos}</p>
                        <p className="details__text">User's repositories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails