import React from 'react';

import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
