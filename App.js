import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import {Header} from "native-base";

const DATA = [
{
	id: "1",
	title: "Flex Box",
},
{
	id: "2",
	title: "Input",
},
{
	id: "3",
	title: "Form",
},
{
	id: "4",
	title: "LBS",
},
{
	id: "5",
	title: "PHP Databasse",
},
{
	id: "6",
	title: "Firestore Datababse",
},
];


const Item = ({ title }) => {
return (
	<View style={styles.item}>
	<Text>{title}</Text>
	</View>
);
};

const renderItem = ({ item }) => <Item title={item.title} />;
class Search extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: DATA,
	error: null,
	searchValue: "",
	};
	this.arrayholder = DATA;
}

searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const item_data = `${item.title.toUpperCase()})`;
	const text_data = text.toUpperCase();
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};

render() {
	return (
	<View style={styles.container}>
          <Text 
          color="white" 
          fontWeight="bold" style={{
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 5,
            fontSize: 30
            }} > 
            Project List
          </Text>

		<SearchBar
		placeholder="Search Here..."
		lightTheme
		round
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={false}
		/>
		<FlatList
		data={this.state.data}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
	</View>
	);
}
}

export default Search;

const styles = StyleSheet.create({
container: {
	marginTop: 30,
	padding: 2,
},
item: {
	backgroundColor: "#355e3b",
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
},
});
