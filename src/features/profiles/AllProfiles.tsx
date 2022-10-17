import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { Card, Grid} from "semantic-ui-react"
import { useStore } from "../../app/stores/store"
import ProfileCard from "./ProfileCard"


export default observer(function AllProfiles() {
    const { profileStore } = useStore();
    const { loadUsers, loadingProfile, users } = profileStore;

    useEffect(() => {
        loadUsers();
    }, [loadUsers])

    if (loadingProfile) return <h3>Loading users...</h3>

    return (
        <Grid>
            <Grid.Column width={16}>
                    <Card.Group itemsPerRow={4}>
                        {users.map(profile => (
                            <ProfileCard key={profile.username} profile={profile} />
                        ))}
                    </Card.Group>
                </Grid.Column>
        </Grid>
    )
})