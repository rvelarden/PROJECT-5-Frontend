import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Profile = ({avatar, name, email}) => (
    <Card>
        <Image src={avatar}/>
        <Card.Content>
            <Card.Header>(name)</Card.Header>
            <Card.Description>(email)</Card.Description>
        </Card.Content>
    </Card>
)
export default Profile;