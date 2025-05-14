import { useState } from 'react'
import { fetchUserData } from '../utils/api'
import { User } from '../models/user'

function UserInfo() {

    const [userInfo, setUserInfo] = useState({} as User)
    const [userId, setUserId] = useState<number>(0)

    const getUserInfo = async () => {
        const user: User = await fetchUserData(userId)
        setUserInfo(user)
    }

  return (
    <>
        <h1>User Info</h1>
        <div data-testid="username">{userInfo.name}</div>
        <input placeholder="user id" type="number" value={userId} onChange={(e) => setUserId(+e.target.value)} />
        <button onClick={getUserInfo}>Get User Info</button>
    </>
  )
}

export default UserInfo