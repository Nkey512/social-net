import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381__340.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;