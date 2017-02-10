import Dropdown from '../../components/Dropdown';
import IconButton from '../../components/IconButton';
import InputButtonGroup from '../../components/InputButtonGroup';
import ProfileActions from '../../_actions/ProfileActions';
import React, { Component, PropTypes } from 'react';
import TextField from '../../components/TextField';

interface Props {
	age: string;
	characteristics: string;
	culture: CultureInstance;
	dateofbirth: string;
	eyecolor: number;
	eyecolorTags: string[];
	family: string;
	haircolor: number;
	haircolorTags: string[];
	otherinfo: string;
	placeofbirth: string;
	race: RaceInstance;
	size: number | string;
	socialstatus: number;
	socialstatusTags: string[];
	title: string;
	weight: number | string;
};

export default class OverviewPersonalData extends Component<Props, undefined> {

	static propTypes = {
		age: PropTypes.string.isRequired,
		characteristics: PropTypes.string.isRequired,
		culture: PropTypes.object.isRequired,
		dateofbirth: PropTypes.string.isRequired,
		eyecolor: PropTypes.number.isRequired,
		eyecolorTags: PropTypes.array.isRequired,
		family: PropTypes.string.isRequired,
		haircolor: PropTypes.number.isRequired,
		haircolorTags: PropTypes.array.isRequired,
		otherinfo: PropTypes.string.isRequired,
		placeofbirth: PropTypes.string.isRequired,
		race: PropTypes.object.isRequired,
		size: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]).isRequired,
		socialstatus: PropTypes.number.isRequired,
		socialstatusTags: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		weight: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]).isRequired
	};

	changeFamily = e => ProfileActions.changeFamily(e.target.value);
	changePlaceOfBirth = e => ProfileActions.changePlaceOfBirth(e.target.value);
	changeDateOfBirth = e => ProfileActions.changeDateOfBirth(e.target.value);
	changeAge = e => ProfileActions.changeAge(e.target.value);
	changeHaircolor = result => ProfileActions.changeHaircolor(result);
	changeEyecolor = result => ProfileActions.changeEyecolor(result);
	changeSize = e => ProfileActions.changeSize(e.target.value);
	changeWeight = e => ProfileActions.changeWeight(e.target.value);
	changeTitle = e => ProfileActions.changeTitle(e.target.value);
	changeSocialStatus = result => ProfileActions.changeSocialStatus(result);
	changeCharacteristics = e => ProfileActions.changeCharacteristics(e.target.value);
	changeOtherInfo = e => ProfileActions.changeOtherInfo(e.target.value);

	rerollHair = () => ProfileActions.rerollHair();
	rerollEyes = () => ProfileActions.rerollEyes();
	rerollSize = () => ProfileActions.rerollSize();
	rerollWeight = () => ProfileActions.rerollWeight();

	render() {

		const { age, characteristics, culture, eyecolor, eyecolorTags, dateofbirth, family, haircolor, haircolorTags, otherinfo, placeofbirth, race, size, socialstatus, socialstatusTags, title, weight } = this.props;

		const hairArr = race ? haircolorTags.map((name, i) => ({ id: i + 1, name })).filter(e => race.hairColors.includes(e.id)) : [];
		const eyesArr = race ? eyecolorTags.map((name, i) => ({ id: i + 1, name })).filter(e => race.eyeColors.includes(e.id)) : [];
		const socialArr = culture ? socialstatusTags.map((name, i) => ({ id: i + 1, name })).filter(e => culture.socialTiers.includes(e.id)) : [];

		return (
			<div className="personal-data">
				<div>
					<TextField
						label="Familie"
						value={family}
						onChange={this.changeFamily}
						/>
				</div>
				<div>
					<TextField
						label="Geburtsort"
						value={placeofbirth}
						onChange={this.changePlaceOfBirth}
						/>
				</div>
				<div>
					<TextField
						label="Geburtsdatum"
						value={dateofbirth}
						onChange={this.changeDateOfBirth}
						/>
				</div>
				<div>
					<TextField
						label="Alter"
						value={age}
						onChange={this.changeAge}
						/>
				</div>
				<InputButtonGroup className="reroll">
					<Dropdown
						label="Haarfarbe"
						value={haircolor}
						onChange={this.changeHaircolor}
						options={hairArr}
						/>
					<IconButton icon="&#xE863;" onClick={this.rerollHair} />
				</InputButtonGroup>
				<InputButtonGroup className="reroll">
					<Dropdown
						label="Augenfarbe"
						value={eyecolor}
						onChange={this.changeEyecolor}
						options={eyesArr}
						/>
					<IconButton icon="&#xE863;" onClick={this.rerollEyes} />
				</InputButtonGroup>
				<InputButtonGroup className="reroll">
					<TextField
						label="Körpergröße"
						value={size}
						onChange={this.changeSize}
						/>
					<IconButton icon="&#xE863;" onClick={this.rerollSize} />
				</InputButtonGroup>
				<InputButtonGroup className="reroll">
					<TextField
						label="Gewicht"
						value={weight}
						onChange={this.changeWeight}
						/>
					<IconButton icon="&#xE863;" onClick={this.rerollWeight} />
				</InputButtonGroup>
				<div>
					<TextField
						label="Titel"
						value={title}
						onChange={this.changeTitle}
						/>
				</div>
				<div>
					<Dropdown
						label="Sozialstatus"
						value={socialstatus}
						onChange={this.changeSocialStatus}
						options={socialArr}
						/>
				</div>
				<div>
					<TextField
						label="Charakteristika"
						value={characteristics}
						onChange={this.changeCharacteristics}
						/>
				</div>
				<div>
					<TextField
						label="Sonstiges"
						value={otherinfo}
						onChange={this.changeOtherInfo}
						/>
				</div>
			</div>
		);
	}
}
