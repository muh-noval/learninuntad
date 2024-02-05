import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from '../../assets';
import StarRating from 'react-native-star-rating-widget';
import MDButtom from './component/MDButton';

const Separator = () => <View style={styles.horizontal} />;

const data = [
  {label: 'Service', id: 'service'},
  {label: 'Followed Instructions', id: 'instructions'},
  {label: 'Hygenic', id: 'hygenic'},
  {label: 'Friendly', id: 'friendly'},
  {label: 'Personality', id: 'personality'},
  {label: 'Actuality', id: 'actuality'},
  {label: 'Attitude', id: 'attitude'},
  {label: 'Confused asdasdas', id: 'confused'},
];

const FilterButtons = ({label, selected, onPress}) => (
  <MDButtom
    label={label}
    selected={selected}
    onPress={onPress}
    dynamicStyle={{
      backgroundColor: selected ? 'red' : 'transparent',
      borderColor: selected ? 'red' : 'black',
    }}
  />
);

const Rate = () => {
  const [rating, setRating] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterPress = id => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(prevFilters =>
        prevFilters.filter(filter => filter !== id),
      );
    } else {
      setSelectedFilters(prevFilters => [...prevFilters, id]);
    }
  };

  const handleSubmitFeedback = () => {
    console.log('Selected Filters:', selectedFilters);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionCenter}>
        <Image source={Avatar} style={styles.avatar} />
      </View>
      <View style={styles.sectionCenter}>
        <Text style={styles.labelName}>Muhammad Noval</Text>
        <Text style={styles.labelCode}>9.5673.TOH</Text>
        <Text>How was the driver of your order from</Text>
        <Text>Hokben - Ruko Rawasari</Text>
      </View>
      <View style={styles.sectionCenter}>
        <StarRating rating={rating} onChange={setRating} />
        <Text style={styles.labelStatusRate}>All Perfect!</Text>
      </View>
      <Separator />
      <View style={styles.section}>
        <Text style={styles.labelQuestion}>
          What did you like about the delivery?
        </Text>
        <View style={styles.filterButtons}>
          {data.map(item => (
            <FilterButtons
              key={item.id}
              label={item.label}
              selected={selectedFilters.includes(item.id)}
              onPress={() => handleFilterPress(item.id)}
            />
          ))}
        </View>
        <View style={styles.labelPrice}>
          <Text>Total Paid</Text>
          <Text>Rp. 44.800, -</Text>
        </View>
        <TouchableOpacity style={styles.sectionCenter}>
          <Text style={styles.labelViewDetail}>View Details</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonSubmit}>
        <MDButtom
          label="Submit Feedback"
          selected={false}
          onPress={handleSubmitFeedback}
          dynamicStyle={{
            backgroundColor: '#6B8E23',
            borderWidth: 0,
          }}
          textColor="white"
        />
      </View>
    </ScrollView>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  section: {
    marginVertical: 12,
  },
  sectionCenter: {
    alignItems: 'center',
    marginVertical: 7,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  horizontal: {
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  filterButtons: {
    marginVertical: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  labelName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelCode: {
    fontSize: 12,
    color: '#808080',
    marginVertical: 10,
  },
  labelStatusRate: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 12,
  },
  labelQuestion: {
    fontWeight: 'bold',
  },
  labelPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelViewDetail: {
    color: '#1E90FF',
  },
  buttonSubmit: {
    marginTop: 24,
  },
});
