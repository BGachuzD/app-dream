import { Text } from 'react-native';
import { TitleViewStyles } from '../../styles/globals';

const TitleView = ({ title }) => {
  return (
    <Text style={TitleViewStyles}>{title}</Text>
  );
}

export default TitleView;
