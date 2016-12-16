import BorderButton from '../../components/BorderButton';
import CultureStore from '../../stores/CultureStore';
import { Profession } from '../../utils/DataUtils';
import ProfessionActions from '../../actions/ProfessionActions';
import ProfessionVariantActions from '../../actions/ProfessionVariantActions';
import ProfessionVariantStore from '../../stores/ProfessionVariantStore';
import ProfileStore from '../../stores/ProfileStore';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ProfessionsListItem extends Component {

	static propTypes = {
		currentID: PropTypes.string,
		currentVID: PropTypes.string,
		profession: PropTypes.instanceOf(Profession).isRequired,
		showAddSlidein: PropTypes.func.isRequired
	};

	selectProfession = () => ProfessionActions.selectProfession(this.props.profession.id);
	selectProfessionVariant = id => ProfessionVariantActions.selectProfessionVariant(id);

	render() {

		const { showAddSlidein, currentID, currentVID, profession } = this.props;

		const className = classNames({
			'active': profession.id === currentID
		});

		var variants;
		if (profession.id === currentID && profession.variants.length > 0) {
			var allVariants = ProfessionVariantStore.getAll().filter(e => {
				if (profession.variants.includes(e.id)) {
					if (e.reqs_p !== null) {
						return e.reqs_p.some(req => {
							if (req[0] === 'c') {
								let cultureID = CultureStore.getCurrentID();
								return !req[1].includes(cultureID);
							} else if (req[0] === 'g') {
								let gender = ProfileStore.getGender();
								return gender !== req[1];
							}
							return false;
						});
					}
					return true;
				}
				return false;
			});
			if (allVariants.length > 1) {
				allVariants = allVariants.map(e => ({
					name: `${e.name} (${profession.ap + e.ap} AP)`,
					value: e.id
				}));
				allVariants.splice(0, 0, {
					name: 'Keine Variante',
					value: null
				});
				variants = (
					<RadioButtonGroup active={currentVID} onClick={this.selectProfessionVariant} array={allVariants} />
				);
			}
		}

		return (
			<li className={className}>
				<div className="left">
					<h2>{profession.name} ({profession.ap} AP)</h2>
					{profession.subname !== '' ? <h3>{profession.subname}</h3> : null}
					{variants}
				</div>
				<div className="right">
					{
						profession.id === currentID ? (
							<BorderButton
								label="Weiter"
								onClick={showAddSlidein}
								primary
								/>
						) : (
							<BorderButton
								label="Auswählen"
								onClick={this.selectProfession}
								/>
						)
					}
				</div>
			</li>
		);
	}
}