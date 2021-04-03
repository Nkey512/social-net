import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://sun1-87.userapi.com/s/v1/ig1/vM2Ikv_34gKznUsQ2THo6advgz_EBg-P2ydpw8eKLViCzywRpV60ToFR7LYL1gYn7WUbMc1C.jpg?size=200x0&quality=96&crop=1,1,766,766&ava=1',
                    followed: false, fullName: 'Nikita', status: 'Coding...',
                    location: { country: 'Russia', city: 'SPb' }
                },
                {
                    id: 2, photoUrl: 'https://sun1-28.userapi.com/s/v1/if1/5V05-BO5g0_ro_sYhIk653KBXeoUSufhE9JifJOOpfTsFz9a4NtUxTDFBELwHkbucaoO6J5V.jpg?size=200x0&quality=96&crop=0,0,1155,2048&ava=1',
                    followed: true, fullName: 'Dimon', status: 'Making sueta!',
                    location: { country: 'Russia', city: 'Tver' }
                },
                {
                    id: 3, photoUrl: 'https://i.pinimg.com/736x/47/2d/1a/472d1afe73cb799e61c2325aac0d2f46.jpg',
                    followed: false, fullName: 'Mikola', status: 'Eating SALO!',
                    location: { country: 'Ukraine', city: 'Kiev' }
                },
                {
                    id: 4, photoUrl: 'https://sun1-29.userapi.com/s/v1/ig2/o3GMgON-gEF_pjXRw-Zxts37FDKbAXjBc_6Un30T0XD3h3dV6KM0gNIUXLMtMlttvijDG_KWt4T1c7W2jZMf-t3E.jpg?size=200x0&quality=96&crop=0,0,1200,1600&ava=1',
                    followed: true, fullName: 'Kiska', status: 'Meow',
                    location: { country: 'Russia', city: 'Moscow' }
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(
                    u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={s.userPhoto} />
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {u.fullName}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {u.location.country}
                                </div>
                                <div>
                                    {u.location.city}
                                </div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;